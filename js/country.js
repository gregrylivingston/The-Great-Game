var gameState = "Menu";


var currentPolicyDeck = 0;

function getPolicyDeckSwitcher(country, deckNum = 0){
   currentPolicyDeck = deckNum;
   let nextDeck = Number(deckNum) + 1;
   let previousDeck = Number(deckNum) - 1;
   let deckData = policyDecks.find(x=>x.title==country.properties.decks[currentPolicyDeck])
    if ( deckData === undefined ){deckData = policyDecks[0]}
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
