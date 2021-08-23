
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

function newYear(){
  /*  window.alert(`It's a new year.
        Some opportunities have passed us by, but others await.
        Discard your hand and draw 4 cards.
        Set your capacity scores to your power score in each area.
    `)*/
    updateMenuDiv();
  //  refreshPlayerPoints(myCountry);
    drawCards();
//    map.removeControl(myleaderboard);
//    map.addControl(myleaderboard);
}


function refreshPlayerPoints(country){


}


function addNotification(){
  let html = '<div class="notification">Popup text...</div>';

  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");

}
