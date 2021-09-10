var myCapacities = [1,1,1,1,1];




var menuDiv;
L.Control.myMenu = L.Control.extend(
{
    options:
    {
        position: 'topleft',
    },
    onAdd: function (map) {
        menuDiv = L.DomUtil.create('div', 'menu');
    /*    L.DomEvent
            .addListener(leaderboardDiv, 'click', L.DomEvent.stopPropagation)
            .addListener(leaderboardDiv, 'click', L.DomEvent.preventDefault)
            .addListener(leaderboardDiv, 'click', function () {
            drawnItems.clearLayers();
        });
*/
        menuDiv.innerHTML = getMenuDiv();
        return menuDiv;
    }
});

var mymenu = new L.Control.myMenu();
map.addControl(mymenu);


function getPlayerPoints(type,country){


  let myScore = [];

  switch (type){
    case "country":
        for ( var i = 0 ; i < 5 ; i ++ ){
            myScore[i] = country.properties.score[i];
        }
        return scoreBlock(myScore);
    case "empire":
        return empireScores(country);
    case "total":
        for ( var i = 0 ; i < 5 ; i ++ ){
            myScore[i] = myCapacities[i];
        }
        return scoreBlock(myScore);

  }

}

function scoreBlock(myScore){
  return  `
      <div style="display:inline-flex;align-items:center;">
        ${myScore[0]}
        <img src='${stats["Human Capital"].img}'>
         ${myScore[1]}
        <img src='${stats["Government"].img}'>
         ${myScore[2]}
        <img src='${stats["Industry"].img}'>
         ${myScore[3]}
        <img src='${stats["Military"].img}'>
         ${myScore[4]}
        <img src='${stats["Maritime"].img}'>
      </div>
  `
}

function empireScores(country){
  //gots to include this other countries...
  let countriesInfluenced = countryData.filter(x=>x.properties.influencer == country.properties.admin);
  let mydependents = countriesInfluenced.filter(x=>x.properties.Independence<-74)
  let myallies =  countriesInfluenced.filter(x=>x.properties.Independence>-75 && x.properties.Independence<-49 );
  let html = `
  <div style="width:100%;display:inline-flex;justify-content:space-between;align-items:center;">
     <div style=""><b>${mydependents.length} Allies</b></div>
     <div><b>> 75%</b></div>
     <div><b>3 -> 2</b></div>
  </div>
  `;
      mydependents.forEach(x=>{
        html+=`
          <div style="inline-block;">
              ${x.properties.Independence}
              ${x.properties.admin}
                &nbsp;
                &nbsp;
              ${scoreBlock(x.properties.score)}

          </div>
        `
      });
     html += `
     <div style="width:100%;display:inline-flex;justify-content:space-between;align-items:center;">
        <div style=""><b>${myallies.length} Friends</b></div>
        <div><b>> 50%</b></div>
        <div><b>3 -> 1</b></div>
     </div>
  `;
  myallies.forEach(x=>{
    html+=`
      <div style="inline-block;">
          ${x.properties.Independence}
          <img src="img/flag/${x.properties.flag}" style="height:1.5em;">
          ${x.properties.admin}
            &nbsp;
            &nbsp;
          ${scoreBlock(x.properties.score)}

      </div>
    `
  });
  /*for ( var i = 0 ; i < 5 ; i ++ ){
      myScore[i] = Math.floor(.25 * myallies.reduce((total, obj) => obj.properties.score[i] + total,0));
      myScore[i] += Math.floor(.5 * mydependents.reduce((total, obj) => obj.properties.score[i] + total,0));
  }*/
  return html
}

