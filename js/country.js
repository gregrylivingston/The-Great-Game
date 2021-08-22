var gameState = "Menu";

function countryPopup(feature){
  let myInfluencer = (feature.properties.influencer!==undefined)? feature.properties.influencer:'None';
  let myInfluenceAmount = (feature.properties.Independence!==undefined)? feature.properties.Independence:'';
  let html = (feature.properties.status!==undefined)?feature.properties.status:'Minor Country';
  if ( feature.properties.score !== undefined ){
     html+=     `
     <p>${status}</p>
     <p class="popup-p">
        ${feature.properties.score[0]} <img src="img/icons/building.svg">
        ${feature.properties.score[1]} <img src="img/icons/bank2.svg">
        ${feature.properties.score[2]} <img src="img/icons/gear-wide-connected.svg">
        ${feature.properties.score[3]} <img src="img/icons/shield-fill.svg">
        ${feature.properties.score[4]} <img src="img/icons/globe2.svg">
    </p>`;
  }
  let body = '';
  switch ( gameState ){
    case "gamePlay":
        body = `
        <div style="width:90%;border:1px solid black;padding:1em 5% 1em 5%;margin:.5em 0 .5em 0;display:inline-flex;justify-content:space-between;">

           <div class="playCardButton" onclick='attemptToPlayCard("${feature.properties.admin}")'>Play Card</div>
        </div>
        `

        break
    default:
        body = `
               <div style="width:75%">
                   <p>${feature.desc}</p>
                 </div>
               </div>
               <button class="scenarioButton" style="width:8em;" onclick="beginGame('${feature.properties.admin}')">Begin</button>
        `;
  }

   return `<div style="min-width:200px">
                   <h3 style="width:100%">${feature.properties.admin}
                       <img src="img/flag/${feature.properties.flag}" style="height:1em;margin-left:1em;">
                       <img src="img/icons/lightning-fill.svg" style="height=1em;"> ${myInfluenceAmount}
                   </h3>
                   ${html}
                   ${body}
                   </div>



                       `;
}

/*
should include info at policy deck, this isn't how to do it.  Probably save this as we update countries for scenarios.
*/
