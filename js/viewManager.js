//myCapacities stores the current player's available points in the 5 scoring categories.
var myCapacities = [1,1,1,1,1];

//menuDiv is a reference to the left side menu div.
var menuDiv;

window.onload = function(){
//Initialized the left side menu
L.Control.myMenu = L.Control.extend(
{
    options:{position: 'topleft',},
    onAdd: function (map) {
        menuDiv = L.DomUtil.create('div', 'menu');
    /*    L.DomEvent
            .addListener(leaderboardDiv, 'click', L.DomEvent.stopPropagation)
            .addListener(leaderboardDiv, 'click', L.DomEvent.preventDefault)
            .addListener(leaderboardDiv, 'click', function () {
            drawnItems.clearLayers();
        });
*/
        menuDiv.innerHTML = getMenuDiv(); //menuDiv.innerHTML = getMenuDiv() (or some similar function)
                                          //will update the left side menu object
        return menuDiv;
    }
});
//add the control to the map.  We'll only do this one and just keep updating the control
map.addControl(new L.Control.myMenu());
mainMenu();

}


//update the left side object menu
function updateMenuDiv(){menuDiv.innerHTML = getMenuDiv();}



function getMenuDiv(){
    switch (gameState){
        case "gamePlay":
            return `
            ${myCountryInfo()}
            ${html_rightMenuGamePlay()}
        `
        default: return `
            ${myCountryInfo()}
            ${html_rightMenuMenu()}
              `
    }
}


//this function is used to switch between the left side menu panels...
//current options are 'panelstory' 'panelcard' 'panelempire'... should add 'panelscore'

var panelState = "panelstory";
function showPanel(panel = panelState){
    panelState = panel;
    var els = document.getElementsByClassName("panel");
    for ( var i = 0 ; i < els.length ; i ++){els[i].style.display="none";}
    var els = document.getElementsByClassName(panel);
    for ( var i = 0 ; i < els.length ; i ++){els[i].style.display="";}
}
