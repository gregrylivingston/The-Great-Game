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
  playCard(myCountry,card,targetCountry);
  document.getElementById("selectedCardMenu").remove();
  updateMenuDiv();
  console.log("played " + selectedCardId , "points left: " + myCapacities);
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
          if (targetCountry.properties.Independence > -1){
            targetCountry.properties.influencer = targetCountry.properties.admin;
            targetCountry.properties.flag = flag[targetCountry.properties.admin];
          }
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
    //if target country's independence drops below 0 the country tagetting them gains influence over them...
  if ( (target.properties.Independence+amount > -1) && (target.properties.Independence<0) ){
    target.properties.influencer = country.properties.admin;
    target.properties.flag = flag[country.properties.admin];
    //if independence is positive reset influencer and flag to home country.
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
      <div id="cardMenu" class="fullScreenOverlay" style="margin-top:4em;" onclick="this.remove()">
      <div style="width:100vw;overflow-y:scroll;max-height:85vh;">
        <div id="cardViewer">
          ${html}
        </div>
      </div>
      </div>
  `);
}}

function drawCards(numberOfDraws = 6){
    myHand = [];
    for (var i = 0 ; i < numberOfDraws ; i ++ ){myHand.push(myDeck.shift())}
}



function policyDeckViewer(policyDeckSearchNumber=0){
  let main = document.getElementById("cardMenu");
  if (main !== null ){
    main.remove();
  } else {
    let main = document.getElementsByClassName("overlayMenu");
    if (main[0] !== undefined ){main[0].remove();}
  document.getElementsByClassName("menu")[0].insertAdjacentHTML("afterend", `
      <div id="cardMenu" class="fullScreenOverlay" style="z-index:1001;">
        <div class="cardFilters">
          <button onclick="this.parentElement.parentElement.remove();"><</button>
          &nbsp;
          &nbsp;

          <div style="display:inline-block;">
            <button class="cardFilter" onclick="viewCardsByDeck(0)">${policyDecks[0].title}</button>
            <button class="cardFilter" onclick="viewCardsByDeck(1)">${policyDecks[1].title}</button>
            <button class="cardFilter" onclick="viewCardsByDeck(2)">${policyDecks[2].title}</button>
            <button class="cardFilter" onclick="viewCardsByDeck(3)">${policyDecks[3].title}</button>
            <button class="cardFilter" onclick="viewCardsByDeck(4)">${policyDecks[4].title}</button>
            <button class="cardFilter" onclick="viewCardsByDeck(5)">${policyDecks[5].title}</button>
            <button class="cardFilter" onclick="viewCardsByDeck(6)">${policyDecks[6].title}</button>
          <!--  <br>
            <button class="cardFilter"><img src="img/icons/globe2.svg"></button>
            <button class="cardFilter"><img src="img/icons/stars.svg"></button>
            <button class="cardFilter"><img src="img/icons/star.svg"></button>
            &nbsp;
            <button class="cardFilter"><img src="img/icons/building.svg" onclick="viewCards('flavor','Human Capital')"></button>
            <button class="cardFilter"><img src="img/icons/bank2.svg" onclick="viewCards('flavor','Government')"></button>
            <button class="cardFilter"><img src="img/icons/gear-wide-connected.svg" onclick="viewCards('flavor','Industry')"></button>
            <button class="cardFilter"><img src="img/icons/shield-fill.svg" onclick="viewCards('flavor','Military')"></button>
            <button class="cardFilter"><img src="img/icons/compass-fill.svg" onclick="viewCards('flavor','Maritime')"></button>
            &nbsp;
            <button class="cardFilter"><img src="${stats['The Great Game'].img}"></button>
            <button class="cardFilter"><img src="${stats['The Atomic Age'].img}"></button>
            <button class="cardFilter"><img src="${stats['Virtual Conflict'].img}"></button>-->
          </div>
        </div>
        <div style="width:100vw;overflow-y:scroll;max-height:85vh;">
          <div id="cardViewer">
          </div>
        </div>
      </div>
  `);
  }
  viewCardsByDeck(policyDeckSearchNumber);
  var elem = L.DomUtil.get('cardViewer');
  L.DomEvent.on(elem, 'mousewheel', L.DomEvent.stopPropagation);
}

function viewCardsByDeck(policyDeckSearchNumber){
  let html = ``;
  policyDecks[policyDeckSearchNumber].cards.forEach(x=>{
      html+=makeCard(cards.find(y=>y.id==x.id));
    });
  document.getElementById("cardViewer").innerHTML =  html;
}

function nationalDeckViewer(filterKey='country',filterValue='Global Event'){
  let main = document.getElementById("cardMenu");
  if (main !== null ){
    main.remove();
  } else {
    let main = document.getElementsByClassName("overlayMenu");
    if (main[0] !== undefined ){main[0].remove();}
  document.getElementsByClassName("menu")[0].insertAdjacentHTML("afterend", `
      <div id="cardMenu" class="fullScreenOverlay" style="z-index:1001;">
        <div class="cardFilters">
          <button onclick="this.parentElement.parentElement.remove();"><</button>
          &nbsp;
          &nbsp;

          <div style="display:inline-block;">
            <button class="cardFilter"><img src="img/icons/globe2.svg"></button>
            <button class="cardFilter"><img src="img/icons/stars.svg"></button>
            <button class="cardFilter"><img src="img/icons/star.svg"></button>
            &nbsp;
            <button class="cardFilter"><img src="img/icons/building.svg" onclick="viewCards('flavor','Human Capital')"></button>
            <button class="cardFilter"><img src="img/icons/bank2.svg" onclick="viewCards('flavor','Government')"></button>
            <button class="cardFilter"><img src="img/icons/gear-wide-connected.svg" onclick="viewCards('flavor','Industry')"></button>
            <button class="cardFilter"><img src="img/icons/shield-fill.svg" onclick="viewCards('flavor','Military')"></button>
            <button class="cardFilter"><img src="img/icons/compass-fill.svg" onclick="viewCards('flavor','Maritime')"></button>
            &nbsp;
            <button class="cardFilter"><img src="${stats['The Great Game'].img}"></button>
            <button class="cardFilter"><img src="${stats['The Atomic Age'].img}"></button>
            <button class="cardFilter"><img src="${stats['Virtual Conflict'].img}"></button>
            &nbsp;
            <br>
            <button onclick="viewCards('country','Global Event')" class="cardFilter">Global Events</button>
            &nbsp;
            <button class="cardFilter"><img src="img/flag/us.png" onclick="viewCards('country','United States of America')" style="height:1em"></button>
            <button class="cardFilter"><img src="img/flag/gb.png" onclick="viewCards('country','United Kingdom')" style="height:1em"></button>
            <button class="cardFilter"><img src="img/flag/it.png" onclick="viewCards('country','Italy')" style="height:1em"></button>
            <button class="cardFilter"><img src="img/flag/fr.png" onclick="viewCards('country','France')" style="height:1em"></button>
          </div>
        </div>
        <div style="width:100vw;overflow-y:scroll;max-height:85vh;">
          <div id="cardViewer">
          ${makeCards(filterKey,filterValue)}
          </div>
        </div>

      </div>
  `);
}}

function viewCards(filterKey,filterValue){
  document.getElementById("cardViewer").innerHTML = makeCards(filterKey,filterValue);
}

function makeCards(filterKey,filterValue){
  let html = "";
  let cardsToShow = cards;
  if (filterKey!==undefined){
      cardsToShow = cardsToShow.filter( x => x[filterKey] == filterValue );
  }
  cardsToShow.forEach(x=>{html+=makeCard(x);})

  return html
}

function makeCard(x){
    let cost = "";
    if ( x.cost[0] > 0 ){cost+= x.cost[0] + " <img style='height:1em' src='" + stats["Human Capital"].img + "'> "}
    if ( x.cost[1] > 0 ){cost+= x.cost[1] + " <img style='height:1em' src='" + stats["Government"].img + "'> "}
    if ( x.cost[2] > 0 ){cost+= x.cost[2] + " <img style='height:1em' src='" + stats["Industry"].img + "'> "}
    if ( x.cost[3] > 0 ){cost+= x.cost[3] + " <img style='height:1em' src='" + stats["Military"].img + "'> "}
    if ( x.cost[4] > 0 ){cost+= x.cost[4] + " <img style='height:1em' src='" + stats["Maritime"].img + "'> "}
    let img = "";
    if ( x.img !== undefined ){img = x.img.img;}
    let effects = "";
    if ( x.effects !== undefined ){
      effects+=`${x.effects[0].restriction} ${x.effects[0].target} `;
      x.effects.forEach(x=>{effects+=  x.modEffect + x.modAmount + " <img style='height:1em;' src='" + stats[x.modTarget].img + "'>"})
      effects+="";

    }

    return `
      <div class="card" onclick="selectCard(${x.id})">
        <div style="width:96%;display:inline-flex;padding:.5em 2% .5em 2%;justify-content:space-between;">
        <!--  <img style="height:2em;width:15%;" src="${stats[x.flavor].img}">-->

          <div style="display:inline-block;font-size:1.2em;
                background:rgba(255,255,255,.5);border-radius:1em;padding:0em .5em 0em .5em;"
                >
                ${x.title}
          </div>
          <div style="display:inline-block;font-size:1.2em;background:rgba(255,255,255,.5);border-radius:1em;padding:0em .5em 0em .5em;">${cost}</div>

        </div>
        <div style="width:96%;display:inline-flex;background:rgba(255,255,255,.5);padding:.5em 2% .5em 2%;justify-content:space-between;">

          <div style="display:inline-block;font-size:1.2em;
                padding:0em .5em 0em .5em;margin-left:1em;"
                >
                -> ${effects}
          </div>

        </div>
          <img src="${img.replace(".","_s.")}">

      </div>
    `
}
