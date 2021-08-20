
var time = 0;

function advanceTime(){
  time++;
  if ( time%2000 == 0  ){ newYear();}
  var years = document.getElementsByClassName('year');
  for ( var i = 0 ; i < years.length ; i ++ ){years[i].style.left=Number(time*-.05) + "vw";
  }

}

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
    refreshPlayerPoints();
    drawCards();
}


function refreshPlayerPoints(){
  for ( var i = 0 ; i < 5 ; i ++ ){myCapacities[i] = myCountry.properties.score[i];}
   updatePlayerPoints();
}

function updatePlayerPoints(){

    document.getElementById("myPoints").innerHTML = `
        <div>
          <img src="img/icons/globe2.svg"> ${scenarios[scenarioIterator].title}
        </div>
        <div>
          <img src="img/flag/${myCountry.properties.flag}" style="height:1em;"> ${myCountry.properties.admin}
          ${100}
          <img src='${stats["Independence"].img}'>
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
