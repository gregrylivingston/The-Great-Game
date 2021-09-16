
//returns an html div with either the country's score or the empire's score
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

//this creates an element that shows the country's entire list of allies, friends, dependants, and shows their 'scores'
function empireScores(country){
  //gots to include this other countries... create a list of
      //all countries that I influence --- I don't get points from these
      //mydependents - countries with independance below -75
      //my allies - countries between -74 and -49
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
    return `
      <div style="width:40em;">
          ${html_playersCountryTop()}
          <div class="menu-button" style="padding-top:1em;position:absolute;top:7vh;width:30em;height:90vh">
            ${html_selectedCountryMenuTop()}
            ${html_selectedCountryStory()}
            ${html_selectedCountryCards()}
            ${html_selectedCountryEmpire()}
      </div>
  </div>
      `
}

function html_playersCountryTop(){
  return `
  <div class="menu-button" style="display:inline-flex;align-items:center;width:100%;height:7vh;width:30em;" onclick="gameLeaderboard()">
          <img src="img/flag/${myCountry.properties.flag}" style="height:3em;">
          ${myCountry.properties.admin}
          <div>
            <img src="img/icons/lightning-fill.svg" styl="height:1em;padding:0em 1em 0 2em;">
            ${myCountry.properties.Independence}
          </div>
          <div id="myCountryPoints">
            ${getPlayerPoints("total",myCountry)}
          </div>
  </div>`
}

function html_selectedCountryMenuTop(){
  return `
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
  `
}

function html_selectedCountryStory(){
  return `
  <div class="panel panelstory" style="border:1px solid black;margin:0 0em 0 0em;padding:.5em;">
      <div>
         ${selectedCountry.desc}
      </div>
      <div style="display:inline-flex;align-items:center;justify-content:space-around;">
        <div style="width:60%">
            ${getPolicyDeckSwitcher(selectedCountry, 0)}
        </div>
        <div style="width:40%;display:inline-flex;align-items:center;justify-content:space-around;">
            <button style="width:80%;font-size:2em;height:5em;" onclick="beginGame('${selectedCountry.properties.admin}')">Begin</button>
        </div>
      </div>
  </div>
`
}

function html_selectedCountryCards(){
  return `
    <div class="panel panelcard">
      <div class="playCardButton" onclick='attemptToPlayCard("${selectedCountry.properties.admin}")'>
         Play Card
       </div>
     </div>`
}

function html_selectedCountryEmpire(){
  return `
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
  `
}
