
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
  <div style="width:100%;display:inline-flex;justify-content:flex-end;">
      <div style="width:60%">
          <button class="filter-button" onclick="leaderboardDiv.innerHTML = getPowerBoard('${type}','Global')"><img src="img/icons/globe2.svg"></button>
          <button class="filter-button" onclick="leaderboardDiv.innerHTML = getPowerBoard('${type}','viewFlip')"><img src="img/icons/eye-fill.svg"></button>
      </div>
  </div>

                          <table style="width:100%;max-width:500px;text-align:center;">
                            <tr>
                              <th onclick="leaderboardDiv.innerHTML = getPowerBoard(-1)">#</th>
                              <th></th>
                              <th><button class="filter-button"  onclick="leaderboardDiv.innerHTML = getPowerBoard(-1,'${scope}')"><img src="img/icons/star-fill.svg"></button></th>
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
      }

  //add headers for secondary powers
    html += `<tr>
        <td></td>        <td></td>
        <td><img src="img/icons/star.svg"></td>
        </tr>
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

function gameLeaderboard(){
  if ( document.getElementsByClassName("leaderboard")[0] == undefined){
    map.addControl(myleaderboard);
  } else {
    map.removeControl(myleaderboard);
  }
}


  function resetMap(){
    map.removeLayer(myLayer);
    myLayer = buildLayer();
    myLayer.addTo(map);
    if ( leaderboardDiv!==undefined){leaderboardDiv.innerHTML = getPowerBoard();}
  }
