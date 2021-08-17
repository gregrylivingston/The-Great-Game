

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
          <h1>Rules and Stuff</h1>
        </div>
        <div style="display:inline-block;width:100%;vertical-align:top;" id="cardViewer">
          ${getRules()}
        </div>
      </div>
  `);
}}

function getRules(){
  let html="";
        html+= `<h3>The Great Game</h3>`
        html+= ruleRow(stats.Empire);
        html+= `<h3>Country Types</h3>`
        html+= ruleRow(stats.Country1);
        html+= ruleRow(stats.Country2);
        html+= ruleRow(stats.Country3);
        html+= ruleRow(stats.Country4);
        html+= `<h3>Independance Score</h3>`
        html+= ruleRow(stats.Independence);
        html+= `<h3>Independance Level</h3>`
        html+= `Dependant`
        html+= `Ally`
        html+= `Friend`
        html+= `Neutral`
        html+= `Independent`

        html+= `<h1>----</h1>`;

        html+= `<h3>Country Capacities</h3>`;
        html+= ruleRow(stats["Human Capital"]);
        html+= ruleRow(stats.Government);
        html+= ruleRow(stats.Industry);
        html+= ruleRow(stats.Military);
        html+= ruleRow(stats.Maritime);

    return html
}

function ruleRow(rule){
   return `
        <div class="ruleRow">
            <img src="${rule.img}">
            ${rule.desc}
        </div>
        `
}
