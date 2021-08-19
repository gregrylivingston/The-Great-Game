var selectedCardId = undefined;

function selectCard(cardId){
    selectedCardId = cardId;
    let main = document.getElementsByClassName("overlayMenu");
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
  myHand.splice(myHand.findIndex(x=>{x==selectedCardId}),1);
  gameCards();
  gameCards();
  playCard(selectedCountry,card,targetCountry)
}


//country is "admin" country value
//card can be ID number
function playCard(country,card,target){
    card.effects.forEach(effect=>{resolveEffect(effect,target)});
    resetMap();
    window.alert(`Good News.  The situation on the ground in ${target} has changed due to our efforts.`)
}


function resolveEffect(effect,target){
    let country = countryData.find(x=>x.properties.admin==target);
    if ( effect.modTarget == "Independence" ){
      (effect.modEffect=="+")  ?
          country.properties.Independence = country.properties.Independence + effect.modAmount:
          country.properties.Independence = country.properties.Independence - effect.modAmount;
    } else {
      let statPosition = stats[effect.modTarget].pos;
      (effect.modEffect=="+")  ?
          country.properties.score[statPosition] = country.properties.score[statPosition] + effect.modAmount:
          country.properties.score[statPosition] = country.properties.score[statPosition] - effect.modAmount;
    }
}


function gameCards(){
  let main = document.getElementById("cardMenu");
  if (main !== null ){
    main.remove();
  } else {
    let main = document.getElementsByClassName("overlayMenu");
    if (main[0] !== undefined ){main[0].remove();}
  let html = ``;
  for ( var i = 0 ; i < myHand.length ; i ++ ){
    console.log(cards[myHand[i]]);
    html += makeCard(cards[myHand[i]]);
  }
  document.getElementsByClassName("menu")[0].insertAdjacentHTML("afterend", `
      <div id="cardMenu" class="overlayMenu" style="max-width:60em;">
        <div style="display:inline-block;width:100%;vertical-align:top;" id="cardViewer">
            ${html}
        </div>
      </div>
  `);
}}
