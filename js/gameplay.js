var timeInterval;

function toggleTime() {
    if (!timeInterval) {
        timeInterval = window.setInterval(advanceTime,50);
    } else {
        window.clearInterval(timeInterval);
        timeInterval = null;
    }
}

var myPoints;
var myDeck = [];
var myHand = [];
var myCapacities = [];

function newYear(){
    window.alert(`It's a new year.
        Some opportunities have passed us by, but others await.
        Discard your hand and draw 4 cards.
        Set your capacity scores to your power score in each area.
    `)
    updatePlayerPoints();
    drawCards();
}

function drawCards(numberOfDraws = 4){
    for (var i = 0 ; i < numberOfDraws ; i ++ ){myHand.push(myDeck.shift())}
}

function updatePlayerPoints(){
    for ( var i = 0 ; i < 5 ; i ++ ){
      myCapacities[i] = myCountry.properties.score[i];
    }
    document.getElementById("myPoints").innerHTML = `
        <div>
          ${scenarios[scenarioIterator].title}
        </div>
        <div>
        ${myCountry.properties.admin}
        </div>
        <div>
        ${myCapacities[0]}
        <img src='${stats["Human Capital"].img}'>
         ${myCapacities[1]}
        <img src='${stats["Government"].img}'>
         ${myCapacities[2]}
        <img src='${stats["Industry"].img}'>
         ${myCapacities[3]}
        <img src='${stats["Military"].img}'>
         ${myCapacities[4]}
        <img src='${stats["Maritime"].img}'>
        </div>
        <div>
          Policy: ${scenarios[scenarioIterator].policyDecks[currentPolicyDeck].title}
        </div>
    `
}
