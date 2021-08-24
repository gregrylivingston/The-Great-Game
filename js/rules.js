
const color = {
  "Italy":"#5c7a1e",
  "ItalyAlly":"#6b8e23",
  "ItalyFriend":"#e4ecd4",
  "ItalySphere":"white",
  "India":"#5c7a1e",
  "IndiaAlly":"#6b8e23",
  "IndiaFriend":"#e4ecd4",
  "IndiaSphere":"white",
  "Austria":"#2da4ac",
  "AustriaAlly":"#32B7C0",
  "AustriaFriend":"#c0e3e6",
  "AustriaSphere":"white",
  "United States of America":"#1872eb",
  "United States of AmericaAlly":"#2F80ED",
  "United States of AmericaFriend":"#b9d4f9",
  "United States of AmericaSphere":"white",
  "Turkey":"#3ec5f0",
  "TurkeyAlly":"#56CCF2",
  "TurkeyFriend":"#c5edfa",
  "TurkeySphere":"white",
  "France":"#22229a",
  "FranceAlly":"#2727af",
  "FranceFriend":"#bebee7",
  "FranceSphere":"white",
  "Russia":"#e62929",
  "RussiaAlly":"#e84040",
  "RussiaFriend":"#f8c5c5",
  "RussiaSphere":"white",

  "Republic of Serbia":"#e4137a",
  "Republic of SerbiaAlly":"#ED2387",
  "Republic of SerbiaFriend":"#fcd8ea",
  "Japan":"#f08c32",
  "JapanAlly":"#F2994A",
  "JapanFriend":"#fbe1ca",
  "Germany":"#f0c234",
  "GermanyAlly":"#F2C94C",
  "GermanyFriend":"#fbf0cc",
  "United Kingdom":"#8f3bdc",
  "United KingdomAlly":"#9B51E0",
  "United KingdomFriend":"#e8d6f8",
  "China":"#bb6bd9",
  "ChinaAlly":"#c47fde",
  "ChinaFriend":"#ce94e3",
  "grey":"rgb(100,100,100)",
  "Belgium":"#56CCF2",
  "BelgiumAlly":"#56CCF2",
  "BelgiumFriend":"#d6f2fc",

}

const flag = {
  "Portugal":"pt.png",
  "Belgium":"be.png",
  "Denmark":"dk.png",
  "Netherlands":"nl.png",
  "China":"cn.png",
  "Turkey":"tr.png",
  "Japan":"jp.png",
  "Austria":"at.png",
  "Italy":"it.png",
  "United Kingdom":"gb.png",
  "United States of America":"us.png",
  "Germany":"de.png",
  "France":"fr.png",
  "Russia":"ru.png",
  "India":"in.png",
  "Norway":"no.png",
  "Sweden":"se.png",
  "Afghanistan":"af.png",
  "Iran":"ir.png",
  "Romania":"ro.png",
  "Republic of Serbia":"rs.png",
  "Bosnia and Herzegovina":"",
  "Spain":"es.png",
  "United Arab Emirates":"ae.png",
  "Albania":"ai.png",
  "Armenia":"am.png",
  "Argentina":"ar.png",
  "Angola":"ao.png",
  "Australia":"au.png",
  "Azerbaijan":"az.png",
  "Bosnia and Herzegovina":"ba.png",
  "Bulgaria":"bg.png",
  "Bangladesh":"bd.png",
  "Bahrain":"bh.png",
  "Burndi":"bi.png",
  "Benin":"bj.png",
  "Bahamas":"bs.png",
  "Brunei":"bn.png",
  "Bolvia":"bo.png",
  "Brazil":"br.png",
  "Bhutan":"bt.png",
  "Zimbabwe":"bw.png",
  "Belarus":"by.png",
  "Belize":"bz.png",
  "Canada":"ca.png",
  "Congo":"cd.png",
  "Switzerland":"ch.png",
  "Ivory Coast":"ci.png",
  "Cameroon":"cm.png"
}


