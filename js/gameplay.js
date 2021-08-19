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
var myScores = [];

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
  console.log(myHand);
  console.log(myDeck);
    for (var i = 0 ; i < numberOfDraws ; i ++ ){myHand.push(myDeck.shift())}
    console.log(myHand);
    console.log(myDeck);
}

function updatePlayerPoints(){
    document.getElementById("myPoints").innerHTML = `
        <div>
          ${scenarios[scenarioIterator].title}
        </div>
        <div>
        ${myCountry.properties.admin}
        </div>
        <div>
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
        </div>
        <div>
          Policy: ${scenarios[scenarioIterator].policyDecks[currentPolicyDeck].title}
        </div>
    `
}
