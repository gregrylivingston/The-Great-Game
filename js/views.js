


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

function getMenuDiv(){
    switch (gameState){
        case "gamePlay": return `
        <div class="menu">
            <div>
                <div class="menu">
                    <div class="menu-button" onclick="gameLeaderboard()">
                        <img src="img/flag/${myCountry.properties.flag}" style="height:3em;">
                        ${myCountry.properties.admin}
                        <img src="img/icons/lightning.svg" styl="height:1em;padding:0em 1em 0 2em;">
                        ${myCountry.properties.Independence}

                    </div>
                    <div class="menu-button"  onclick="gameLeaderboard()"><img src="img/icons/globe2.svg" style="height:3em;"></div>
               </div>
               <div style="width:100%;text-align:right;">
                    <div class=""><img src="img/icons/EmptyCard.svg"  onclick="gameCards()" style="width:6em;padding:2em;"></div>

                    <div><img onclick="toggleTime()" src="img/icons/stopwatch-fill.svg"></div>
                    <div class=""><button onclick="rulesMenu()">Rules</button></div>
               </div>
            </div>
        </div>
        <div id="myPoints">
            MyScore 1 , 2, 3, 4
        </div>
        `
        default: return `
            <div>
                <div class="menu">
                    <div class="menu-button"><img src="img/flag/us.png" style="height:3em;"></div>
                    <div class="menu-button" onclick="mainMenu()"><img src="img/icons/globe2.svg" style="height:3em;"></div>
               </div>
               <div style="width:100vw;text-align:right;">
                    <div class="" style="text-align:right;width:100%;">
                        <div class="deck rightAlign" onclick="policyDeckViewer()">Policies<br><br>6
                        </div>
                    </div>
                    <div class="" style="text-align:right;width:100%;">
                        <div class="deck rightAlign" style="top:13em;" onclick="nationalDeckViewer()">National Decks<br><br>6
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




var stats={
  "Human Capital":{
        img:"img/icons/building.svg",
        pos:0,
        desc:"Human Capital",
        longDesc:`Human Capital   brings influence through talent, culture and the capacities of people.`
      },
  Government:{
        img:"img/icons/bank2.svg",
        pos:1,
        desc:"Government",
        longDesc:`The institutional and executive power of aGovernment.`
      },
  Industry:{
        img:"img/icons/gear-wide-connected.svg",
        pos:2,
        desc:"Industry",
        longDesc:`The power of Industry, productive workers, science, and capital.`
      },
  Military:{
        img:"img/icons/shield-fill.svg",
        pos:3,
        desc:"Military Strength",
        longDesc:`Military, continuing the negotiation through... other means.`
},
  Maritime:{img:"img/icons/compass-fill.svg",
        pos:4,
        desc:"Maritime Power",
        longDesc:`Maritime Power, the ability to exert your influence across the sea or globe.`
      },
  Independence:{
        img:"img/icons/lightning-fill.svg",
        pos:-1,
        desc:`Independance There are a variety of categories here....`
      },
  Empire:{
        img:"img/icons/globe2.svg",
        pos:-1,
        desc:`The Great Game - this symbol is used to symbolize the global network of alliances, friends, enemies and dependants that make up the Great Game.
            Great powers and secondary powers not only get a portion of their dependants, allies, and friends capacities, they have additional
            abilities allowing them to influence other countries, defending and developing their allies while  undermining the other powers.
        `
      },
  Country1:{
        img:"img/icons/bullseye.svg",
        pos:-1,
        desc:`Great Power`
      },
  Country2:{
        img:"img/icons/vinyl.svg",
        pos:-1,
        desc:`Secondary Power`
      },
  Country3:{
        img:"img/icons/record-circle.svg",
        pos:-1,
        desc:`Influential Minor`
      },
  Country4:{
        img:"img/icons/record-fill.svg",
        pos:-1,
        desc:`Minor Country`
      },
  Dependent:{
        img:"img/flag/us.png",
        pos:-1,
        desc:`-100 to -75 <br> Dependant`,
        background:color.blue1
      },
  Ally:{
        img:"img/flag/us.png",
        pos:-1,
        desc:`-75 to -50 <br>Ally`,
        background:color.blue2
      },
  Friend:{
        img:"img/flag/us.png",
        pos:-1,
        desc:`-50 to -25 <br>Friend`,
        background:color.green3
      },
  Neutral:{
        img:"img/icons/lightning.svg",
        pos:-1,
        desc:`-25 to 25 <br>Neutral`
      },
  Independent:{
        img:"img/icons/lightning-fill.svg",
        pos:-1,
        desc:`25 to 100<br>Independent`,
        background:'grey'
      },
  "The Great Game":{
        img:"img/icons/sunrise.svg",
        pos:-1,
        desc:``,
      },
  "The Atomic Age":{
        img:"img/icons/mask.svg",
        pos:-1,
        desc:``
      },
  "Virtual Conflict":{
        img:"img/icons/moon-stars.svg",
        pos:-1,
        desc:``,
      },
  "Countries":{
        img:"img/icons/stars.svg",
        pos:-1,
        desc:``,
      },
}
