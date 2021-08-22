var selectedCardId = undefined;

function selectCard(cardId){
    selectedCardId = cardId;
    let main = document.getElementsByClassName("fullScreenOverlay");
    if (main[0] !== undefined ){main[0].remove();}
    main = document.getElementsByClassName("overlayMenu");
    if (main[0] !== undefined ){main[0].remove();}
    let x = cards.find(x=>x.id==cardId);
    document.getElementsByClassName("menu")[0].insertAdjacentHTML("afterend", `
        <div id="selectedCardMenu" class="overlayMenu">
          <div style="display:inline-block;width:100%;vertical-align:top;" id="cardViewer">
              ${makeCard(x)}
          </div>
        </div>
    `);
}

function attemptToPlayCard(targetCountry){
  let card = cards.find(x=>x.id==selectedCardId);
  //test if you have the resources available
  for ( var i = 0 ; i < 5 ; i ++ ){
    if ( card.cost[i] > myCapacities[i] ){
      window.alert("Unfortunately our reach does not extend that far.  Our best efforts have failed.  Maybe in the future, if we continue to invest in our capacities...");
      return false
    }
  }
  //spend the resources
  for ( var i = 0 ; i < 5 ; i ++ ){
    myCapacities[i] = myCapacities[i] - card.cost[i];
  }
  //remove the card from your hand
  myHand.splice(myHand.findIndex(x=>x==selectedCardId),1);
  updatePlayerPoints();
  playCard(myCountry,card,targetCountry);
  document.getElementById("selectedCardMenu").remove();
  selectedCardId = undefined;
}


//country is "admin" country value
//card can be ID number
function playCard(country,card,target){
    card.effects.forEach(effect=>{resolveEffect(country, effect,target)});
    resetMap();
    window.alert(`Good News.  The situation on the ground in ${target} has changed due to our efforts.`)
}


function resolveEffect(country, effect,target){
    let targetCountry = countryData.find(x=>x.properties.admin==target);

    if ( effect.modTarget == "Independence" ){
      //raise the independence of the country if the card specificies or it is your own country.
      //if the
      if (effect.modEffect=="+" || ( effect.modEffect == "" && targetCountry.properties.admin == country.properties.admin)){
          targetCountry.properties.Independence = targetCountry.properties.Independence + effect.modAmount;
      } else if ( effect.modEffect== "-" || targetCountry.properties.influencer == country.properties.admin || targetCountry.properties.influencer == targetCountry.properties.admin){
          lowerIndependence(country, effect.modAmount, targetCountry);
      } else {
        window.alert("oops, we didn't consider this possibility");
      }
    } else {
      let statPosition = stats[effect.modTarget].pos;
      (effect.modEffect=="+")  ?
          targetCountry.properties.score[statPosition] = targetCountry.properties.score[statPosition] + effect.modAmount:
          targetCountry.properties.score[statPosition] = targetCountry.properties.score[statPosition] - effect.modAmount;
    }
}

function lowerIndependence(country, amount , target){
  target.properties.Independence = target.properties.Independence - amount;
  if ( (target.properties.Independence+amount > -1) && (target.properties.Independence<0) ){
    target.properties.influencer = country.properties.admin;
    target.properties.flag = flag[country.properties.admin];
  }
  updateScenarioData(target);
}


function gameCards(){
  let main = document.getElementById("cardMenu");
  if (main !== null ){
    main.remove();
  } else {
    let main = document.getElementsByClassName("fullScreenOverlay");
    if (main[0] !== undefined ){main[0].remove();}
  let html = ``;
  for ( var i = 0 ; i < myHand.length ; i ++ ){
    html += makeCard(cards[myHand[i]]);
  }
  document.getElementsByClassName("menu")[0].insertAdjacentHTML("afterend", `
      <div id="cardMenu" class="fullScreenOverlay">
      <div style="width:100vw;overflow-y:scroll;max-height:85vh;">
        <div id="cardViewer">
          ${html}
        </div>
      </div>
      </div>
  `);
}}

function drawCards(numberOfDraws = 7){
    myHand = [];
    for (var i = 0 ; i < numberOfDraws ; i ++ ){myHand.push(myDeck.shift())}
}