function myCountryInfo(){
  let countriesInfluenced = countryData.filter(x=>x.properties.influencer == myCountry.properties.admin);
  let mydependents = countriesInfluenced.filter(x=>x.properties.Independence<-74)
  let myallies =  countriesInfluenced.filter(x=>x.properties.Independence>-75 && x.properties.Independence<-49 )
    return `

      <div style="width:40em;">
          <div class="menu-button" style="display:inline-flex;align-items:center;width:100%;max-height:4em;width:30em;" onclick="gameLeaderboard()">
                  <img src="img/flag/${myCountry.properties.flag}" style="height:3em;">
                  ${myCountry.properties.admin}
                  <div>
                    <img src="img/icons/lightning-fill.svg" styl="height:1em;padding:0em 1em 0 2em;">
                    ${myCountry.properties.Independence}
                  </div>
                  <div id="myCountryPoints">
                    ${getPlayerPoints("total",myCountry)}
                  </div>
          </div>

          <div class="menu-button" style="padding-top:1em;position:absolute;top:7vh;width:30em;height:90vh">

                <h3 style="width:100%;font-size:1.6em;display:inline-flex;justify-content:space-between;">
                     <div style="display:inline-flex;align-items:center;">
                         <img src="img/flag/${selectedCountry.properties.flag}" style="height:1em;">
                         ${selectedCountry.properties.admin}
                   </div>
                    <div style="display:inline-flex;align-items:center;">
                       <button onclick="showPanel('panelstory')"><img src="img/icons/book.svg"></button>
                       <button onclick="showPanel('panelcard')"><img src="img/icons/flag.svg"></button>
                       <button onclick="showPanel('panelempire')"><img src="img/icons/globe2.svg"></button>
                    </div>
                </h3>
                <div>
                  ${(selectedCountry.properties.status!==undefined)?selectedCountry.properties.status:'Minor Country'}
                  <br>
                  Aligned with ${(selectedCountry.properties.influencer!==undefined)? selectedCountry.properties.influencer:'None'}
                  <img src="img/icons/lightning-fill.svg" style="height:1em;">
                  ${(selectedCountry.properties.Independence!==undefined)? selectedCountry.properties.Independence:''}
                </div>

                <div class="panel panelstory" style="border:1px solid black;margin:0 0em 0 0em;padding:.5em;display:inline-flex;">
                    <div style="width:50%;">
                       ${selectedCountry.desc}
                    </div>
                    <div style="width:50%">
                      <div>${getPolicyDeckSwitcher(selectedCountry, 0)}</div>
                      <button class="scenarioSwitchButton" onclick="beginGame('${selectedCountry.properties.admin}')">Begin</button>
                    </div>
                </div>
                <div class="panel panelcard">
                  <div class="playCardButton" onclick='attemptToPlayCard("${selectedCountry.properties.admin}")'>
                     Play Card
                   </div>
                 </div>

                  <div class="panel panelempire" style="border:1px solid black;margin:0 0em 0 0em;padding:.5em;">


                      <div id="myEmpirePoints">
                          <div>
                            <img src="img/flag/${selectedCountry.properties.flag}" style="height:1.5em;">
                            ${selectedCountry.properties.admin}
                              ${getPlayerPoints("country",selectedCountry)}
                          </div>
                          ${getPlayerPoints("empire",selectedCountry)}

                      </div>
                  </div>
      </div>
  </div>
      `
}

function showPanel(panel){
    var els = document.getElementsByClassName("panel");
    for ( var i = 0 ; i < els.length ; i ++){els[i].style.display="none";}
    var els = document.getElementsByClassName(panel);
    for ( var i = 0 ; i < els.length ; i ++){els[i].style.display="";}
}


function getMenuDiv(){
    switch (gameState){
        case "gamePlay":
            return `
            ${myCountryInfo()}
            <div style="width:100vw;text-align:right;">
                 <div class="" style="text-align:right;width:100%;">
                     <div class="deck rightAlign" onclick="gameCards()">Cards<br><br>4
                     </div>
                 </div>
                 <div class="" style="text-align:right;width:100%;">
                     <div class="deck rightAlign" style="top:15em;" onclick="window.alert('In game deck viewer coming soon')">Deck<br><br>82
                     </div>
                 </div>
                 <div class="rightAlign" style="top:30em;"><button onclick="toggleTime()"><img src="img/icons/stopwatch-fill.svg"></button></div>
                 <div class="rightAlign" style="top:25em;"><button onclick="rulesMenu()">Rules</button></div>
            </div>

        `
        default: return `
              ${myCountryInfo()}
               <div style="width:100vw;text-align:right;">
                    <div class="" style="text-align:right;width:100%;">
                        <div class="deck rightAlign" onclick="policyDeckViewer()">Policies<br><br>6
                        </div>
                    </div>
                    <div class="" style="text-align:right;width:100%;">
                        <div class="deck rightAlign" style="top:15em;" onclick="nationalDeckViewer()">National Decks<br><br>6
                        </div>
                    </div>
                    <div class="rightAlign" style="top:23em;"><button onclick="rulesMenu()">Rules</button></div>
                    <button onclick="mainMenu()">Main Menu</button>
               </div>
              `
    }
}

function updateMenuDiv(){
  menuDiv.innerHTML = getMenuDiv();
}
