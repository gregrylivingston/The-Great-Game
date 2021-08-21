
var leaderboardDiv;
L.Control.leaderboard = L.Control.extend(
{
    options:
    {
        position: 'topright',
    },
    onAdd: function (map) {
        leaderboardDiv = L.DomUtil.create('div', 'leaderboard overlayMenu background');
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
   ${getAllScores(myCountry,0)}
   <!--
                          <table style="width:100%;max-width:650px;text-align:center;">
                            <tr>
                              <th onclick="leaderboardDiv.innerHTML = getPowerBoard(-1)">#</th>
                              <th></th>
                              <th><button class="filter-button"  onclick="leaderboardDiv.innerHTML = getPowerBoard(-1,'${scope}')"><img src="img/icons/star-fill.svg"></button></th>
                              <th><img src="img/icons/building.svg" onclick="leaderboardDiv.innerHTML = getPowerBoard(0,'${scope}')"></th>
                              <th><img src="img/icons/bank2.svg" onclick="leaderboardDiv.innerHTML = getPowerBoard(1,'${scope}')"></th>
                              <th><img src="img/icons/gear-wide-connected.svg" onclick="leaderboardDiv.innerHTML = getPowerBoard(2,'${scope}')"></th>
                              <th><img src="img/icons/shield-fill.svg" onclick="leaderboardDiv.innerHTML = getPowerBoard(3,'${scope}')"></th>
                              <th><img src="img/icons/compass-fill.svg" onclick="leaderboardDiv.innerHTML = getPowerBoard(4,'${scope}')"></th>
                            </tr>-->
  `;/*
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
      html+=`</table>`*/
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

function getAllScores(country,i){
   let scope = 0;
   let countriesInfluenced = countryData.filter(x=>x.properties.influencer == country.properties.admin);
   let mydependents = countriesInfluenced.filter(x=>x.properties.Independence<-74)
   let myallies =  countriesInfluenced.filter(x=>x.properties.Independence>-75 && x.properties.Independence<-49 )
   let myfriends =  countriesInfluenced.filter(x=>x.properties.Independence>-50 && x.properties.Independence<-24 )
   return `
     <div style="width:90%;display:inline-flex;align-items:center;padding:1em 1em 1em 1em;justify-content:space-between;">
        <h1 style="width:80%;display:inline-flex;align-items:center;">
            <img src="img/flag/${country.properties.flag}" style="height:1em;padding:0 .5em 0 .5em">
            ${country.properties.admin}
        </h1>
        <div style="width:20%;text-align:right">
            <button class="filter-button"><img src="img/icons/globe2.svg"></button>
            <button class="filter-button"><img src="img/icons/eye-fill.svg"></button>
        </div>
     </div>
     <table style="width:100%;max-width:500px;text-align:center;">
         <tr>
           <th style="min-width:125px;text-align:left;"></th>
           <th><img src="img/icons/building.svg" onclick="leaderboardDiv.innerHTML = getPowerBoard(0,'${scope}')"></th>
           <th><img src="img/icons/bank2.svg" onclick="leaderboardDiv.innerHTML = getPowerBoard(1,'${scope}')"></th>
           <th><img src="img/icons/gear-wide-connected.svg" onclick="leaderboardDiv.innerHTML = getPowerBoard(2,'${scope}')"></th>
           <th><img src="img/icons/shield-fill.svg" onclick="leaderboardDiv.innerHTML = getPowerBoard(3,'${scope}')"></th>
           <th><img src="img/icons/compass-fill.svg" onclick="leaderboardDiv.innerHTML = getPowerBoard(4,'${scope}')"></th>
         </tr>


       <tr>
          <td styl="text-align:left;">Annual Capacity</td>
          <td>${country.properties.score[0] + Math.floor(.25 * myallies.reduce((total, obj) => obj.properties.score[0] + total,0)) + Math.floor(.5 * mydependents.reduce((total, obj) => obj.properties.score[0] + total,0))}</td>
          <td>${country.properties.score[1] + Math.floor(.25 * myallies.reduce((total, obj) => obj.properties.score[1] + total,0)) + Math.floor(.5 * mydependents.reduce((total, obj) => obj.properties.score[1] + total,0))}</td>
          <td>${country.properties.score[2] + Math.floor(.25 * myallies.reduce((total, obj) => obj.properties.score[2] + total,0)) + Math.floor(.5 * mydependents.reduce((total, obj) => obj.properties.score[2] + total,0))}</td>
          <td>${country.properties.score[3] + Math.floor(.25 * myallies.reduce((total, obj) => obj.properties.score[3] + total,0)) + Math.floor(.5 * mydependents.reduce((total, obj) => obj.properties.score[3] + total,0))}</td>
          <td>${country.properties.score[4] + Math.floor(.25 * myallies.reduce((total, obj) => obj.properties.score[4] + total,0)) + Math.floor(.5 * mydependents.reduce((total, obj) => obj.properties.score[4] + total,0))}</td>
       </tr>

       <tr><td> &nbsp;  </td></tr>
       <tr>
          <td>${country.properties.admin}</td>
          <td>${country.properties.score[0]}</td>
          <td>${country.properties.score[1]}</td>
          <td>${country.properties.score[2]}</td>
          <td>${country.properties.score[3]}</td>
          <td>${country.properties.score[4]}</td>
       </tr>
        <tr>
           <td>${countriesInfluenced.length} <img src="img/icons/globe2.svg" style="height:1em"></td>
           <td>${Math.floor(1 * myallies.reduce((total, obj) => obj.properties.score[0] + total,0)) + Math.floor(1 * mydependents.reduce((total, obj) => obj.properties.score[0] + total,0))} > ${Math.floor(.25 * myallies.reduce((total, obj) => obj.properties.score[0] + total,0)) + Math.floor(.5 * mydependents.reduce((total, obj) => obj.properties.score[0] + total,0))}</td>
           <td>${Math.floor(1 * myallies.reduce((total, obj) => obj.properties.score[1] + total,0)) + Math.floor(1 * mydependents.reduce((total, obj) => obj.properties.score[1] + total,0))} > ${Math.floor(.25 * myallies.reduce((total, obj) => obj.properties.score[1] + total,0)) + Math.floor(.5 * mydependents.reduce((total, obj) => obj.properties.score[1] + total,0))}</td>
           <td>${Math.floor(1 * myallies.reduce((total, obj) => obj.properties.score[2] + total,0)) + Math.floor(1 * mydependents.reduce((total, obj) => obj.properties.score[2] + total,0))} > ${Math.floor(.25 * myallies.reduce((total, obj) => obj.properties.score[2] + total,0)) + Math.floor(.5 * mydependents.reduce((total, obj) => obj.properties.score[2] + total,0))}</td>
           <td>${Math.floor(1 * myallies.reduce((total, obj) => obj.properties.score[3] + total,0)) + Math.floor(1 * mydependents.reduce((total, obj) => obj.properties.score[3] + total,0))} > ${Math.floor(.25 * myallies.reduce((total, obj) => obj.properties.score[3] + total,0)) + Math.floor(.5 * mydependents.reduce((total, obj) => obj.properties.score[3] + total,0))}</td>
           <td>${Math.floor(1 * myallies.reduce((total, obj) => obj.properties.score[4] + total,0)) + Math.floor(1 * mydependents.reduce((total, obj) => obj.properties.score[4] + total,0))} > ${Math.floor(.25 * myallies.reduce((total, obj) => obj.properties.score[4] + total,0)) + Math.floor(.5 * mydependents.reduce((total, obj) => obj.properties.score[4] + total,0))}</td>

        </tr>

         <tr><td> &nbsp; </td></tr>
         <tr>
            <td>${mydependents.length} Dependents 2 > 1</td>
            <td>${mydependents.reduce((total, obj) => obj.properties.score[0] + total,0)} > ${Math.floor(.5 * mydependents.reduce((total, obj) => obj.properties.score[0] + total,0))}</td>
            <td>${mydependents.reduce((total, obj) => obj.properties.score[1] + total,0)} > ${Math.floor(.5 * mydependents.reduce((total, obj) => obj.properties.score[1] + total,0))}</td>
            <td>${mydependents.reduce((total, obj) => obj.properties.score[2] + total,0)} > ${Math.floor(.5 * mydependents.reduce((total, obj) => obj.properties.score[2] + total,0))}</td>
            <td>${mydependents.reduce((total, obj) => obj.properties.score[3] + total,0)} > ${Math.floor(.5 * mydependents.reduce((total, obj) => obj.properties.score[3] + total,0))}</td>
            <td>${mydependents.reduce((total, obj) => obj.properties.score[4] + total,0)} > ${Math.floor(.5 * mydependents.reduce((total, obj) => obj.properties.score[4] + total,0))}</td>
         </tr>
         <tr>
            <td>${myallies.length} Allies 4 > 1</td>
            <td>${myallies.reduce((total, obj) => obj.properties.score[0] + total,0)} > ${Math.floor(.25 * myallies.reduce((total, obj) => obj.properties.score[0] + total,0))}</td>
            <td>${myallies.reduce((total, obj) => obj.properties.score[1] + total,0)} > ${Math.floor(.25 * myallies.reduce((total, obj) => obj.properties.score[1] + total,0))}</td>
            <td>${myallies.reduce((total, obj) => obj.properties.score[2] + total,0)} > ${Math.floor(.25 * myallies.reduce((total, obj) => obj.properties.score[2] + total,0))}</td>
            <td>${myallies.reduce((total, obj) => obj.properties.score[3] + total,0)} > ${Math.floor(.25 * myallies.reduce((total, obj) => obj.properties.score[3] + total,0))}</td>
            <td>${myallies.reduce((total, obj) => obj.properties.score[4] + total,0)} > ${Math.floor(.25 * myallies.reduce((total, obj) => obj.properties.score[4] + total,0))}</td>
         </tr>
         <tr>
            <td>${myfriends.length} Friends</td>
            <td>${myfriends.reduce((total, obj) => obj.properties.score[0] + total,0)} > ${Math.floor(.0 * myfriends.reduce((total, obj) => obj.properties.score[0] + total,0))}</td>
            <td>${myfriends.reduce((total, obj) => obj.properties.score[1] + total,0)} > ${Math.floor(.0 * myfriends.reduce((total, obj) => obj.properties.score[1] + total,0))}</td>
            <td>${myfriends.reduce((total, obj) => obj.properties.score[2] + total,0)} > ${Math.floor(.0 * myfriends.reduce((total, obj) => obj.properties.score[2] + total,0))}</td>
            <td>${myfriends.reduce((total, obj) => obj.properties.score[3] + total,0)} > ${Math.floor(.0 * myfriends.reduce((total, obj) => obj.properties.score[3] + total,0))}</td>
            <td>${myfriends.reduce((total, obj) => obj.properties.score[4] + total,0)} > ${Math.floor(.0 * myfriends.reduce((total, obj) => obj.properties.score[4] + total,0))}</td>

         </tr>

      </table>
       <br><br>
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