var stats={
  "Human Capital":{
        img:"img/icons/building.svg",
        pos:0,
        desc:"Human Capital",
        longDesc:`Human Capital   brings influence through talent, culture and the capacities of people.`
      },
  Government:{
        img:"img/icons/bank2.svg",
        pos:1,
        desc:"Government",
        longDesc:`The institutional and executive power of aGovernment.`
      },
  Industry:{
        img:"img/icons/gear-wide-connected.svg",
        pos:2,
        desc:"Industry",
        longDesc:`The power of Industry, productive workers, science, and capital.`
      },
  Military:{
        img:"img/icons/shield-fill.svg",
        pos:3,
        desc:"Military Strength",
        longDesc:`Military, continuing the negotiation through... other means.`
},
  Maritime:{img:"img/icons/compass-fill.svg",
        pos:4,
        desc:"Maritime Power",
        longDesc:`Maritime Power, the ability to exert your influence across the sea or globe.`
      },
  Independence:{
        img:"img/icons/lightning-fill.svg",
        pos:-1,
        desc:`Independance There are a variety of categories here....`
      },
  Empire:{
        img:"img/icons/globe2.svg",
        pos:-1,
        desc:`The Great Game - this symbol is used to symbolize the global network of alliances, friends, enemies and dependants that make up the Great Game.
            Great powers and secondary powers not only get a portion of their dependants, allies, and friends capacities, they have additional
            abilities allowing them to influence other countries, defending and developing their allies while  undermining the other powers.
        `
      },
  Country1:{
        img:"img/icons/bullseye.svg",
        pos:-1,
        desc:`Great Power`
      },
  Country2:{
        img:"img/icons/vinyl.svg",
        pos:-1,
        desc:`Secondary Power`
      },
  Country3:{
        img:"img/icons/record-circle.svg",
        pos:-1,
        desc:`Influential Minor`
      },
  Country4:{
        img:"img/icons/record-fill.svg",
        pos:-1,
        desc:`Minor Country`
      },
  Dependent:{
        img:"img/flag/us.png",
        pos:-1,
        desc:`-100 to -75 <br> Dependant`,
        background:color.blue1
      },
  Ally:{
        img:"img/flag/us.png",
        pos:-1,
        desc:`-75 to -50 <br>Ally`,
        background:color.blue2
      },
  Friend:{
        img:"img/flag/us.png",
        pos:-1,
        desc:`-50 to -25 <br>Friend`,
        background:color.green3
      },
  Neutral:{
        img:"img/icons/lightning.svg",
        pos:-1,
        desc:`-25 to 25 <br>Neutral`
      },
  Independent:{
        img:"img/icons/lightning-fill.svg",
        pos:-1,
        desc:`25 to 100<br>Independent`,
        background:'grey'
      },
  "The Great Game":{
        img:"img/icons/sunrise.svg",
        pos:-1,
        desc:``,
      },
  "The Atomic Age":{
        img:"img/icons/mask.svg",
        pos:-1,
        desc:``
      },
  "Virtual Conflict":{
        img:"img/icons/moon-stars.svg",
        pos:-1,
        desc:``,
      },
  "Countries":{
        img:"img/icons/stars.svg",
        pos:-1,
        desc:``,
      },
}

function rulesMenu(filterKey='',filterValue=''){
  let main = document.getElementById("rulesMenu");
  if (main !== null ){
    main.remove();
  } else {
    let main = document.getElementsByClassName("overlayMenu");
    if (main[0] !== undefined ){main[0].remove();}
  document.getElementsByClassName("menu")[0].insertAdjacentHTML("afterend", `
      <div id="rulesMenu" class="fullScreenOverlay" style="background:white;margin-top:3em;padding:2em 25% 2em 5%;" onclick="this.remove()">
        <div style="display:inline-block;width:100%;vertical-align:top;">
          <h1 style="display:inline-flex;justify-content:space-between;width:100%;">
              Game Rules
              <button class="scenarioSwitchButton">The Great Game</button>
              <button class="scenarioSwitchButton">Cards and Powers</button>
              <button class="scenarioSwitchButton">Scenarios</button>
          </h1>
        </div>
        <div style="display:inline-block;width:100%;vertical-align:top;" id="cardViewer">
          ${getRules()}
        </div>
      </div>
  `);
}}

function getRules(){
  let html=`
        <div id="rulesGreatGame">
            <h2>
              <img src="img/icons/globe2.svg">
              The Great Game
            </h2>
            <p>The Great Game - the global network of alliances, friends, enemies and dependants that make up the Great Game.
            </p>
            <h2>
              <img src="img/icons/star.svg">
              Countries
            </h2>
            <div style="width:100%;display:inline-flex;align-items:center;">
                   ${ruleQuarter(stats.Country1)}
                   ${ruleQuarter(stats.Country2)}
                   ${ruleQuarter(stats.Country3)}
                   ${ruleQuarter(stats.Country4)}
            </div><br><br>
            <p>
                Great and Secondary powers get part of their dependants, allies, and friends capacities.
                Each power has cards and abilities only available to them,
                helping them
                defend and develop their influence while undermining that  of other powers.
            </p>
            <h2>
              <img src="img/icons/lightning.svg">
              Independance Level
            </h2>
          <div style="width:100%;display:inline-flex;align-items:center;">
              ${ruleQuarter(stats.Dependent)}
              ${ruleQuarter(stats.Ally)}
              ${ruleQuarter(stats.Friend)}
              ${ruleQuarter(stats.Neutral)}
              ${ruleQuarter(stats.Independent)}
          </div>
        </div>

          `

        html+= `<h2>Country Capacities</h2>`;
        html+=`<div style="width:100%;display:inline-flex;align-items:center;">`

        html+= ruleQuarter(stats["Human Capital"]);
        html+= ruleQuarter(stats.Government);
        html+= ruleQuarter(stats.Industry);
        html+= ruleQuarter(stats.Military);
        html+= ruleQuarter(stats.Maritime);
        html+= `</div>`
        html+=`<h2>Years & Cards & Stats
        </h2>


        `


    return html
}

function ruleRow(rule){
   return `
        <div class="ruleRow">
            <img src="${rule.img}" style="height:1.2em">
            ${rule.desc}
        </div>
        `
}

function ruleQuarter(rule){
  return `
           <div class="ruleQuarter" style="background:${rule.background};background-opacity:.2;border:1px solid black;height:3em;">
             <img src="${rule.img}">
             ${rule.desc}
          </div>
       `
}
