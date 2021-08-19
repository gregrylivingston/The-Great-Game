

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
    updatePlayerPoints();
    buildPlayerDeck()
}

function updatePlayerPoints(){
    document.getElementById("myPoints").innerHTML = `
        ${scenarios[scenarioIterator].title}
        &nbsp; &nbsp;
        ${myCountry.properties.admin} &nbsp;  &nbsp;
        ${myCountry.properties.score[0]}
        <img src='${stats["Human Capital"].img}'>
         ${myCountry.properties.score[1]}
        <img src='${stats["Government"].img}'>
         ${myCountry.properties.score[2]}
        <img src='${stats["Industry"].img}'>
         ${myCountry.properties.score[3]}
        <img src='${stats["Military"].img}'>
         ${myCountry.properties.score[4]}
        <img src='${stats["Maritime"].img}'>
        &nbsp;  &nbsp;
        Policy: ${scenarios[scenarioIterator].policyDecks[currentPolicyDeck].title}
    `
}

function buildPlayerDeck(){
   myDeck = [];
  scenarios[scenarioIterator].policyDecks[currentPolicyDeck]
      .cards.forEach(x=>{
      for ( var i = 0 ; i < x.qty ; i ++ ){
          myDeck.push(x.id);
      }
  })
  shuffle(myDeck);
}
