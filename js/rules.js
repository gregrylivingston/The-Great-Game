

function rulesMenu(filterKey='',filterValue=''){
  let main = document.getElementById("rulesMenu");
  if (main !== null ){
    main.remove();
  } else {
    let main = document.getElementsByClassName("overlayMenu");
    if (main[0] !== undefined ){main[0].remove();}
  document.getElementsByClassName("menu")[0].insertAdjacentHTML("afterend", `
      <div id="rulesMenu" class="overlayMenu" style="padding:1em;max-width:55em;">
        <div style="display:inline-block;width:100%;vertical-align:top;">
          <h1 style="display:inline-flex;justify-content:space-between;width:100%;">
              Game Rules
              <button class="scenarioSwitchButton">The Great Game</button>
              <button class="scenarioSwitchButton">Cards and Powers</button>
              <button class="scenarioSwitchButton">Scenarios</button>
          </h1>
        </div>
        <div style="display:inline-block;width:100%;vertical-align:top;" id="cardViewer">
          ${getRules()}
        </div>
      </div>
  `);
}}

function getRules(){
  let html=`
        <div id="rulesGreatGame">
            <h2>
              <img src="img/icons/globe2.svg">
              The Great Game
            </h2>
            <p>The Great Game - the global network of alliances, friends, enemies and dependants that make up the Great Game.
            </p>
            <h2>
              <img src="img/icons/star.svg">
              Countries
            </h2>
            <div style="width:100%;display:inline-flex;align-items:center;">
                   ${ruleQuarter(stats.Country1)}
                   ${ruleQuarter(stats.Country2)}
                   ${ruleQuarter(stats.Country3)}
                   ${ruleQuarter(stats.Country4)}
            </div><br><br>
            <p>
                Great and Secondary powers get part of their dependants, allies, and friends capacities.
                Each power has cards and abilities only available to them,
                helping them
                defend and develop their influence while undermining that  of other powers.
            </p>
            <h2>
              <img src="img/icons/lightning.svg">
              Independance Level
            </h2>
          <div style="width:100%;display:inline-flex;align-items:center;">
              ${ruleQuarter(stats.Dependent)}
              ${ruleQuarter(stats.Ally)}
              ${ruleQuarter(stats.Friend)}
              ${ruleQuarter(stats.Neutral)}
              ${ruleQuarter(stats.Independent)}
          </div>
        </div>

          `

        html+= `<h2>Country Capacities</h2>`;
        html+=`<div style="width:100%;display:inline-flex;align-items:center;">`

        html+= ruleQuarter(stats["Human Capital"]);
        html+= ruleQuarter(stats.Government);
        html+= ruleQuarter(stats.Industry);
        html+= ruleQuarter(stats.Military);
        html+= ruleQuarter(stats.Maritime);
        html+= `</div>`
        html+=`<h2>Years & Cards & Stats
        </h2>
          <img src="img/icons/bullseye.svg" style="height:2em">
          <img src="img/icons/record-circle.svg" style="height:2em">
          <img src="img/icons/vinyl.svg" style="height:2em">

        `


    return html
}

function ruleRow(rule){
   return `
        <div class="ruleRow">
            <img src="${rule.img}" style="height:1.2em">
            ${rule.desc}
        </div>
        `
}

function ruleQuarter(rule){
  return `
           <div class="ruleQuarter" style="background:${rule.background};background-opacity:.2;border:1px solid black;height:3em;">
             <img src="${rule.img}">
             ${rule.desc}
          </div>
       `
}
