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

  //gots to include this other countries...
  let countriesInfluenced = countryData.filter(x=>x.properties.influencer == country.properties.admin);
  let mydependents = countriesInfluenced.filter(x=>x.properties.Independence<-74)
  let myallies =  countriesInfluenced.filter(x=>x.properties.Independence>-75 && x.properties.Independence<-49 )

  switch (type){
    case "country":
        for ( var i = 0 ; i < 5 ; i ++ ){
            myCapacities[i] = country.properties.score[i];
        }
        break
    case "empire":
        for ( var i = 0 ; i < 5 ; i ++ ){
            myCapacities[i] = Math.floor(.25 * myallies.reduce((total, obj) => obj.properties.score[i] + total,0));
            myCapacities[i] += Math.floor(.5 * mydependents.reduce((total, obj) => obj.properties.score[i] + total,0));
        }
        break
    case "total":
        for ( var i = 0 ; i < 5 ; i ++ ){
            myCapacities[i] = country.properties.score[i];
            myCapacities[i] += Math.floor(.25 * myallies.reduce((total, obj) => obj.properties.score[i] + total,0));
            myCapacities[i] += Math.floor(.5 * mydependents.reduce((total, obj) => obj.properties.score[i] + total,0));
        }
        break
  }

    return  `
        <div style="display:inline-flex;align-items:center;">
          ${myCapacities[0]}
          <img src='${stats["Human Capital"].img}'>
           ${myCapacities[1]}
          <img src='${stats["Government"].img}'>
           ${myCapacities[2]}
          <img src='${stats["Industry"].img}'>
           ${myCapacities[3]}
          <img src='${stats["Military"].img}'>
           ${myCapacities[4]}
          <img src='${stats["Maritime"].img}'>
        </div>
    `
}

function myCountryInfo(){
  if ( myCountry =="United Kingdom") {myCountry=countryData.find(x=>x.properties.admin =="United Kingdom");}
    return `
    <div class="menu-button" style="display:inline-flex;align-items:center;" onclick="gameLeaderboard()">
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
  <div class="menu-button" onclick="mainMenu()">
    <div>
      <img src="img/flag/${myCountry.properties.flag}" style="height:1.5em;">
        ${getPlayerPoints("country",myCountry)}
    </div>
    <div id="myEmpirePoints">
      <img src="img/icons/globe2.svg" style="height:1.5em;margin:0 .25em 0 .25em">
        ${getPlayerPoints("empire",myCountry)}

    </div>
  </div>`
}


function getMenuDiv(){
    switch (gameState){
        case "gamePlay":
            return `
            <div>
                    <div class="menu">
                    ${myCountryInfo()}
                    </div>
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
            </div>

        `
        default: return `
            <div>
                <div class="menu">
                    ${myCountryInfo()}
               </div>
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
               </div>
            </div>
              `
    }
}

function updateMenuDiv(){
  menuDiv.innerHTML = getMenuDiv();
}
