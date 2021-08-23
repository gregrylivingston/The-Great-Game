var cards = [
    {
      id:0,
      title:"Direct Foreign Investment",
      cost:[1,1,3,0,1],
      desc:"Make an investment in a country to increase their industry and your influence",
      flavor:"Industry",
      img:art[10],
      effects:[
          {restriction:"Minor",target:"Country",modTarget:"Industry",modEffect:"+",modAmount:1},
          {restriction:"Minor",target:"Country",modTarget:"Independence",modEffect:"-",modAmount:10}
          ]
    },
    {
      title:"Indirect Foreign Investment",
      id:1,
      cost:[3,3,8,0,1],
      desc:`Make an investment in region to
        <ul><li>increase your influence in all countries you already influence by 10</li>
        <li>increase the industry in up to 10 of these countries at random</li>
      `,
      flavor:"Industry",
      img:art[5],
      //this is the wrong effect --- really should influence a region i think
      effects:[
          {restriction:"Influenced",target:"Countries in Continent",modTarget:"Independence",modEffect:"-",modAmount:25},
          {restriction:"Influenced",target:"Countries in Continent",modTarget:"Industry",modEffect:"+",modAmount:3}
          ]
    },
    {
      title:"Blockade Port",
      id:2,
      cost:[0,2,2,0,4],
      desc:`Blockade a country in your home ocean.
        Reduce that country's naval score to 0 and reduce yours by the same amount until the card is removed from play.`,
      mod:"Blockade a port anywhere in the world.",
      modReq:"Top Global Maritime Score",
      flavor:"Maritime",
      img:art[0],
      effects:[
            {restriction:"",target:"Country",modTarget:"Independence",modEffect:"-",modAmount:5},
            {restriction:"",target:"Country",modTarget:"Maritime",modEffect:"-",modAmount:1}
          ]
    },
    {
      title:"Blockade Region",
      id:3,
      cost:[0,4,4,0,7],
      desc:`Blockade a country in your home ocean.
        Reduce a Great or Seconday Power's global naval score to 0 and reduce yours by the same amount until the card is removed from play.
        `,
      mod:"Blockade any region in the world.",
      modReq:"Top Global Maritime Score",
      flavor:"Maritime",
      img:art[2],
      effects:[
            {restriction:"Alliance of",target:"Countries",modTarget:"Independence",modEffect:"-",modAmount:10},
            {restriction:"Alliance of",target:"Countries",modTarget:"Maritime",modEffect:"-",modAmount:2},
          ]
    },
    {
      title:"Arm Insurgents",
      id:4,
      cost:[0,1,3,3,1],
      desc:`
        Reduce the influence level in target country.    Reduce it's military level and yours by an equal amount until it is removed from play.
        `,
      flavor:"Military",
      img:art[1],
      effects:[
          {restriction:"Independant",target:"Country",modTarget:"Independence",modEffect:"-",modAmount:25},
          {restriction:"Independant",target:"Country",modTarget:"Military",modEffect:"+",modAmount:1},
      //    {restriction:"",target:"Self",modTarget:"Military",modEffect:"-",modAmount:1}
          ]
    },
    {
      title:"Fund Insurgency",
      id:5,
      cost:[2,2,2,1,1],
      desc:`Reduce the influence level in target country.  Reduce it's military level and reduce your government level by an equal amount until it is removed from play.
        `,
      flavor:"Military",
      img:art.find(x=>x.title=="Evening on the Road to Granada"),
      effects:[
          {restriction:"Independant",target:"Country",modTarget:"Independence",modEffect:"-",modAmount:15},
          {restriction:"Independant",target:"Country",modTarget:"Military",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"Develop Rail Infrastructure",
      id:6,
      cost:[1,1,2,0,0],
      desc:`Develop the industry of your home country or an ally.
        `,
      flavor:"Industry",
      img:art[3],
      effects:[
          {restriction:"",target:"Country",modTarget:"Independence",modEffect:"",modAmount:5},
          {restriction:"",target:"Country",modTarget:"Industry",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"Small Arms Contract",
      id:7,
      cost:[1,1,1,1,0],
      desc:`Develop the military of your home country or an ally.
        `,
      flavor:"Military",
      img:art[8],
      effects:[
          {restriction:"",target:"Country",modTarget:"Independence",modEffect:"",modAmount:5},
          {restriction:"",target:"Country",modTarget:"Military",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"Invest In Healthcare",
      id:8,
      cost:[2,1,2,0,0],
      desc:`Develop the Human Capital of your home country or an ally.
        `,
      flavor:"Human Capital",
      img:art[6],
      effects:[
          {restriction:"",target:"Country",modTarget:"Independence",modEffect:"",modAmount:5},
          {restriction:"",target:"Country",modTarget:"Human Capital",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"Invest In Education",
      id:9,
      cost:[3,1,0,0,0],
      desc:`Develop the Human Capital and Government of your home country or an ally.
        `,
      flavor:"Human Capital",
      img:art.find(x=>x.title=="Interior of a School Coranique"),
      effects:[
          {restriction:"",target:"Country",modTarget:"Independence",modEffect:"",modAmount:5},
          {restriction:"",target:"Country",modTarget:"Human Capital",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"Women in the Workforce",
      id:10,
      cost:[20,20,20,10,0],
      desc:`Gain 1 Human Capital and 1 Industry every leap year.
        `,
      flavor:"Human Capital",
      img:art[2],
      effects:[
          {restriction:"My",target:"Country",modTarget:"Industry",modEffect:"+",modAmount:4},
          {restriction:"My",target:"Country",modTarget:"Human Capital",modEffect:"+",modAmount:4},
          {restriction:"My",target:"Country",modTarget:"Independence",modEffect:"+",modAmount:20}

          ]
    },
    {
      title:"Banking Reform",
      id:11,
      cost:[2,4,4,0,0],
      desc:`Develop the Government and Industry of your home country or an ally.
        `,
      flavor:"Government",
      img:art[11],
      effects:[
          {restriction:"",target:"Country",modTarget:"Independence",modEffect:"",modAmount:5},
          {restriction:"",target:"Country",modTarget:"Government",modEffect:"+",modAmount:1},
          {restriction:"",target:"Country",modTarget:"Industry",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"Ease Tensions",
      id:12,
      cost:[3,5,0,3,0],
      desc:`Reduce the influence of independant countries in target continent
        `,
      flavor:"Government",
      img:art[7],
      effects:[
          {restriction:"Independant",target:"Countries in Continent",modTarget:"Independence",modEffect:"-",modAmount:25},
          ]
    },
    {
      title:"Road to the Sea",
      id:13,
      cost:[1,0,1,0,3],
      desc:`
        `,
      flavor:"Maritime",
      img:art.find(x=>x.title=="The Road to the Sea"),
      //more interesting with a continent effect....
      effects:[
          {restriction:"Minor",target:"Countries in Continent",modTarget:"Independence",modEffect:"-",modAmount:15},
          {restriction:"Minor",target:"Countries in Continent",modTarget:"Industry",modEffect:"+",modAmount:1},

          ]
    },
    {
      title:"Institution Building",
      id:14,
      cost:[2,2,1,1,0],
      desc:`
        `,
      flavor:"Government",
      img:art.find(x=>x.title=="View of The Cleveland Museum of Art"),
      effects:[
          {restriction:"",target:"Country",modTarget:"Independence",modEffect:"",modAmount:5},
          {restriction:"",target:"Country",modTarget:"Government",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"Ancient Trade Routes",
      id:15,
      cost:[0,0,2,0,2],
      desc:`
        `,
      flavor:"Maritime",
      img:art.find(x=>x.title=="Venice"),
      effects:[
          {restriction:"",target:"Country",modTarget:"Independence",modEffect:"+",modAmount:5},
          {restriction:"",target:"Country",modTarget:"Maritime",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"Build Factories",
      id:16,
      cost:[1,0,3,0,0],
      desc:`
        `,
      flavor:"Industry",
      img:art.find(x=>x.title=="View of a Factory"),
      effects:[
          {restriction:"",target:"Country",modTarget:"Independence",modEffect:"",modAmount:5},
          {restriction:"",target:"Country",modTarget:"Industry",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"Local Contacts",
      id:17,
      cost:[0,1,0,0,3],
      desc:`
        `,
      flavor:"Maritime",
      img:art.find(x=>x.title=="Samoa"),
      effects:[
          {restriction:"Foreign Dependant",target:"Country",modTarget:"Independence",modEffect:"+",modAmount:15},
          ]
    },
    {
      title:"Construction Contracts",
      id:18,
      cost:[1,1,3,0,0],
      desc:`Add 2 to industry.
        `,
      flavor:"Industry",
      img:art.find(x=>x.title=="Classic Landscape"),
      effects:[
          {restriction:"",target:"Country",modTarget:"Independence",modEffect:"",modAmount:3},
          {restriction:"",target:"Country",modTarget:"Industry",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"Develop the Arts",
      id:19,
      cost:[2,1,1,0,0],
      desc:`+ to human capital.
        `,
      flavor:"Human Capital",
      img:art.find(x=>x.title=="La Condition Humaine"),
      effects:[
          {restriction:"",target:"Country",modTarget:"Independence",modEffect:"+",modAmount:5},
          {restriction:"",target:"Country",modTarget:"Human Capital",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"An Ancient Past",
      id:20,
      cost:[1,0,0,0,0],
      desc:`Add 1 government score.
        `,
      flavor:"Government",
      img:art.find(x=>x.title=="Ruins of the Parthanon"),
      effects:[
          {restriction:"",target:"Country",modTarget:"Independence",modEffect:"+",modAmount:15},
          ]
    },
    {
      title:"Ambush",
      id:21,
      cost:[0,5,0,2,2],
      desc:`The unfortunate disappearance of an enemy agent improves our influence.
        `,
      flavor:"Government",
      img:art.find(x=>x.title=="The Trap"),
      effects:[
          {restriction:"",target:"Country",modTarget:"Independence",modEffect:"-",modAmount:15},
          ]
    },
    {
      title:"Speculative Valuations",
      id:22,
      cost:[1,0,2,0,1],
      desc:`Add 1 to industry.
        `,
      flavor:"Industry",
      img:art.find(x=>x.title=="Flower Beds in Holland"),
      effects:[
          {restriction:"",target:"Country",modTarget:"Industry",modEffect:"+",modAmount:1},
          ]
    },
    {
      title:"Welcome Immigrants",
      id:23,
      cost:[10,10,10,0,5],
      desc:`+1 Human Capital
      `,
      flavor:"Human Capital",
      img:art.find(x=>x.title=="In the Land of Promise"),
      effects:[
          {restriction:"My",target:"Country",modTarget:"Independence",modEffect:"-",modAmount:10},
          {restriction:"My",target:"Country",modTarget:"Human Capital",modEffect:"+",modAmount:6},
          ]
    },
    {
      title:"Colonial Vanguard",
      id:24,
      cost:[1,3,1,1,1],
      desc:`Add 1 to human capital, 1 to government, and 2 to military in ally.
        `,
      flavor:"Military",
      img:art.find(x=>x.title=="The Riders"),
      effects:[
            {restriction:"Ally",target:"Country",modTarget:"Human Capital",modEffect:"+",modAmount:1},
            {restriction:"Ally",target:"Country",modTarget:"Government",modEffect:"+",modAmount:1},
            {restriction:"Ally",target:"Country",modTarget:"Military",modEffect:"+",modAmount:2},
            {restriction:"Ally",target:"Country",modTarget:"Independence",modEffect:"-",modAmount:25},
          ]
    },
    {
      title:"Regatta",
      id:25,
      cost:[1,1,1,0,2],
      desc:`+1 Maritime
      `,
      flavor:"Maritime",
      img:art.find(x=>x.title=="Imaginary Regatta of America's Cup Winners"),
      effects:[
            {restriction:"",target:"Country",modTarget:"Independence",modEffect:"",modAmount:5},
            {restriction:"",target:"Country",modTarget:"Maritime",modEffect:"+",modAmount:1},
          ]
    },
    {
      title:"Invest in Waterways",
      id:26,
      cost:[5,5,10,0,5],
      desc:`Add 1 to human capital, 1 to government, 1 to industry, and 1 to Maritime.
        `,
      flavor:"Industry",
      img:art.find(x=>x.title=="Charing Cross Bridge, London"),
      effects:[
            {restriction:"My",target:"Country",modTarget:"Industry",modEffect:"+",modAmount:2},
            {restriction:"My",target:"Country",modTarget:"Human Capital",modEffect:"+",modAmount:1},
            {restriction:"My",target:"Country",modTarget:"Government",modEffect:"+",modAmount:1},
            {restriction:"My",target:"Country",modTarget:"Maritime",modEffect:"+",modAmount:1},
          ]
    },
    {
      title:"Public Events",
      id:27,
      cost:[3,1,1,0,0],
      desc:`+1 Human Capital
      `,
      flavor:"Human Capital",
      img:art.find(x=>x.title=="Club Night"),
      effects:[
            {restriction:"Allied",target:"Country",modTarget:"Independence",modEffect:"",modAmount:20},
          ]
    },
    {
      title:"Develop Local Staff",
      id:28,
      cost:[2,2,0,0,2],
      desc:`Add 1 to human capital.
        `,
      flavor:"Human Capital",
      img:art.find(x=>x.title=="The Petition"),
      effects:[
          {restriction:"Allied",target:"Country",modTarget:"Independence",modEffect:"+",modAmount:5},
          {restriction:"Allied",target:"Country",modTarget:"Human Capital",modEffect:"+",modAmount:1},
          {restriction:"Allied",target:"Country",modTarget:"Government",modEffect:"+",modAmount:1},
        ]
    },
    {
      title:"Tropical Disease",
      id:29,
      cost:[3,1,1,0,0],
      desc:`+Independence in Africa and South Africa.
      `,
      flavor:"Government",
      country:"Global Event",
      img:art.find(x=>x.title=="The Equatorial Jungle"),
      effects:[
          {restriction:"",target:"Countries in Africa",modTarget:"Independence",modEffect:"+",modAmount:15},
          {restriction:"",target:"Countries in South America",modTarget:"Independence",modEffect:"+",modAmount:15},
        ]
    },
    {
      title:"Spy",
      id:30,
      cost:[3,3,0,0,1],
      desc:`Gain 10 Independence in country.
        `,
      flavor:"Government",
      img:art.find(x=>x.title=="The House Maid"),
      effects:[
          {restriction:"",target:"Country",modTarget:"Independence",modEffect:"",modAmount:15},
        ]
    },
    {
      title:"The Western Alliance",
      id:31,
      cost:[10,10,10,10,10],
      desc:`Democracy Influenced countries lose 5 Independence.
      `,
      flavor:"Government",
      img:art.find(x=>x.title=="Allies Day"),
      effects:[
          {restriction:"Friends",target:"Countries",modTarget:"Independence",modEffect:"+",modAmount:100},
        ]
    },
    {
      title:"The Bersaglieri",
      id:32,
      cost:[0,0,0,1,0],
      desc:`+1 Military Strength
      `,
      country:"Italy",
      flavor:"Military",
      img:art.find(x=>x.title=="Allies Day"),
      effects:[
          {restriction:"Italy",target:"Country",modTarget:"Military",modEffect:"+",modAmount:1},
          ]
    },
    {
      title:"Universal Suffrage",
      id:33,
      cost:[10,8,0,0,0],
      desc:`Gain 1 Human Capital and 1 Industry every leap year.
        `,
      flavor:"Human Capital",
      img:art[0],
      effects:[
          {restriction:"My",target:"Country",modTarget:"Government",modEffect:"+",modAmount:2},
          {restriction:"My",target:"Country",modTarget:"Independence",modEffect:"+",modAmount:20},
          {restriction:"My",target:"Country",modTarget:"Human Capital",modEffect:"+",modAmount:2}
          ]
    },
]

/*

More card ideas...

Generic
  Develop Ports
  Naval Tradition
  Cutting Edge Research (electronics)
  Shipbuilding Program
  Woman's Suffrage
  Invite Leading Educators

World effects... (like card 29 tropical disease)
  exhaustion (like dustbowl)
  great depression
  balkan wars
  Entente Cordiale / Triple Alliance
  Olympics
  Great Depression
  First Cross Ocean Flight
  First Cross Ocean Television Transmission
  pandemic
  major oil discoveries

UK
  Destroyers for bases (+100 Ind, cost is like -15 maritime ie 1 time boost)
  Singapore Strategy
  British Colonists -ind, +pop,ind,gov,mil
  HMS Dreadnaught (maybe...) +mar
  Parliament Act +gov
  Royal Air Force
  Appeasement
  Welfare Reforms
  An Empire to Call On

USA

  Porhibition (-people + gov + ind)
  Federal Reserve (gov + ind)
  Cooperative Banking (people + ind)
  Interchangeable Parts
  Federal Income Tax
  Wilsoniasm

  King Coal
  The Pulitzer Prize

  16, 17, 18, 19 Amendments

  isolationism (set independence 100)
  Muckracking
  Reduce Tarrifs
  Clayton Act (antitrust)
  Federal Trrade Commission

  Panama Purchase

  Monroe doctrine
  self Determination
  Cuban Intervention
  Philanthropists



Germany
  Our Place in the Sun

Austria
  Congress of Berlin (intervene in Bulgaria)
  royal assent
  Aristocratic bureaucracy (fill buro with aristocrats for loyalty)

  Territorial Diet
  Customs Union
  Regional Autonomy
  Joint Government (The common government was led by a Ministerial Council (Ministerrat für Gemeinsame Angelegenheiten), which had responsibility for the Common Army, navy, foreign policy, and the customs union)
  universal manhood suffrage

  Dual Monarchy
  Ultimatum
  Imperial Diet
  Imperial Proclemation

Turkey
(like muslim intervention and more things...)
  Hamidian Reforms
  Protector of the Hajj
  Diplomatic Intervention (as in Moro Rebellion)
  Benign Caliph

//economic reforms that undermine our sovereignty but increase industry power and stuff
  Ottoman Public Debt Administration
  Ottoman Military Schools
  Invest in Telegraphy
  Darulfunun //Istanbul university
  Sick man of europe //lose influence in terriroties but gain independence at home

//Sultan's Perogatives
  Impose Absolutism
  Grant Constitutional Rights
  Royal Control of the Fleet (independence at home while losing it abroad)
  İstibdad (gain independence while losing governement power)

//Infrastructure
  Railway to Bagdahd
  Railway to Rumelia
  Railway to Hejaz
  Anatolia Railway

//youngTurks


cards have --> cost
The default cost is what it cost to play the card.  You can pay 3x or 5x as much for enhanced results,maybe

cards have --> lifetime
Is the card a 1 time effect or does it stay in play? if so how can it be removed from play?

cards have --> effects
effects influence the stats of cards, countries, or powers.

effects have --> targets
Targets are those affected by the card.  There may be several targets or just one.
Targets can be groups of things or individuals. (continent, all countries owned by, etc.)
Targets are cards, countries, or powers.

effects have --> mod
if said special condition is met the cards effect may become more powerful
common example would be the player playing this card has the most score in a particular category




*/


function policyDeckViewer(policyDeckSearchNumber=0){
  let main = document.getElementById("cardMenu");
  if (main !== null ){
    main.remove();
  } else {
    let main = document.getElementsByClassName("overlayMenu");
    if (main[0] !== undefined ){main[0].remove();}
  document.getElementsByClassName("menu")[0].insertAdjacentHTML("afterend", `
      <div id="cardMenu" class="fullScreenOverlay" style="z-index:1001;" onclick="this.remove()">
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
      <div id="cardMenu" class="fullScreenOverlay" style="z-index:1001;" onclick="this.remove()">
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
    if ( x.cost[0] > 0 ){cost+= x.cost[0] + " <img src='" + stats["Human Capital"].img + "'> "}
    if ( x.cost[1] > 0 ){cost+= x.cost[1] + " <img src='" + stats["Government"].img + "'> "}
    if ( x.cost[2] > 0 ){cost+= x.cost[2] + " <img src='" + stats["Industry"].img + "'> "}
    if ( x.cost[3] > 0 ){cost+= x.cost[3] + " <img src='" + stats["Military"].img + "'> "}
    if ( x.cost[4] > 0 ){cost+= x.cost[4] + " <img src='" + stats["Maritime"].img + "'> "}
    let img = "";
    if ( x.img !== undefined ){img = x.img.img;}
    let effects = "";
    if ( x.effects !== undefined ){
      effects+=`<div class="cardButton">`;
      x.effects.forEach(x=>{effects+= x.restriction + " " + x.target + " " + x.modEffect + x.modAmount + " <img src='" + stats[x.modTarget].img + "'><br>"})
      effects+="</div>";

    }

    return `
      <div class="card" onclick="selectCard(${x.id})">
        <div style="width:100%;display:inline-flex;">
          <img style="height:2em;width:15%;" src="${stats[x.flavor].img}">
          <h3 style="display:inline-block;width:85%;">${x.title}</h3>
        </div>
          ${img.replace(".","_s.")}
        <div style="width:100%;min;height:12vh;text-align:center;vertical-align:center;">
            ${effects}
        </div>

        <div style="width:100%;text-align:center;">${cost}</div>

      </div>
    `
}
