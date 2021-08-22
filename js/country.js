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
        ${feature.properties.score[4]} <img src="img/icons/compass-fill.svg">
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
               <div style="width:100%">
                   <div style="display:inline-flex;align-items:center;width:100%;">
                      <button >Scenario</button>
                      <button>Empire</button>
                      <button>Country</button>
                   </div>
                   <div>
                      ${feature.desc}
                   </div>
               </div>
               <div>${getPolicyDeckSwitcher(feature, 0)}</div>
               <button class="scenarioSwitchButton" onclick="beginGame('${feature.properties.admin}')">Begin</button>
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

var currentPolicyDeck = 0;

function getPolicyDeckSwitcher(country, deckNum){
   currentPolicyDeck = deckNum;
   let nextDeck = Number(deckNum) + 1;
   let previousDeck = Number(deckNum) - 1;
   if ( nextDeck > country.properties.decks.length - 1 ) {nextDeck = 0;}
   if ( previousDeck < 0 ) {previousDeck = country.properties.decks.length - 1;}
   return `
         <h3>Choose a Policy Deck</h3>
         <div style="width:100%;vertical-align:top;display:inline-flex;">
             <button class="scenarioButton" onclick="selectDeck(this,'${previousDeck}','${country.properties.admin}')"><</button>
             <button class="scenarioButton">
                 ${country.properties.decks[currentPolicyDeck]}
               <br><br>
               <img src="img/icons/sunrise.svg">
               <br><br>
               <img src="img/icons/star-fill.svg">
             </button>
             <button class="scenarioButton" onclick="selectDeck(this,'${nextDeck}','${country.properties.admin}')">></button>
         </div>
     `
}


function selectDeck(deckSwitcher,deckNum, thisCountry){
    thisCountry = countryData.find(x=>x.properties.admin==thisCountry);
    deckSwitcher.parentElement.parentElement.innerHTML = getPolicyDeckSwitcher(thisCountry, deckNum)

}
/*
should include info at policy deck, this isn't how to do it.  Probably save this as we update countries for scenarios.
*/
