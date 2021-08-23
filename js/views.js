var myCapacities = [1,1,1,1,1];


function updatePlayerPoints(){

    document.getElementById("myPoints").innerHTML =  getPlayerPoints();
}

function getPlayerPoints(){
    return  `
        <div>
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
      <div id="myPoints">
        ${getPlayerPoints()}
      </div>
  </div>
  <div class="menu-button" onclick="mainMenu()">
    <div>
      <img src="img/icons/globe2.svg" style="height:4em;position:absolute;left:50vw;top:-.5em;">

      <img src="img/flag/${myCountry.properties.flag}" style="height:3em;position:absolute;left:50vw;top:0em">
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
