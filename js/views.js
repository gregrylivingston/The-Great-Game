var views = {};
views.gg = function (){ return `
    <div class="view">
        <h1>Welcome to The Great Game</h1>
        <button onclick="this.parentElement.remove()">Close</button>
    </div>
    `
}

function addView(newView){
//    document.getElementsByClassName("mainStage")[0].innerHTML += views[newView]();
    var popup = L.popup()
        .setLatLng([70, -170])
        .setContent(views[newView]())
        .openOn(map);
}



var leaderboardDiv;
L.Control.leaderboard = L.Control.extend(
{
    options:
    {
        position: 'topright',
    },
    onAdd: function (map) {
        leaderboardDiv = L.DomUtil.create('div', 'leaderboard');
    /*    L.DomEvent
            .addListener(leaderboardDiv, 'click', L.DomEvent.stopPropagation)
            .addListener(leaderboardDiv, 'click', L.DomEvent.preventDefault)
            .addListener(leaderboardDiv, 'click', function () {
            drawnItems.clearLayers();
        });
*/
        leaderboardDiv.innerHTML = getPowerBoard();
        return leaderboardDiv;
    }
});
var myleaderboard = new L.Control.leaderboard();
map.addControl(myleaderboard);

var flip = false;

function getPowerBoard(type=-1,scope="Domestic"){
  if (scope == "viewFlip"){
    if (flip == false ){
      document.getElementsByClassName("leaderboard")[0].style.width="85vw";
      document.getElementsByClassName("leaderboard")[0].style.height="85vh";
      flip =true;
    } else {
      document.getElementsByClassName("leaderboard")[0].style.width="";
      document.getElementsByClassName("leaderboard")[0].style.height="";
      flip = false;
    }
  }
  scope = "Domestic";
  let html = `
  <div style="width:100%;display:inline-flex;justify-content:space-between;">
      <h3 style="width:45%">Great Powers</h3>
      <div style="width:60%">
          <button class="filter-button" onclick="leaderboardDiv.innerHTML = getPowerBoard('${type}','Domestic')"><img src="img/icons/star-fill.svg"></button>
          <button class="filter-button" onclick="leaderboardDiv.innerHTML = getPowerBoard('${type}','Influence')"><img src="img/icons/compass.svg"></button>
          <button class="filter-button" onclick="leaderboardDiv.innerHTML = getPowerBoard('${type}','Global')"><img src="img/icons/globe2.svg"></button>
          <button class="filter-button" onclick="leaderboardDiv.innerHTML = getPowerBoard('${type}','viewFlip')"><img src="img/icons/eye-fill.svg"></button>
      </div>
  </div>

                          <table style="width:100%;max-width:500px;text-align:center;">
                            <tr>
                              <th onclick="leaderboardDiv.innerHTML = getPowerBoard(-1)">#</th>
                              <th><th><img src="img/icons/star-fill.svg" onclick="leaderboardDiv.innerHTML = getPowerBoard(-1,'${scope}')"></th></th>
                              <th><img src="img/icons/building.svg" onclick="leaderboardDiv.innerHTML = getPowerBoard(0,'${scope}')"></th>
                              <th><img src="img/icons/bank2.svg" onclick="leaderboardDiv.innerHTML = getPowerBoard(1,'${scope}')"></th>
                              <th><img src="img/icons/gear-wide-connected.svg" onclick="leaderboardDiv.innerHTML = getPowerBoard(2,'${scope}')"></th>
                              <th><img src="img/icons/shield-fill.svg" onclick="leaderboardDiv.innerHTML = getPowerBoard(3,'${scope}')"></th>
                              <th><img src="img/icons/compass-fill.svg" onclick="leaderboardDiv.innerHTML = getPowerBoard(4,'${scope}')"></th>
                            </tr>
  `;
  //add great powers ---- this only deals with the powers and not their spheres of influence....
  let powerdata = countryData.filter(x=>x.properties.status == "Great Power");
      if ( scope== "Domestic"){
          if ( type != -1){ powerdata.sort((a,b)=>b.properties.score[type]-a.properties.score[type])
          } else { powerdata.sort((a,b)=>b.properties.score.reduce((a, b) => a + b, 0)-a.properties.score.reduce((a, b) => a + b, 0))}
          powerdata.forEach((x,i)=>{html += getPowerBoardRow(x,i+1)});
      } else if (scope == "Influence"){
          powerdata.forEach(x=>
              { x.Influence = countryData.filter(c=>c.properties.influencer == x.properties.admin);
              }
          )
          console.log(powerdata[0].Influence);
      }

  //add headers for secondary powers
    html += `</table>
        <h3>Secondary Powers</h3>
        <table style="width:100%;max-width:500px;text-align:center;">
    `;
  //add secondary powers

  let secondarydata = countryData.filter(x=>x.properties.status == "Secondary Power");
      if ( type != -1){
          secondarydata.sort((a,b)=>b.properties.score[type]-a.properties.score[type])
      } else {
        secondarydata.sort((a,b)=>b.properties.score.reduce((a, b) => a + b, 0)-a.properties.score.reduce((a, b) => a + b, 0))
      }
  secondarydata.forEach((x,i)=>{html += getPowerBoardRow(x,i+6)});
      html+=`</table>`
  return html;
}

