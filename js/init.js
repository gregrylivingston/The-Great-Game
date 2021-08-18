function beginGame(){
    mainMenu();
    gameState = "gamePlay";
    toggleTime();
    updateMenuDiv();
    window.alert(`
        Scenario:${scenarios[scenarioIterator].title}
        Country:${myCountry}
        Deck:${currentPolicyDeck}
    `);

}
