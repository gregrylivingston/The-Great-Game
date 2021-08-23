const policyDecks = [
    {
      title:"Nationhood",
      available:"1900-1920",
      averageCost:1,
      desc:`The dawn of our national conscious.  This is the standard deck for minor countries seeking
      to assert their independence and develop their domestic interests during the age of the Great Game.`,
      icon:'img/icons/record-fill.svg',
      focusAreas:['Independence','Minor Country'],
      cards:[
        {id:6,qty:4}, //Develop Rail Infrastructure
        {id:7,qty:4}, //Small Arms Contract
        {id:8,qty:4}, //Invest in Healthcare
        {id:9,qty:4}, //Invest in Education
        {id:33,qty:1}, //Universal Suffrage
        {id:11,qty:1}, //Banking Reform
        {id:14,qty:4}, //Institution Building
        {id:15,qty:2}, //Ancient Trade Routes
        {id:16,qty:4}, //Build Factories
        {id:18,qty:4}, //Construction contracts
        {id:19,qty:4}, //Develop the arts
        {id:20,qty:4}, //An ancient past
        {id:22,qty:4}, //Speculative Valuations
        {id:25,qty:2}, //Regatta
        {id:26,qty:1}, //Invest in Waterways
        {id:27,qty:4}, //Public Events
      ]
    },
    {//formerly communism
      title:"Isolationism",
      available:"1900-1940",
      averageCost:7,
      desc:`We have enough problems at home...`,
      icon:'img/icons/star-fill.svg',
      focusAreas:['Independence','Great Power'],
      cards:[
        {id:0,qty:4}, //direct  foreign investment
        {id:5,qty:4}, //Fund Insurgency
        {id:6,qty:4}, //Develop Rail Infrastructure
        {id:7,qty:4}, //Small Arms Contract
        {id:8,qty:4}, //Invest in Healthcare
        {id:9,qty:4}, //Invest in Education
        {id:10,qty:1}, //Women in the Workforce
        {id:33,qty:1}, //Universal Suffrance
        {id:11,qty:4}, //Banking Reform
        {id:12,qty:2}, //Ease Tensions
        {id:14,qty:4}, //Institution Building
        {id:16,qty:4}, //Build Factories
        {id:17,qty:2}, //Local Contacts
        {id:18,qty:4}, //Construction contraacts
        {id:19,qty:4}, //Develop the arts
        {id:20,qty:4}, //An ancient past
        {id:22,qty:4}, //Speculative Valuations
        {id:23,qty:4}, //Welcome Immigrants
        {id:25,qty:2}, //Regatta
        {id:26,qty:4}, //Invest in Waterways
        {id:27,qty:4}, //Public Events
        {id:31,qty:2}, //Westerrn Alliance
      ]
    },
    { //formerly facism
      title:"Divine Empire",
      available:"1900-1920",
      averageCost:3,
      desc:`Our ancient interests and rights will be defended like they are God given rights.`,
      icon:'img/icons/vinyl.svg',
      focusAreas:['Independence','Military','Government'],
      cards:[
          {id:4,qty:2}, //Arm Insurgents
          {id:5,qty:2}, //Fund Insurgency
          {id:6,qty:4}, //Develop Rail Infrastructure
          {id:7,qty:4}, //Small Arms Contract
          {id:8,qty:2}, //Invest in Healthcare
          {id:9,qty:2}, //Invest in Education
          {id:33,qty:1}, //Universal Suffrage
          {id:11,qty:1}, //Banking Reform
          {id:12,qty:2}, //Ease Tensions
          {id:14,qty:2}, //Institution Building
          {id:16,qty:4}, //Build Factories
          {id:17,qty:1}, //Local Contacts
          {id:18,qty:4}, //Construction contracts
          {id:19,qty:2}, //Develop the arts
          {id:20,qty:4}, //An ancient past
          {id:21,qty:4}, //Ambush
          {id:26,qty:1}, //Invest in Waterways
          {id:27,qty:4}, //Public Events
          {id:30,qty:2}, //Spy
        ]
    },
    { //formerly democracy
      title:"International Order",
      available:"1900-2000",
      averageCost:10,
      desc:"The balance of power must be preserved. A slow but powerful deck focusing on quality over quantity.",
      icon:'img/icons/globe2.svg',
      focusAreas:['Independence','Great Power'],
      cards:[
        {id:0,qty:2}, //direct  foreign investment
        {id:2,qty:2}, //blockade port
        {id:1,qty:4}, //indirect  foreign investment
        {id:4,qty:2}, //Arm Insurgents
        {id:5,qty:4}, //Fund Insurgency
        {id:6,qty:4}, //Develop Rail Infrastructure
        {id:7,qty:4}, //Small Arms Contract
        {id:8,qty:4}, //Invest in Healthcare
        {id:9,qty:4}, //Invest in Education
        {id:10,qty:1}, //Women in the Workforce
        {id:33,qty:1}, //Universal Suffrage
        {id:11,qty:4}, //Banking Reform
        {id:12,qty:4}, //Ease Tensions
        {id:13,qty:2}, //Road to the Sea
        {id:14,qty:4}, //Institution Building
        {id:15,qty:2}, //Ancient Trade Routes
        {id:16,qty:4}, //Build Factories
        {id:17,qty:2}, //Local Contacts
        {id:18,qty:4}, //Construction contraacts
        {id:19,qty:2}, //Develop the arts
        {id:20,qty:2}, //An ancient past
        {id:25,qty:2}, //Regatta
        {id:26,qty:4}, //Invest in Waterways
        {id:27,qty:4}, //Public Events
        {id:28,qty:4}, //Local Officials
        {id:30,qty:4}, //Spy
        {id:31,qty:2}, //Westerrn Alliance
      ]
    },
    {
      title:"Colonialism",
      available:"1900-1950",
      averageCost:8,
      desc:`The World is a great chess board and we are it's masters.`,
      icon:'img/icons/globe2.svg',
      focusAreas:['Independence','Great Power'],
      cards:[
        {id:0,qty:4}, //direct  foreign investment
        {id:1,qty:4}, //indirect  foreign investment
        {id:2,qty:4}, //blockade port
        {id:3,qty:2}, //blockade region
        {id:4,qty:4}, //Arm Insurgents
        {id:5,qty:2}, //Fund Insurgency
        {id:6,qty:4}, //Develop Rail Infrastructure
        {id:7,qty:4}, //Small Arms Contract
        {id:8,qty:4}, //Invest in Healthcare
        {id:9,qty:4}, //Invest in Education
        {id:10,qty:1}, //Women in the Workforce
        {id:33,qty:1}, //Universal Suffrage
        {id:11,qty:4}, //Banking Reform
        {id:12,qty:4}, //Ease Tensions
        {id:13,qty:2}, //Road to the Sea
        {id:14,qty:4}, //Institution Building
        {id:15,qty:2}, //Ancient Trade Routes
        {id:16,qty:2}, //Build Factories
        {id:17,qty:4}, //Local Contacts
        {id:18,qty:2}, //Construction contracts
        {id:21,qty:4}, //Ambush
        {id:22,qty:4}, //Speculative Valuations
        {id:24,qty:4}, //Colonial Vanguard
        {id:25,qty:4}, //Regatta
        {id:26,qty:4}, //Invest in Waterways
        {id:27,qty:4}, //Public Events
        {id:28,qty:4}, //Develop Local Staff
        {id:30,qty:4}, //Spy
      ]
    },
    { title:"Long Live the King",
      available:"1900-1920",
      averageCost:1,
      icon:'img/icons/record-fill.svg',
      desc:`The safe and simple choice for loyally dependent countries.`,
      cards:[
        {id:2,qty:2}, //blockade port
        {id:5,qty:2}, //Fund Insurgency
        {id:6,qty:4}, //Develop Rail Infrastructure
        {id:7,qty:4}, //Small Arms Contract
        {id:8,qty:4}, //Invest in Healthcare
        {id:9,qty:4}, //Invest in Education
        {id:11,qty:1}, //Banking Reform
        {id:14,qty:4}, //Institution Building
        {id:15,qty:2}, //Ancient Trade Routes
        {id:16,qty:4}, //Build Factories
        {id:18,qty:4}, //Construction contracts
        {id:21,qty:2}, //Ambush
        {id:22,qty:2}, //Speculative Valuations
        {id:23,qty:2}, //Welcome Immigrants
        {id:24,qty:2}, //Colonial Vanguard
        {id:25,qty:2}, //Regatta
        {id:26,qty:1}, //Invest in Waterways
        {id:27,qty:4}, //Public Events
        {id:30,qty:4}, //Spy
      ]
    },
    { title:"Defender of the Faith",
      available:"1900-1920",
      averageCost:2,
      icon:"img/icons/record-circle.svg",
      desc:`Rally the faithful to our cause.`,
      cards:[
        {id:0,qty:4}, //direct  foreign investment
        {id:2,qty:2}, //blockade port
        {id:4,qty:4}, //Arm Insurgents
        {id:5,qty:4}, //Fund Insurgency
        {id:6,qty:4}, //Develop Rail Infrastructure
        {id:7,qty:4}, //Small Arms Contract
        {id:8,qty:4}, //Invest in Healthcare
        {id:9,qty:4}, //Invest in Education
        {id:12,qty:2}, //Ease Tensions
        {id:14,qty:2}, //Institution Building
        {id:15,qty:2}, //Ancient Trade Routes
        {id:16,qty:2}, //Build Factories
        {id:18,qty:2}, //Construction contracts
        {id:20,qty:4}, //An ancient past
        {id:21,qty:4}, //Ambush
        {id:26,qty:1}, //Invest in Waterways
        {id:27,qty:4}, //Public Events
        {id:28,qty:4}, //Develop Local Staff
        {id:30,qty:4}, //Spy
      ]
    },
    {
      title:"Rights of the Nation",
      cards:[

      ]
    },
    {//ok maybe not quite...
      title:"Rights of Man",
      cards:[

      ]
    },
    {title:"Will to Power",
      cards:[

        ]
    },
    {
      title:"Internationalism",
      desc:"A slow but powerful deck focusing on quality over quantity.",
      cards:[
      ]
    },
    {
      title:"The Sun Never Sets",
      desc:"A Powerful and versatile policy deck available only to global powers.  Leverage the vast reaches of the globe in defense of your Empire.",
      cards:[

      ]
    }

];

/*
generalize decks and just give them titles
restrict based on country (maybe have a default for each scenario then a list of what's available for each country...)

Defaults....

--1900 --- top countries have about 10 pts in top areas

1900 - Nationalism (independent default)
  -Isolationism
  -Divine Empire
  -International Order
  -Colonialism
  -Long Live the King (dependent default)

  --1914 --- top countries have about 25 pts in top areas


1914 - Rights of the Nation (independent default)
  -Will to Power
  -Internationalism
  -The Sun Never Sets
  -For King and Country (dependent default)
  -Rights of Man ??? (what does this mean)

  --1900 --- top countries have about 35 pts in top areas

1925 - Self Determination (independent default)
  -Rise of Communism
  -Rise of Fascism

  --1936 --- top countries have about 45 pts in top areas

1936 - Neutrality
  -Total War
  -New World Order
  -Desperate Measures


*/

/*

unused - world effects ?
29 tropical diseases

unused - country specific ?
32 the Bersaglieri

*/