function getPowerBoardRow(country,i){
  return `
  <tr>
    <td>${i}</td>
    <td><img src="img/flag/${country.properties.flag}" style="height:1em"></td>
    <td>${country.properties.score.reduce((a, b) => a + b, 0)}</td>
    <td>${country.properties.score[0]}</td>
    <td>${country.properties.score[1]}</td>
    <td>${country.properties.score[2]}</td>
    <td>${country.properties.score[3]}</td>
    <td>${country.properties.score[4]}</td>
  </tr>
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

function getMenuDiv(){
      return `
        <div class="menu">
            <button class="menu-button" onclick="mainMenu()">The Great Game</button>
            <button class="menu-button" onclick="cardMenu()">Cards</button>
            <button class="menu-button">Rules</button>
            <button class="menu-button"><img src="img/icons/stopwatch-fill.svg"</button>

        </div>
      `
}

function mainMenu(){
  let main = document.getElementById("mainMenu");
  if (main !== null ){
    main.remove();
  } else {
    let main = document.getElementsByClassName("overlayMenu");
    if (main[0] !== undefined ){main[0].remove();}
    let majorPowerImages = '';
    let majorPowers = scenarios[scenarioIterator].countries.filter(x=>x.status=="Great Power");
        majorPowers.forEach(x=>{majorPowerImages+=`<img src="img/flag/${x.flag}" style="height:2.5em;padding-right:.5em">`})
    let secondaryPowerImages = '';
    let secondaryPowers = scenarios[scenarioIterator].countries.filter(x=>x.status=="Secondary Power");
        secondaryPowers.forEach(x=>{secondaryPowerImages+=`<img src="img/flag/${x.flag}" style="height:2.5em;padding-right:.5em">`})
  document.getElementsByClassName("menu")[0].insertAdjacentHTML("afterend", `
      <div id="mainMenu" class="overlayMenu">
        <h1>The Great Game</h1>
        <h3 style="width:100%;">
            <button onclick="previousScenario()"><</button>
            ${scenarios[scenarioIterator].title} - ${scenarios[scenarioIterator].year}
            <button onclick="nextScenario()">></button>
        </h3>
        <br>
        <p>${scenarios[scenarioIterator].text}
        </p>
        <br>
        <h3>Major Powers</h3>
          ${majorPowerImages}
          <h3>Secondary Powers</h3>
          ${secondaryPowerImages}

      </div>
  `);
}}


function cardMenu(filterKey='flavor',filterValue='Human Capital'){
  let main = document.getElementById("cardMenu");
  if (main !== null ){
    main.remove();
  } else {
    let main = document.getElementsByClassName("overlayMenu");
    if (main[0] !== undefined ){main[0].remove();}
  document.getElementsByClassName("menu")[0].insertAdjacentHTML("afterend", `
      <div id="cardMenu" class="overlayMenu">
        <div style="display:inline-block;width:100%;vertical-align:top;">
          <h1 style="display:inline-block">Cards</h1>
          <button>Global</button>
          <button>Influence</button>
          <button>Domestic</button>
          &nbsp;
          <button><img src="img/icons/building.svg" onclick="viewCards('flavor','Human Capital')"></button>
          <button><img src="img/icons/bank2.svg" onclick="viewCards('flavor','Government')"></button>
          <button><img src="img/icons/gear-wide-connected.svg" onclick="viewCards('flavor','Industry')"></button>
          <button><img src="img/icons/shield-fill.svg" onclick="viewCards('flavor','Military')"></button>
          <button><img src="img/icons/compass-fill.svg" onclick="viewCards('flavor','Maritime')"></button>
        </div>
        <div style="display:inline-block;width:100%;vertical-align:top;" id="cardViewer">
            ${makeCards(filterKey,filterValue)}
        </div>
      </div>
  `);
}}

function viewCards(filterKey,filterValue){
  document.getElementById("cardViewer").innerHTML = makeCards(filterKey,filterValue);
}

function makeCards(filterKey,filterValue){
  let html = "";
  let cardsToShow = cards;
  if (filterKey!==undefined){
      cardsToShow = cardsToShow.filter( x => x[filterKey] == filterValue );
  }
  cardsToShow.forEach(x=>{html+=makeCard(x);})

  return html
}

function makeCard(x){
    let cost = "";
    if ( x.cost[0] > 0 ){cost+= x.cost[0] + " <img src='" + stats["Human Capital"].img + "'> "}
    if ( x.cost[1] > 0 ){cost+= x.cost[1] + " <img src='" + stats["Government"].img + "'> "}
    if ( x.cost[2] > 0 ){cost+= x.cost[2] + " <img src='" + stats["Industry"].img + "'> "}
    if ( x.cost[3] > 0 ){cost+= x.cost[3] + " <img src='" + stats["Military"].img + "'> "}
    if ( x.cost[4] > 0 ){cost+= x.cost[4] + " <img src='" + stats["Maritime"].img + "'> "}
    let img = "";
    if ( x.img !== undefined ){img = x.img.img;}
    let effects = "";
    if ( x.effects !== undefined ){
      effects+="<button>";
      x.effects.forEach(x=>{effects+= x.restriction + " " + x.target + " " + x.modEffect + x.modAmount + " <img src='" + stats[x.modTarget].img + "'><br>"})
      effects+="</button>";

    }

    return `
      <div class="card">
        <div style="width:100%;display:inline-flex;">
          <img style="height:2em;width:15%;" src="${stats[x.flavor].img}">
          <h3 style="display:inline-block;width:85%;">${x.title}</h3>
        </div>
          ${img.replace(".","_s.")}
        <div style="width:100%;height:9em;">
            ${effects}
        </div>

        <div style="width:100%;">${cost}</div>

      </div>
    `
}

var stats={
  "Human Capital":{img:"img/icons/building.svg"},
  Government:{img:"img/icons/bank2.svg"},
  Industry:{img:"img/icons/gear-wide-connected.svg"},
  Military:{img:"img/icons/shield-fill.svg"},
  Maritime:{img:"img/icons/compass-fill.svg"},
  Independance:{img:"img/icons/lightning-fill.svg"},

}
