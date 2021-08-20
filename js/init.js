

function beginGame(){
    myCountry = countryData.find(x=>x.properties.admin == myCountry);
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
   policyDecks[currentPolicyDeck]
      .cards.forEach(x=>{
      for ( var i = 0 ; i < x.qty ; i ++ ){
          myDeck.push(x.id);
      }
  })
  shuffle(myDeck);
}
