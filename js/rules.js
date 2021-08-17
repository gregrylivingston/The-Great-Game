

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
  let html="";

        html+= `<h2>The Great Game</h2>`
        html+= ruleRow(stats.Empire);
        html+= `<h2>Influence Level</h2>`
        html+=`<div style="width:100%;display:inline-flex;align-items:center;">
               ${ruleQuarter(stats.Country1)}
               ${ruleQuarter(stats.Country2)}
               ${ruleQuarter(stats.Country3)}
               ${ruleQuarter(stats.Country4)}
        </div>`
        html+=`<h2>Independance Score</h2>`
        html+= ruleRow(stats.Independence);
        html+=`<div style="width:100%;display:inline-flex;align-items:center;">
              ${ruleQuarter(stats.Dependent)}
              ${ruleQuarter(stats.Ally)}
              ${ruleQuarter(stats.Friend)}
              ${ruleQuarter(stats.Neutral)}
              ${ruleQuarter(stats.Independent)}

        </div>`

        html+= `<h2>----</h2>`;


        html+= `<h2>Country Capacities</h2>`;
        html+=`<div style="width:100%;display:inline-flex;align-items:center;">`

        html+= ruleQuarter(stats["Human Capital"]);
        html+= ruleQuarter(stats.Government);
        html+= ruleQuarter(stats.Industry);
        html+= ruleQuarter(stats.Military);
        html+= ruleQuarter(stats.Maritime);
        html+= `</div>`

        html+= `<h2>----</h2>`;
        html+=`<h2>Years & Cards & Stats</h2>`


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
           <div class="ruleQuarter">
             <img src="${rule.img}">
             ${rule.desc}
          </div>
       `
}
