
var time = 0;

function advanceTime(){
  time++;
  if ( time%4000 == 0  ){ newYear();}
  var years = document.getElementsByClassName('year');
  for ( var i = 0 ; i < years.length ; i ++ ){years[i].style.left=Number(time*-.02) + "vw";
  }

}

var timeInterval;

function toggleTime() {
    if (!timeInterval) {
        timeInterval = window.setInterval(advanceTime,16);
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
  /*  window.alert(`It's a new year.
        Some opportunities have passed us by, but others await.
        Discard your hand and draw 4 cards.
        Set your capacity scores to your power score in each area.
    `)*/
    refreshPlayerPoints(myCountry);
    drawCards();
//    map.removeControl(myleaderboard);
//    map.addControl(myleaderboard);
}


function refreshPlayerPoints(country){
  //gots to include this other countries...
  let countriesInfluenced = countryData.filter(x=>x.properties.influencer == country.properties.admin);
  let mydependents = countriesInfluenced.filter(x=>x.properties.Independence<-74)
  let myallies =  countriesInfluenced.filter(x=>x.properties.Independence>-75 && x.properties.Independence<-49 )


  for ( var i = 0 ; i < 5 ; i ++ ){
      myCapacities[i] = myCountry.properties.score[i];
      myCapacities[i] += Math.floor(.25 * myallies.reduce((total, obj) => obj.properties.score[i] + total,0))
      myCapacities[i] += Math.floor(.5 * mydependents.reduce((total, obj) => obj.properties.score[i] + total,0))
  }
  updatePlayerPoints();
}

function updatePlayerPoints(){

    document.getElementById("myPoints").innerHTML = `
        <div style="position:absolute;top:3.5em;">

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

    `
}

function addNotification(){
  let html = '<div class="notification">Popup text...</div>';

  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");

}
