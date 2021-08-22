

function beginGame(selectedCountry){
    myCountry = countryData.find(x=>x.properties.admin == selectedCountry);
    resetMap();
    mainMenu();
    gameState = "gamePlay";
    toggleTime();
    updateMenuDiv();
  /*  window.alert(`
        Scenario:${scenarios[scenarioIterator].title}
        Country:${myCountry.properties.admin}
        Deck:${currentPolicyDeck}
    `);*/
    buildPlayerDeck();
    newYear();
}


function buildPlayerDeck(){
   myDeck = [];
   console.log(myCountryData.decks[currentPolicyDeck]);
   let thisDeck = policyDecks.find(x=>x.title==myCountryData.decks[currentPolicyDeck]);
   console.log(thisDeck);

      thisDeck.cards.forEach(x=>{
      for ( var i = 0 ; i < x.qty ; i ++ ){
          myDeck.push(x.id);
      }
  })
  shuffle(myDeck);
}
