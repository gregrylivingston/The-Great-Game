var selectedCardId = undefined;

function selectCard(cardId){
    selectedCardId = cardId;
    let main = document.getElementsByClassName("overlayMenu");
    if (main[0] !== undefined ){main[0].remove();}
    let x = cards.find(x=>x.id==cardId);
    document.getElementsByClassName("menu")[0].insertAdjacentHTML("afterend", `
        <div id="selectedCardMenu" class="overlayMenu" style="width:22em;">
          <div style="display:inline-block;width:100%;vertical-align:top;">
            <h1 style="display:inline-block">Cards</h1>
          </div>
          <div style="display:inline-block;width:100%;vertical-align:top;" id="cardViewer">
              ${makeCard(x)}
          </div>
        </div>
    `);
}

function attemptToPlayCard(targetCountry){
  playCard("me",selectedCardId,targetCountry)
}

//country is "admin" country value
//card can be ID number
function playCard(country,cardId,target){
    let card = cards.find(x=>x.id==cardId);
    window.alert("You have played " + card.title + " on " + target)
    card.effects.forEach(effect=>{resolveEffect(effect,target)})
}


function resolveEffect(effect,target){
    let country = countryData.find(x=>x.properties.admin==target);
    if ( effect.modTarget == "Independance" ){

    } else {
      let statPosition = stats[effect.modTarget].pos;
      console.log(country);
      (effect.modEffect=="+")  ?
          country.properties.score[statPosition] = country.properties.score[statPosition] + effect.modAmount:
          country.properties.score[statPosition] = country.properties.score[statPosition] - effect.modAmount;
    }
    resetMap();
}
