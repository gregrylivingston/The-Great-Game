var gameState = "Menu";

function countryPopup(feature){
  let myInfluencer = (feature.properties.influencer!==undefined)? feature.properties.influencer:'None';
  let myInfluenceAmount = (feature.properties.Independence!==undefined)? feature.properties.Independence:'';
  let html = (feature.properties.status!==undefined)?feature.properties.status:'Minor Country';

  let body = '';
  switch ( gameState ){
    case "gamePlay":

        body = `
        <div style="width:100%">
            <div class="playCardButton" onclick='attemptToPlayCard("${feature.properties.admin}")'>
               Play Card
             </div>
            <div class="">
               ${feature.properties.score[0]} <img src="img/icons/building.svg">
               ${feature.properties.score[1]} <img src="img/icons/bank2.svg">
               ${feature.properties.score[2]} <img src="img/icons/gear-wide-connected.svg">
               ${feature.properties.score[3]} <img src="img/icons/shield-fill.svg">
               ${feature.properties.score[4]} <img src="img/icons/compass-fill.svg">
           </div>
        </div>
        `

        break
    default:
        body = `
               <div style="width:100%">
                   <div>
                      ${feature.desc}
                   </div>
               </div>
               <div>${getPolicyDeckSwitcher(feature, 0)}</div>
               <button class="scenarioSwitchButton" onclick="beginGame('${feature.properties.admin}')">Begin</button>
        `;
  }

   return `<div style="min-width:200px">
                   <h3 style="width:100%;font-size:1.6em;display:inline-flex;justify-content:space-between;">
                        <div style="display:inline-flex;align-items:center;">
                            <img src="img/flag/${feature.properties.flag}" style="height:1em;">
                            ${feature.properties.admin}
                      </div>
                       <div style="display:inline-flex;align-items:center;">
                          <button><img src="img/icons/book.svg"></button>
                          <button><img src="img/icons/flag.svg"></button>
                          <button><img src="img/icons/globe2.svg"></button>
                       </div>
                   </h3>
                   ${html}
                   &nbsp;
                   <img src="img/icons/lightning-fill.svg" style="height:1em;">
                   ${myInfluenceAmount}
                   ${myInfluencer}

                   <br><br>
                   ${body}
                   </div>



                       `;
}

var currentPolicyDeck = 0;

function getPolicyDeckSwitcher(country, deckNum){
   currentPolicyDeck = deckNum;
   let nextDeck = Number(deckNum) + 1;
   let previousDeck = Number(deckNum) - 1;
   let deckData = policyDecks.find(x=>x.title==country.properties.decks[currentPolicyDeck])
   console.log(deckData);
   if ( nextDeck > country.properties.decks.length - 1 ) {nextDeck = 0;}
   if ( previousDeck < 0 ) {previousDeck = country.properties.decks.length - 1;}
   return `<br>
         <h3 style="width:100%;display:inline-flex;align-items:center;justify-content:space-between;font-size:1.4em;">
            <button style="width:25%" class="" onclick="selectDeck(this,'${previousDeck}','${country.properties.admin}')"><</button>
            <div>Policy Deck</div>
            <button style="width:25%;" class="" onclick="selectDeck(this,'${nextDeck}','${country.properties.admin}')">></button>
         </h3>
         <br><br>
         <div style="width:100%;vertical-align:top;display:inline-flex;justify-content:space-between;align-items:center;">
             <div style="max-width:70%">
                <h3>${country.properties.decks[currentPolicyDeck]}</h3>
                <p>${deckData.desc}</p>

             </div>
             <button class="deck" onclick="policyDeckViewer(${policyDecks.findIndex(x=>x.title==country.properties.decks[currentPolicyDeck])})">
               ${deckData.available}<br>
               <img src="${deckData.icon}" style="height:2em"><br>
               ${deckData.averageCost}
             </button>

         </div><br><br>
     `
}


function selectDeck(deckSwitcher,deckNum, thisCountry){
    thisCountry = countryData.find(x=>x.properties.admin==thisCountry);
    deckSwitcher.parentElement.parentElement.innerHTML = getPolicyDeckSwitcher(thisCountry, deckNum)

}
/*
should include info at policy deck, this isn't how to do it.  Probably save this as we update countries for scenarios.
*/
