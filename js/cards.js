var cards = [
    {
      title:"Direct Foreign Investment",
      cost:[1,0,1,0,0],
      desc:"Make an investment in a country to increase their industry and your influence",
      flavor:"Industry",
      img:art[10],
      effects:[
          {restriction:"Minor",target:"Country",modTarget:"Industry",modEffect:"+",modAmount:1},
          {restriction:"Minor",target:"Country",modTarget:"Independance",modEffect:"-",modAmount:10}
          ]
    },
    {
      title:"Indirect Foreign Investment",
      cost:[10,2,10,0,0],
      desc:`Make an investment in region to
        <ul><li>increase your influence in all countries you already influence by 10</li>
        <li>increase the industry in up to 10 of these countries at random</li>
      `,
      flavor:"Industry",
      img:art[5],
      effects:[
          {restriction:"Influenced",target:"Countries in Continent",modTarget:"Independance",modEffect:"-",modAmount:3},
          {restriction:"Influenced",target:"Countries in Continent",modTarget:"Industry",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"Blockade Port",
      cost:[0,0,2,0,2],
      desc:`Blockade a country in your home ocean.
        Reduce that country's naval score to 0 and reduce yours by the same amount until the card is removed from play.`,
      mod:"Blockade a port anywhere in the world.",
      modReq:"Top Global Maritime Score",
      flavor:"Maritime",
      img:art[0],

    },
    {
      title:"Blockade Region",
      cost:[0,0,5,0,10],
      desc:`Blockade a country in your home ocean.
        Reduce a Great or Seconday Power's global naval score to 0 and reduce yours by the same amount until the card is removed from play.
        `,
      mod:"Blockade any region in the world.",
      modReq:"Top Global Maritime Score",
      flavor:"Maritime",
      img:art[2]
    },
    {
      title:"Arm Insurgents",
      cost:[0,1,2,2,0],
      desc:`
        Reduce the influence level in target country.    Reduce it's military level and yours by an equal amount until it is removed from play.
        `,
      flavor:"Military",
      img:art[1],
      effects:[
          {restriction:"Independant",target:"Country",modTarget:"Independance",modEffect:"-",modAmount:25},
          {restriction:"Independant",target:"Country",modTarget:"Military",modEffect:"+",modAmount:1},
          {restriction:"",target:"Self",modTarget:"Military",modEffect:"-",modAmount:1}
          ]
    },
    {
      title:"Fund Insurgency",
      cost:[1,1,1,1,1],
      desc:`Reduce the influence level in target country.  Reduce it's military level and reduce your government level by an equal amount until it is removed from play.
        `,
      flavor:"Military",
      img:art.find(x=>x.title=="Evening on the Road to Granada"),
      effects:[
          {restriction:"Independant",target:"Country",modTarget:"Independance",modEffect:"-",modAmount:15},
          {restriction:"Independant",target:"Country",modTarget:"Military",modEffect:"+",modAmount:1},
          ]
    },
    {
      title:"Invest In Infrastructure",
      cost:[1,1,1,0,0],
      desc:`Develop the industry of your home country or an ally.
        `,
      flavor:"Industry",
      img:art[3],
      effects:[
          {restriction:"",target:"Country",modTarget:"Independance",modEffect:"",modAmount:5},
          {restriction:"",target:"Country",modTarget:"Industry",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"Sign Arms Contracts",
      cost:[0,1,1,1,0],
      desc:`Develop the military of your home country or an ally.
        `,
      flavor:"Military",
      img:art[8],
      effects:[
          {restriction:"",target:"Country",modTarget:"Independance",modEffect:"",modAmount:5},
          {restriction:"",target:"Country",modTarget:"Military",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"Invest In Healthcare",
      cost:[1,1,2,0,0],
      desc:`Develop the Human Capital of your home country or an ally.
        `,
      flavor:"Human Capital",
      img:art[6],
      effects:[
          {restriction:"",target:"Country",modTarget:"Independance",modEffect:"",modAmount:5},
          {restriction:"",target:"Country",modTarget:"Human Capital",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"Invest In Education",
      cost:[3,1,0,0,0],
      desc:`Develop the Human Capital and Government of your home country or an ally.
        `,
      flavor:"Human Capital",
      img:art.find(x=>x.title=="Interior of a School Coranique"),
      effects:[
          {restriction:"",target:"Country",modTarget:"Independance",modEffect:"",modAmount:5},
          {restriction:"",target:"Country",modTarget:"Human Capital",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"Women in the Workforce",
      cost:[10,4,10,0,0],
      desc:`Gain 1 Human Capital and 1 Industry every leap year.
        `,
      flavor:"Human Capital",
      img:art[2],
      effects:[
          {restriction:"My",target:"Country",modTarget:"Industry",modEffect:"+",modAmount:5},
          {restriction:"My",target:"Country",modTarget:"Human Capital",modEffect:"+",modAmount:5}
          ]
    },
    {
      title:"Banking Reform",
      cost:[2,4,2,0,0],
      desc:`Develop the Government and Industry of your home country or an ally.
        `,
      flavor:"Government",
      img:art[11],
      effects:[
          {restriction:"",target:"Country",modTarget:"Independance",modEffect:"",modAmount:5},
          {restriction:"",target:"Country",modTarget:"Government",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"Ease Tensions",
      cost:[0,2,0,0,0],
      desc:`Reduce the influence of independant countries in target continent
        `,
      flavor:"Government",
      img:art[7],
      effects:[
          {restriction:"Independant",target:"Countries in Continent",modTarget:"Independance",modEffect:"-",modAmount:10},
          ]
    },
    {
      title:"Road to the Sea",
      cost:[1,0,1,0,3],
      desc:`
        `,
      flavor:"Maritime",
      img:art.find(x=>x.title=="The Road to the Sea"),
      effects:[
          {restriction:"Minor",target:"Countries in Continent",modTarget:"Independance",modEffect:"-",modAmount:5},
          ]
    },
    {
      title:"Institution Building",
      cost:[2,2,0,0,0],
      desc:`
        `,
      flavor:"Government",
      img:art.find(x=>x.title=="View of The Cleveland Museum of Art"),
      effects:[
          {restriction:"",target:"Country",modTarget:"Independance",modEffect:"",modAmount:5},
          {restriction:"",target:"Country",modTarget:"Government",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"Ancient Trade Routes",
      cost:[0,0,0,0,1],
      desc:`
        `,
      flavor:"Maritime",
      img:art.find(x=>x.title=="Venice"),
      effects:[
          {restriction:"",target:"Country",modTarget:"Independance",modEffect:"",modAmount:5},
          {restriction:"",target:"Country",modTarget:"Maritime",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"Build Factories",
      cost:[1,0,3,0,0],
      desc:`
        `,
      flavor:"Industry",
      img:art.find(x=>x.title=="View of a Factory"),
      effects:[
          {restriction:"",target:"Country",modTarget:"Independance",modEffect:"",modAmount:5},
          {restriction:"",target:"Country",modTarget:"Industry",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"Local Contacts",
      cost:[0,1,0,0,3],
      desc:`
        `,
      flavor:"Maritime",
      img:art.find(x=>x.title=="Samoa"),
      effects:[
          {restriction:"Foreign Dependant",target:"Country",modTarget:"Independance",modEffect:"+",modAmount:15},
          ]
    },
    {
      title:"Develop Construction Industry",
      cost:[1,1,3,0,0],
      desc:`Add 2 to industry.
        `,
      flavor:"Industry",
      img:art.find(x=>x.title=="Classic Landscape"),
      effects:[
          {restriction:"",target:"Country",modTarget:"Independance",modEffect:"",modAmount:3},
          {restriction:"",target:"Country",modTarget:"Industry",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"Develop the Arts",
      cost:[2,0,0,0,0],
      desc:`+ to human capital.
        `,
      flavor:"Human Capital",
      img:art.find(x=>x.title=="La Condition Humaine"),
      effects:[
          {restriction:"",target:"Country",modTarget:"Independance",modEffect:"+",modAmount:3},
          {restriction:"",target:"Country",modTarget:"Human Capital",modEffect:"+",modAmount:1}
          ]
    },
    {
      title:"An Ancient Past",
      cost:[1,0,0,0,0],
      desc:`Add 1 government score.
        `,
      flavor:"Government",
      img:art.find(x=>x.title=="Ruins of the Parthanon"),
      effects:[
          {restriction:"",target:"Country",modTarget:"Independance",modEffect:"+",modAmount:10},
          ]
    },
    {
      title:"Ambush",
      cost:[0,3,0,1,1],
      desc:`The unfortunate disappearance of an enemy agent improves our influence.
        `,
      flavor:"Government",
      img:art.find(x=>x.title=="The Trap"),
      effects:[
          {restriction:"",target:"Country",modTarget:"Independance",modEffect:"",modAmount:15},
          ]
    },
    {
      title:"Speculative Valuations",
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
      cost:[10,5,5,0,0],
      desc:`+1 Human Capital
      `,
      flavor:"Human Capital",
      img:art.find(x=>x.title=="In the Land of Promise"),
      effects:[
          {restriction:"My",target:"Country",modTarget:"Human Capital",modEffect:"+",modAmount:5},
          ]
    },
    {
      title:"Colonial Vanguard",
      cost:[1,3,1,1,1],
      desc:`Add 1 to human capital, 1 to government, and 2 to military in ally.
        `,
      flavor:"Military",
      img:art.find(x=>x.title=="The Riders"),
      effects:[
          {restriction:"Ally",target:"Country",modTarget:"Human Capital",modEffect:"+",modAmount:1},
          {restriction:"Ally",target:"Country",modTarget:"Government",modEffect:"+",modAmount:1},
          {restriction:"Ally",target:"Country",modTarget:"Military",modEffect:"+",modAmount:2},
          {restriction:"Ally",target:"Country",modTarget:"Independance",modEffect:"-",modAmount:25},
          ]
    },
    {
      title:"Regatta",
      cost:[1,1,1,0,1],
      desc:`+1 Maritime
      `,
      flavor:"Maritime",
      img:art.find(x=>x.title=="Imaginary Regatta of America's Cup Winners"),
      effects:[
          {restriction:"",target:"Country",modTarget:"Industry",modEffect:"+",modAmount:1},
          ]
    },
    {
      title:"National Infrastructure",
      cost:[1,3,3,0,0],
      desc:`Add 1 to human capital, 1 to government, and 1 to industry.
        `,
      flavor:"Industry",
      img:art.find(x=>x.title=="Charing Cross Bridge, London")
    },
    {
      title:"National Events",
      cost:[3,1,1,0,0],
      desc:`+1 Human Capital
      `,
      flavor:"Human Capital",
      img:art.find(x=>x.title=="Club Night"),
      effects:[
          {restriction:"Allied",target:"Country",modTarget:"Independance",modEffect:"",modAmount:20},
          ]
    },
    {
      title:"Local Officials",
      cost:[2,2,0,0,0],
      desc:`Add 1 to human capital.
        `,
      flavor:"Human Capital",
      img:art.find(x=>x.title=="The Petition"),
      effects:[
        {restriction:"Allied",target:"Country",modTarget:"Independance",modEffect:"",modAmount:15},
        ]
    },
    {
      title:"Tropical Disease",
      cost:[3,1,1,0,0],
      desc:`+Independance in Africa and South Africa.
      `,
      flavor:"Government",
      img:art.find(x=>x.title=="The Equatorial Jungle"),
      effects:[
        {restriction:"",target:"Countries in Africa",modTarget:"Independance",modEffect:"",modAmount:15},
        {restriction:"",target:"Countries in South America",modTarget:"Independance",modEffect:"",modAmount:15},
        ]
    },
    {
      title:"Spy",
      cost:[2,2,0,0,0],
      desc:`Gain 10 independance in country.
        `,
      flavor:"Government",
      img:art.find(x=>x.title=="The House Maid")
    },
    {
      title:"The Western Alliance",
      cost:[5,5,5,5,5],
      desc:`Democracy Influenced countries lose 5 Independance.
      `,
      flavor:"Government",
      img:art.find(x=>x.title=="Allies Day")
    },
    {
      title:"Spy",
      cost:[2,2,0,0,0],
      desc:`Gain 10 independance in country.
        `,
      flavor:"Government",
      img:art.find(x=>x.title=="The House Maid")
    },
    {
      title:"The Bersaglieri",
      cost:[0,0,0,1,0],
      desc:`+1 Military Strength
      `,
      flavor:"Military",
      img:art.find(x=>x.title=="Allies Day"),
      effects:[
          {restriction:"Italy",target:"Country",modTarget:"Military",modEffect:"+",modAmount:1},
          ]
    },
]

/*
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
