
//conquerings By year /// should probably include which player you can choose.... or something.
//score - people, gov, science&Industry, military, navy

const color = {
  "Italy":"#219653",
  "India":"OliveDrab",
  "Austria":"#32B7C0",
  "United States of America":"#2F80ED",
  "Turkey":"#56CCF2",
  "France":"MidnightBlue",
  "Russia":"#EB5757",
  "China":"#ED2387",
  "Japan":"#F2994A",
  "Germany":"#F2C94C",
  "United Kingdom":"#9B51E0",
  purple2:"#BB6BD9",
  grey:"rgb(100,100,100)",
  "Belgium":"#56CCF2",
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

}


var scenarios = [
                {
                    "year":1900,
                    "endYear":1950,
                    "length":120,
                    "era":"The Great Game",
                    "type":"Campaign",
                    "title":"The Great Game",
                    "text":`The Twentieth Century has dawned and it is sure to bring more marvelous changes.
                            Urbanization is transforming the capacities of people, the government and industry.
                            Slavery has been forced into the shadows.
                            The world continues to undergo rapid growth in productivity, profit, and prosperity -
                            but the spoils are not to be distributed fairly.  Players will get what they negotiate for,
                            not what they deserve.
                    `,
                    "countries":[
                    //other influencers
                          {owned:"Portugal",by:"Portugal",amount:100,score:[2,2,1,1,1],status:"Minor Country"},
                          {owned:"Mozambique",by:"Portugal",amount:-50,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Angola",by:"Portugal",amount:-50,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"East Timor",by:"Portugal",amount:-50,score:[0,0,0,0,0],status:"Minor Country"},
                          {owned:"Guinea Bissau",by:"Portugal",amount:-50,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Belgium",by:"Belgium",score:[2,2,2,2,1],amount:100,status:"Minor Country"},
                          {owned:"Democratic Republic of the Congo",by:"Belgium",score:[1,0,0,0,0],amount:-55,status:"Minor Country"},
                          {owned:"Denmark",by:"Denmark",score:[2,2,1,1,1],amount:100,status:"Minor Country"},
                          {owned:"Iceland",by:"Denmark",score:[1,0,0,0,0],amount:-70,status:"Minor Country"},
                          {owned:"Greenland",by:"Denmark",score:[0,0,0,0,0],amount:-60,status:"Minor Country"},
                          {owned:"Netherlands",by:"Netherlands",score:[2,2,2,2,1],amount:100,status:"Minor Country"},
                          {owned:"Indonesia",by:"Netherlands",score:[2,0,0,0,0],amount:-60,status:"Minor Country"},
                          {owned:"Suriname",by:"Netherlands",score:[1,0,0,0,0],amount:-60,status:"Minor Country"},
                          {owned:"China",by:"China",score:[3,2,2,3,1],amount:100,status:"Minor Country"},
                          {owned:"Mongolia",by:"China",score:[1,0,0,1,0],amount:-50,status:"Minor Country"},


                    //secondary powers
                          {owned:"Turkey",by:"Turkey",amount:88,score:[2,3,2,5,3],status:"Secondary Power"},
                          {owned:"Japan",by:"Japan",amount:100,score:[2,3,2,5,3],status:"Secondary Power"},
                          {owned:"Austria",by:"Austria",amount:90,score:[4,3,3,4,2],status:"Secondary Power"},
                          {owned:"Italy",by:"Italy",amount:86,score:[4,3,3,4,2],status:"Secondary Power"},


                          {owned:"Macedonia",by:"Turkey",amount:-50,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Albania",by:"Turkey",amount:-50,score:[1,0,0,0,0],status:"Minor Country",},
                          {owned:"Kosovo",by:"Turkey",amount:-50,score:[1,0,0,0,0],status:"Minor Country",},
                          {owned:"Greece",by:"Turkey",amount:-15,score:[1,1,0,0,0],status:"Minor Country",},
                          {owned:"Jordan",by:"Turkey",amount:-50,score:[1,0,0,0,0],status:"Minor Country",},
                          {owned:"Libya",by:"Turkey",amount:-55,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Kuwait",by:"Turkey",amount:-75,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Syria",by:"Turkey",amount:-50,score:[1,0,0,0,0],status:"Minor Country",},
                          {owned:"Iraq",by:"Turkey",amount:-50,score:[1,1,0,0,0],status:"Minor Country",},
                          {owned:"Eritrea",by:"Italy",amount:-50,score:[1,0,0,0,0],status:"Minor Country",},
                          {owned:"Somalia",by:"Italy",amount:-50,score:[1,0,0,0,0],status:"Minor Country",},
                          {owned:"South Korea",by:"Japan",amount:-80,score:[2,0,1,0,0],status:"Minor Country"},
                          {owned:"North Korea",by:"Japan",amount:-50,score:[1,1,1,0,0],status:"Minor Country"},
                          {owned:"Taiwan",by:"Japan",amount:-60,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Hungary",by:"Austria",amount:-86,status:"Minor Country",score:[1,1,1,1,0]},
                          {owned:"Slovakia",by:"Austria",amount:-57,status:"Minor Country",score:[1,0,1,0,0]},
                          {owned:"Croatia",by:"Austria",amount:-58,status:"Minor Country",score:[1,1,0,1,0]},
                          {owned:"Czech Republic",by:"Austria",amount:-72,status:"Minor Country",score:[1,1,2,1,0]},
                          {owned:"Slovenia",by:"Austria",amount:-78,status:"Minor Country",score:[1,0,0,1,0]},


                    //great powers
                          {owned:"United Kingdom",by:"United Kingdom",amount:100,score:[6,8,6,2,8],status:"Great Power",
                              desc:`The sun never sets on the British Empire.`},
                          {owned:"United States of America",by:"United States of America",amount:99,score:[8,4,8,1,2],status:"Great Power"},
                          {owned:"Germany",by:"Germany",amount:99,score:[5,8,7,8,3],status:"Great Power"},
                          {owned:"Russia",by:"Russia",amount:92,score:[5,5,5,7,6],status:"Great Power"},
                          {owned:"France",by:"France",amount:97,score:[5,7,5,8,4],status:"Great Power"},

                          {owned:"Philippines",by:"United States of America",amount:52,status:"Minor Country",score:[1,0,0,0,0]},
                          {owned:"Puerto Rico",by:"United States of America",amount:58,status:"Minor Country",score:[1,0,0,0,0]},

                          {owned:"Poland",by:"Germany",amount:-92,status:"Minor Country",score:[2,2,2,2,2]},
                          {owned:"Cameroon",by:"Germany",amount:-55,status:"Minor Country",score:[1,0,0,0,0]},
                          {owned:"Namibia",by:"Germany",amount:-55,status:"Minor Country",score:[1,0,0,0,0]},
                          {owned:"United Republic of Tanzania",by:"Germany",amount:-55,status:"Minor Country",score:[1,0,0,0,0]},
                          {owned:"Papua New Guinea",by:"Germany",amount:-55,status:"Minor Country",score:[1,0,0,0,0]},
                          {owned:"Togo",by:"Germany",amount:-55,status:"Minor Country",score:[1,0,0,0,0]},

                          {owned:"Belarus",by:"Russia",amount:-86,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Ukraine",by:"Russia",amount:-72,score:[2,1,1,1,0],status:"Minor Country"},
                          {owned:"Lithuania",by:"Russia",amount:-55,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Estonia",by:"Russia",amount:-59,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Latvia",by:"Russia",amount:-62,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Georgia",by:"Russia",amount:-72,score:[1,0,0,0,0],status:"Minor Country",flag:"ru.png"},
                          {owned:"Armenia",by:"Russia",amount:-59,score:[1,0,0,0,0],status:"Minor Country",flag:"ru.png"},
                          {owned:"Azerbaijan",by:"Russia",amount:72,score:[1,0,1,0,0],status:"Minor Country",flag:"ru.png"},
                          {owned:"Kazakhstan",by:"Russia",amount:-55,score:[1,0,0,0,0],status:"Minor Country",flag:"ru.png"},
                          {owned:"Uzbekistan",by:"Russia",amount:-55,score:[1,0,0,0,0],status:"Minor Country",flag:"ru.png"},
                          {owned:"Turkmenistan",by:"Russia",amount:-51,score:[1,0,0,0,0],status:"Minor Country",flag:"ru.png"},
                          {owned:"Kyrgyzstan",by:"Russia",amount:-62,score:[1,0,0,0,0],status:"Minor Country",flag:"ru.png"},
                          {owned:"Tajikistan",by:"Russia",amount:-61,score:[1,0,0,0,0],status:"Minor Country",flag:"ru.png"},
                          {owned:"Finland",by:"Russia",amount:-55,score:[1,1,1,2,0],status:"Minor Country",flag:"ru.png"},

                          {owned:"Canada",by:"United Kingdom",amount:-88,score:[1,1,1,1,1],status:"Minor Country"},
                          {owned:"Australia",by:"United Kingdom",amount:-92,score:[1,1,0,1,1],status:"Minor Country"},
                          {owned:"India",by:"United Kingdom",amount:-57,score:[2,1,1,2,0],status:"Minor Country"},
                          {owned:"South Africa",by:"United Kingdom",amount:-85,score:[1,0,0,1,0],status:"Minor Country"},
                          {owned:"New Zealand",by:"United Kingdom",amount:-94,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Kenya",by:"United Kingdom",amount:-62,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Jamaica",by:"United Kingdom",amount:-84,score:[0,0,0,0,0],status:"Minor Country"},
                          {owned:"Ireland",by:"United Kingdom",amount:-61,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Egypt",by:"United Kingdom",amount:-62,score:[1,0,0,0,3],status:"Minor Country"},
                          {owned:"Sudan",by:"United Kingdom",amount:-52,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"South Sudan",by:"United Kingdom",amount:-54,score:[0,0,0,0,0],status:"Minor Country"},
                          {owned:"The Bahamas",by:"United Kingdom",amount:-80,score:[0,0,0,0,1],status:"Minor Country"},
                          {owned:"Myanmar",by:"United Kingdom",amount:-57,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Pakistan",by:"United Kingdom",amount:-52,score:[1,0,0,1,0],status:"Minor Country"},
                          {owned:"Bangladesh",by:"United Kingdom",amount:-61,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Cyprus",by:"United Kingdom",amount:-85,score:[0,0,0,0,1],status:"Minor Country"},
                          {owned:"Malaysia",by:"United Kingdom",amount:-65,score:[0,0,1,0,1],status:"Minor Country"},
                          {owned:"Nigeria",by:"United Kingdom",amount:-71,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Zambia",by:"United Kingdom",score:[0,0,0,0,0],amount:-69,status:"Minor Country"},
                          {owned:"Zimbabwe",by:"United Kingdom",score:[1,0,0,0,0],amount:-61,status:"Minor Country"},
                          {owned:"Botswana",by:"United Kingdom",score:[0,0,0,0,0],amount:-62,status:"Minor Country"},
                          {owned:"Uganda",by:"United Kingdom",score:[0,0,0,0,0],amount:-68,status:"Minor Country"},
                          {owned:"Somaliland",by:"United Kingdom",score:[1,0,0,0,1],amount:-68,status:"Minor Country"},
                          {owned:"Malawi",by:"United Kingdom",score:[1,0,0,0,0],amount:-61,status:"Minor Country"},
                          {owned:"Guyana",by:"United Kingdom",score:[1,0,0,0,0],amount:-55,status:"Minor Country"},
                          {owned:"Fiji",by:"United Kingdom",score:[0,0,0,0,0],amount:-75,status:"Minor Country"},
                          {owned:"Solomon Islands",by:"United Kingdom",score:[0,0,0,0,0],amount:-62,status:"Minor Country"},
                          {owned:"Brunei",by:"United Kingdom",score:[0,0,0,0,0],amount:-72,status:"Minor Country"},
                          {owned:"Sri Lanka",by:"United Kingdom",score:[1,0,0,0,0],amount:-76,status:"Minor Country"},
                          {owned:"Ghana",by:"United Kingdom",score:[1,0,0,0,0],amount:-61,status:"Minor Country"},
                          {owned:"Sierra Leone",by:"United Kingdom",score:[1,0,0,0,1],amount:-64,status:"Minor Country"},
                          {owned:"Gambia",by:"United Kingdom",score:[1,0,0,0,0],amount:-57,status:"Minor Country"},

                          {owned:"New Caledonia",by:"France",amount:-40,score:[0,0,0,0,0],status:"Minor Country"},
                          {owned:"Republic of Congo",by:"France",amount:-40,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Algeria",by:"France",amount:-60,status:"Minor Country"},
                          {owned:"Vietnam",by:"France",amount:-55,status:"Minor Country"},
                          {owned:"Cambodia",by:"France",amount:-35,status:"Minor Country"},
                          {owned:"Laos",by:"France",amount:-35,status:"Minor Country"},
                          {owned:"Mauritania",by:"France",amount:-35,status:"Minor Country"},
                          {owned:"Ivory Coast",by:"France",amount:-35,status:"Minor Country"},
                          {owned:"Gabon",by:"France",amount:-35,status:"Minor Country"},
                          {owned:"Tunisia",by:"France",amount:-35,status:"Minor Country"},
                          {owned:"Niger",by:"France",amount:-35,status:"Minor Country"},
                          {owned:"Mali",by:"France",amount:-35,status:"Minor Country"},
                          {owned:"Madagascar",by:"France",amount:-35,status:"Minor Country"},
                          {owned:"Central African Republic",by:"France",amount:-35,status:"Minor Country"},
                          {owned:"Chad",by:"France",amount:-35,status:"Minor Country"},
                          {owned:"Burkina Faso",by:"France",amount:-35,status:"Minor Country"},
                          {owned:"Senegal",by:"France",amount:-35,status:"Minor Country"},
                          {owned:"Guinea",by:"France",amount:-35,status:"Minor Country"},

                    //independant countries
                          {owned:"Norway",by:"Norway",amount:5,score:[2,2,1,1,1],status:"Minor Country",flag:"no.png"},
                          {owned:"Sweden",by:"Sweden",amount:5,score:[2,2,1,1,1],status:"Minor Country",flag:"se.png"},
                          {owned:"Afghanistan",by:"Afghanistan",amount:50,score:[1,0,0,1,0],status:"Minor Country",flag:"af.png"},
                          {owned:"Iran",by:"Iran",amount:50,score:[1,1,1,1,0],status:"Minor Country",flag:"ir.png"},
                          {owned:"Romania",by:"Austria",amount:5,score:[1,1,1,1,0],status:"Minor Country"},
                          {owned:"Republic of Serbia",by:"Austria",amount:15,score:[1,0,0,2,0],status:"Minor Country"},
                          {owned:"Bosnia and Herzegovina",by:"Austria",amount:15,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Spain",by:"Spain",amount:100,score:[2,2,2,2,1],status:"Minor Country",flag:"es.png"},
                          {owned:"Bhutan",by:"Bhutan",amount:100,score:[1,0,0,0,0],status:"Minor Country",flag:"es.png"},
                          {owned:"Nepal",by:"Nepal",amount:100,score:[1,0,0,0,0],status:"Minor Country",flag:"es.png"},


                                      ]
                },
                {
                    "year":1900,
                    "endYear":1925,
                    "length":40,
                    "era":"The Great Game",
                    "type":"Scenario",
                    "title":"Dawn of the Century",
                    "text":"<h1>Coming Soon</h1>Tensions between the Great Powers have grown to a boiling point.",
                    "countries":[
                      {owned:"United Kingdom",by:"United Kingdom",amount:100,score:[6,8,6,2,8],status:"Great Power",flag:"gb.png",
                          desc:`The sun never sets on the British Empire.`},
                      {owned:"France",by:"France",amount:100,score:[5,7,5,8,4],status:"Great Power",flag:"fr.png"},
                      {owned:"United States of America",by:"United States of America",amount:100,score:[48,4,8,1,2],status:"Great Power",flag:"us.png"},
                      {owned:"Germany",by:"Germany",amount:100,score:[5,8,7,8,3],status:"Great Power",flag:"de.png"},
                      {owned:"Russia",by:"Russia",amount:100,score:[5,5,5,7,6],status:"Great Power",flag:"ru.png"},
                                      ]
                },
                {
                    "year":1914,
                    "endYear":1939,
                    "length":40,
                    "era":"The Great Game",
                    "type":"Scenario",
                    "title":"Powers Collide",
                    "text":"<h1>Coming Soon</h1>Tensions between the Great Powers have grown to a boiling point.",
                    "countries":[
                      {owned:"France",by:"France",amount:100,score:[5,7,5,8,4],status:"Great Power",flag:"fr.png",
                        desc:`Tensions are on the rise in the Europe but France has no need to fear.  Our nation has the finest military
                         traditions and institions known to history.  Our empire is vast and our friends are many.  France will not cowtow to upstarts and foreign aggressors.`
                          },
                      {owned:"United Kingdom",by:"United Kingdom",amount:100,score:[6,8,6,2,8],status:"Great Power",flag:"gb.png",
                          desc:`The sun never sets on the British Empire.`},
                      {owned:"United States of America",by:"United States of America",amount:100,score:[48,4,8,1,2],status:"Great Power",flag:"us.png"},
                      {owned:"Germany",by:"Germany",amount:100,score:[5,8,7,8,3],status:"Great Power",flag:"de.png"},
                      {owned:"Russia",by:"Russia",amount:100,score:[5,5,5,7,6],status:"Great Power",flag:"ru.png"},

                                      ]
                },
                {
                    "year":1925,
                    "endYear":1950,
                    "length":60,
                    "era":"The Great Game",
                    "type":"Scenario",
                    "title":"A New World Order",
                    "text":"<h1>Coming Soon</h1>With the war behind us, prosperity is returning to the world.",
                    "countries":[
                      {owned:"United Kingdom",by:"United Kingdom",amount:100,score:[6,8,6,2,8],status:"Great Power",flag:"gb.png"},
                      {owned:"United States of America",by:"United States of America",amount:100,score:[48,4,8,1,2],status:"Great Power",flag:"us.png"},
                      {owned:"Germany",by:"Germany",amount:100,score:[5,8,7,8,3],status:"Great Power",flag:"de.png"},
                      {owned:"Russia",by:"Russia",amount:100,score:[5,5,5,7,6],status:"Great Power",flag:"ru.png"},
                      {owned:"France",by:"France",amount:100,score:[5,7,5,8,4],status:"Great Power",flag:"fr.png"},

                                      ]
                },
                {
                    "year":1936,
                    "endYear":1960,
                    "length":60,
                    "era":"The Great Game",
                    "type":"Scenario",
                    "title":"World At War",
                    "text":"<h1>Coming Soon</h1>Hopes for a lasting peace have been dashed.",
                    "countries":[
                      {owned:"Germany",by:"Germany",amount:100,score:[5,8,7,8,3],status:"Great Power",flag:"de.png"},
                      {owned:"United Kingdom",by:"United Kingdom",amount:100,score:[6,8,6,2,8],status:"Great Power",flag:"gb.png"},
                      {owned:"United States of America",by:"United States of America",amount:100,score:[48,4,8,1,2],status:"Great Power",flag:"us.png"},
                      {owned:"Russia",by:"Russia",amount:100,score:[5,5,5,7,6],status:"Great Power",flag:"ru.png"},
                      {owned:"France",by:"France",amount:100,score:[5,7,5,8,4],status:"Great Power",flag:"fr.png"},

                                      ]
                },
                {
                    "year":1950,
                    "endYear":2025,
                    "length":120,
                    "era":"The Atomic Age",
                    "type":"Campaign",
                    "title":"The Cold War",
                    "text":`<h1>Coming Soon</h1>The next great war is over but the danger has never been greater.   From the dust and ashes,
                        two mighty factions have arisen.  The leading nations of the factions, the United States of America
                        and the Union of Socialist Soviet Republics, have accumulated vast amounts of influence, technology,
                        industry, and control through the conquest of their rivals.  Wielding modern wonders of technology, organization, and Industry,
                        the Super Powers of the 21st Century had powers that were unimaginable even a few decades prior.
                        <br><br><h4>Welcome to the Atomic Age.  Unlocking this campaign additional unlocks 5 Scenarios, 5 Policy Decks, and 3 Country card pakcs from the Atomic Age , </h4>.`,
                    "countries":[
                      {owned:"Russia",by:"Russia",amount:100,score:[32,40,39,55,32],status:"Great Power",flag:"ru.png",
                          desc:`Once seemingly alone against the whole world, our allies, friends, and dependents are found across vast parts of Europe and Asia.`},
                      {owned:"United States of America",by:"United States of America",amount:100,score:[100,100,100,102,102],status:"Great Power",flag:"us.png"},
                      {owned:"United Kingdom",by:"United Kingdom",amount:100,score:[46,58,46,22,48],status:"Secondary Power",flag:"gb.png"},
                      {owned:"Germany",by:"United States of America",amount:-80,score:[55,58,57,48,18],status:"Minor Country",flag:"de.png"},
                      {owned:"China",by:"China",amount:20,score:[45,70,62,45,22],status:"Secondary Power",flag:"cn.png"},
                      {owned:"Turkey",by:"Turkey",amount:20,score:[15,12,10,11,6],status:"Minor Country",flag:"tr.png"},
                      {owned:"Japan",by:"United States of America",amount:-70,score:[20,24,27,12,11],status:"Minor Country",flag:"jp.png"},
                      {owned:"Austria",by:"United States of America",amount:-60,score:[11,4,6,2,0],status:"Minor Country",flag:"at.png"},
                      {owned:"Italy",by:"United States of America",amount:-90,score:[19,12,13,9,7],status:"Minor Country",flag:"it.png"},
                      {owned:"India",by:"United Kingdom",amount:-57,score:[28,20,24,26,14],status:"Minor Country",flag:"in.png"},
                      {owned:"France",by:"United States of America",amount:-5,score:[40,50,44,35,27],status:"Minor Country",flag:"fr.png"},

                      {owned:"Hungary",by:"Russia",amount:-86,status:"Minor Country",score:[1,1,1,1,0]},
                      {owned:"Slovakia",by:"Russia",amount:-57,status:"Minor Country",score:[1,0,1,0,0]},
                      {owned:"Czech Republic",by:"Russia",amount:-72,status:"Minor Country",score:[1,1,2,1,0]},
                      {owned:"Poland",by:"Russia",amount:-72,status:"Minor Country",score:[1,1,2,1,0]},
                      {owned:"Mongolia",by:"Russia",amount:-72,status:"Minor Country",score:[1,1,2,1,0]},
                      {owned:"Romania",by:"Russia",amount:-72,status:"Minor Country",score:[1,1,2,1,0]},
                      {owned:"Mongolia",by:"Russia",amount:-72,status:"Minor Country",score:[1,1,2,1,0]},
                      {owned:"Moldova",by:"Russia",amount:-72,status:"Minor Country",score:[1,1,2,1,0]},

                                      ]
                },
                {
                    "year":2021,
                    "endYear":2100,
                    "length":120,
                    "era":"Virtual Conflict",
                    "type":"Campaign",
                    "title":"Virtual Conflict",
                    "text":`Space and the internet have changed everything...
                      <br><br><h4>Welcome to the Age of Virtual Age.  Unlocking this campaign additional unlocks 5 Scenarios, 5 Policy Decks, and 3 Country card pakcs from the Age of Virtual Conflict</h4>.`,
                    "countries":[
                      {owned:"United States of America",by:"United States of America",amount:100,score:[100,100,100,102,102],status:"Great Power",flag:"us.png",
                          "desc":`Oh beacon of liberty, land of Freedom.  Home to the best and brightest, gathered from all over the world.  Let not our sins destroy us....`},
                      {owned:"Belgium",by:"United States of America",score:[2,2,2,2,1],amount:-80,status:"Minor Country",flag:"be.png"},
                      {owned:"United Kingdom",by:"Belgium",amount:-51,score:[46,58,46,22,48],status:"Minor Country",flag:"gb.png"},
                      {owned:"Germany",by:"Belgium",amount:-62,score:[55,58,57,48,18],status:"Secondary Power",flag:"de.png"},
                      {owned:"Russia",by:"Russia",amount:100,score:[32,40,39,55,32],status:"Secondary Power",flag:"ru.png"},
                      {owned:"China",by:"China",amount:100,score:[45,70,62,45,22],status:"Secondary Power",flag:"cn.png"},
                      {owned:"Japan",by:"Japan",amount:100,score:[20,24,27,12,11],status:"Minor Country",flag:"jp.png"},
                      {owned:"Austria",by:"Austria",amount:10,score:[11,4,6,2,0],status:"Minor Country",flag:"at.png"},
                      {owned:"Italy",by:"Belgium",amount:-55,score:[19,12,13,9,7],status:"Minor Country",flag:"it.png"},
                      {owned:"India",by:"India",amount:97,score:[28,20,24,26,14],status:"Secondary Power",flag:"in.png"},
                      {owned:"France",by:"Belgium",amount:-62,score:[40,50,44,35,27],status:"Minor Country",flag:"fr.png"},
                      {owned:"Spain",by:"Belgium",amount:-62,score:[40,50,44,35,27],status:"Minor Country",flag:"fr.png"},
                      {owned:"Netherlands",by:"Belgium",amount:-62,score:[40,50,44,35,27],status:"Minor Country",flag:"fr.png"},
                      {owned:"Denmark",by:"Belgium",amount:-62,score:[40,50,44,35,27],status:"Minor Country",flag:"fr.png"},
                      {owned:"Ireland",by:"Belgium",amount:-62,score:[40,50,44,35,27],status:"Minor Country",flag:"fr.png"},
                      {owned:"Portugal",by:"Belgium",amount:-62,score:[40,50,44,35,27],status:"Minor Country",flag:"fr.png"},
                      {owned:"Greece",by:"Belgium",amount:-62,score:[40,50,44,35,27],status:"Minor Country",flag:"fr.png"},

                      {owned:"Jordan",by:"Jordan",amount:50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                      {owned:"Libya",by:"Libya",amount:75,score:[1,0,0,0,0],status:"Minor Country"},
                      {owned:"Kuwait",by:"Kuwait",amount:75,score:[1,0,0,0,0],status:"Minor Country"},
                      {owned:"Syria",by:"Syria",amount:50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                      {owned:"Iraq",by:"Iraq",amount:50,score:[1,1,0,0,0],status:"Minor Country",flag:"tr.png"},
                      {owned:"Eritrea",by:"Eritrea",amount:50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                      {owned:"Somalia",by:"Somalia",amount:50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                      {owned:"North Korea",by:"China",amount:40,score:[1,1,1,0,0],status:"Minor Country"},
                      {owned:"Hungary",by:"Germany",amount:90,status:"Minor Country"},
                      {owned:"Slovakia",by:"Germany",amount:100,status:"Minor Country"},
                      {owned:"Croatia",by:"Germany",amount:100,status:"Minor Country"},
                      {owned:"Czech Republic",by:"Germany",amount:100,status:"Minor Country"},
                      {owned:"Slovenia",by:"Germany",amount:70,status:"Minor Country"},

                      {owned:"Turkey",by:"United States of America",amount:-51,score:[15,12,10,11,6],status:"Minor Country",flag:"tr.png"},
                      {owned:"Taiwan",by:"United States of America",amount:-90,score:[1,0,0,0,0],status:"Minor Country"},
                      {owned:"South Korea",by:"United States of America",amount:-95,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Japan",by:"United States of America",amount:-75,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Australia",by:"United States of America",amount:-80,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Canada",by:"United States of America",amount:-80,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"New Zealand",by:"United States of America",amount:-80,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Israel",by:"United States of America",amount:-80,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Panama",by:"United States of America",amount:-55,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Oman",by:"United States of America",amount:-55,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Peru",by:"United States of America",amount:-55,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Iceland",by:"United States of America",amount:-55,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"United Arab Emirates",by:"United States of America",amount:-55,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Eritrea",by:"United States of America",amount:-55,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Cameroon",by:"United States of America",amount:-55,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"The Bahamas",by:"United States of America",amount:-55,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Honduras",by:"United States of America",amount:-55,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Saudi Arabia",by:"United States of America",amount:-55,score:[2,0,1,0,0],status:"Minor Country"},

                      {owned:"Egypt",by:"Egypt",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Sudan",by:"Sudan",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"South Sudan",by:"South Sudan",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"South Africa",by:"South Africa",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Pakistan",by:"Pakistan",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Bangladesh",by:"Bangladesh",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Myanmar",by:"Myanmar",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Chad",by:"Chad",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Vietnam",by:"Vietnam",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Poland",by:"Poland",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Cambodia",by:"Cambodia",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Laos",by:"Laos",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Malaysia",by:"Malaysia",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Kenya",by:"Kenya",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Uganda",by:"Uganda",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Zambia",by:"Zambia",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Malawi",by:"Malawi",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Namibia",by:"Namibia",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"United Republic of Tanzania",by:"United Republic of Tanzania",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Malawi",by:"Malawi",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Zimbabwe",by:"Zimbabwe",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Botswana",by:"Botswana",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Mauritania",by:"Mauritania",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Niger",by:"Niger",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Mali",by:"Mali",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Finland",by:"Finland",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Lithuania",by:"Lithuania",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Latvia",by:"Latvia",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Estonia",by:"Estonia",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Ukraine",by:"Ukraine",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Hungary",by:"Hungary",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Slovakia",by:"Slovakia",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Czech Republic",by:"Czech Republic",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Croatia",by:"Croatia",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Slovenia",by:"Slovenia",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Albania",by:"Slovenia",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Macedonia",by:"Slovenia",amount:85,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"Kosovo",by:"Slovenia",amount:85,score:[2,0,1,0,0],status:"Minor Country"},

                                      ]
                }
          ]
  var scenarioIterator = 0;

function buildCountryData(d){
    let country = countryData.find(x=>x.properties.admin == d.owned);
    country.properties.influencer = d.by;
    country.properties.Independence = d.amount;
    country.properties.status = d.status;
    if (d.color === undefined || d.by != d.owned){
       country.properties.color = color[d.by];
    } else {
        country.properties.color = d.color;
    }
    country.properties.flag = (d.by == d.owned)? flag[d.by]:'';
    (d.score!==undefined)?country.properties.score = d.score : country.properties.score = [0,0,0,0,0];
}

function updateScenarioData(country){
  if (country.properties.influencer != country.properties.admin){
     country.properties.color = scenarioData.countries.find(x=>x.owned==country.properties.admin).color;
  }
  console.log(country);
  console.log(  scenarioData.countries.find(x=>x.owned==country.properties.influencer));
  console.log(country.properties.influencer);
  if (country.properties.influencer != country.properties.admin){
    let myInfluencer = scenarioData.countries.find(x=>x.owned==country.properties.influencer);
    country.properties.flag = flag[country.properties.influencer];
    country.properties.color = color[country.properties.influencer];
  }
}

var scenarioData = scenarios[scenarioIterator];
scenarioData.countries.forEach(x=>{buildCountryData(x)});

function nextScenario(){
    scenarioIterator++;
    if ( scenarioIterator>scenarios.length-1){scenarioIterator=0;}
    loadScenario();
}


function previousScenario(){
    scenarioIterator--;
    if (scenarioIterator<0){scenarioIterator = scenarios.length - 1}
    loadScenario();
}
function loadScenario(){
  scenarioData = scenarios[scenarioIterator];
  scenarioData.countries.forEach(x=>{buildCountryData(x)});
  resetMap();
  mainMenu();
  mainMenu();

  time = 0;
  document.getElementsByClassName("centerYear")[0].innerHTML=`
      <div class="year" style="min-width:45vw">
      </div>
      <div class="year">
        ${scenarios[scenarioIterator].year}
      </div>
      <div class="year">
        ${scenarios[scenarioIterator].year+1}
      </div>
      <div class="year">
        ${scenarios[scenarioIterator].year+2}
      </div>
      <div class="year">
        ${scenarios[scenarioIterator].year+3}
      </div>
      <div class="year">
        ${scenarios[scenarioIterator].year+4}
      </div>
      <div class="year">
        ${scenarios[scenarioIterator].year+5}
      </div>`
}



function mainMenu(){
  let main = document.getElementById("mainMenu");
  if (main !== null ){
    main.remove();
  } else {
    let main = document.getElementsByClassName("overlayMenu");
    if (main[0] !== undefined ){main[0].remove();}
    let countrySelectDiv = "";
    let firstCountryHtml = "";
  var majorPowers = [];
    if ( scenarios[scenarioIterator].era == "The Great Game"){
      let majorPowerImages = '';
          majorPowers = scenarios[scenarioIterator].countries.filter(x=>x.status=="Great Power");
          majorPowers.forEach(x=>{majorPowerImages+=`<img onclick="selectCountry('${x.owned}')" src="img/flag/${flag[x.owned]}" style="height:2.5em;padding-right:.5em">`})
      let secondaryPowerImages = '';
      let secondaryPowers = scenarios[scenarioIterator].countries.filter(x=>x.status=="Secondary Power");
          secondaryPowers.forEach(x=>{secondaryPowerImages+=`<img onclick="selectCountry('${x.owned}')" src="img/flag/${flag[x.owned]}" style="height:2.5em;padding-right:.5em">`});
      countrySelectDiv = `
        <div style="width:90%;border:1px solid black;padding:1em 5% 1em 5%;margin:.5em 0 .5em 0;display:inline-flex;justify-content:space-between;">
          <div style="width:58%">
            <h3>Choose a Power</h3>
            <br>
              <div  style="width:100%;display:inline-flex;align-items:center">
                <img src="img/icons/star-fill.svg" style="height:3em;padding:0 1em 0 1em">
                <img src="img/icons/globe2.svg" style="height:3em;padding:0 1em 0 1em">
                ${majorPowerImages}
              </div>
              <div  style="width:100%;display:inline-flex;align-items:center">
                <img src="img/icons/star.svg"  style="height:3em;padding:0 1em 0 1em">
                <img src="img/icons/list-stars.svg" style="height:3em;padding:0 1em 0 1em">
                ${secondaryPowerImages}
              </div>
           </div>
           <div id="choosePolicyDeck">
           </div>
        </div>`;
      firstCountryHtml = `
          <div style="width:90%;border:1px solid black;padding:1em 5% 1em 5%;margin:.5em 0 .5em 0;display:inline-flex;justify-content:space-between;">
            <div style="width:58%">

              <h3>${majorPowers[0].owned}</h3>
              <p>${majorPowers[0].desc}</p>
            </div>
              <div>
                 <div style="width:100%">
                     <button class="scenarioButton" style="width:8em;" onclick="beginGame()">Begin</button>
                 </div>
              </div>
          </div>


          `
  }


  document.getElementsByClassName("menu")[0].insertAdjacentHTML("afterend", `
      <div id="mainMenu" class="overlayMenu background" style="padding:1em;max-width:60em;">
        <h1 style="width:100%;display:inline-flex;align-items:center;justify-content:space-between;">
            <button class="scenarioSwitchButton" onclick="previousScenario()"><</button>
            ${scenarios[scenarioIterator].title}
            <button class="scenarioSwitchButton"  onclick="nextScenario()">></button>
        </h1>
        <div style="width:90%;border:1px solid black;padding:1em 5% 1em 5%;margin:.5em 0 .5em 0;">
              <h3 style="width:100%;display:inline-flex;justify-content:space-between;">
                  <div>
                    ${scenarios[scenarioIterator].type}: ${scenarios[scenarioIterator].length} Minutes <img src="img/icons/clock.svg">
                  </div>
                  <div>
                    Era: ${scenarios[scenarioIterator].era} <img src="${stats[scenarios[scenarioIterator].era].img}">
                  </div>
                  <div>
                    ${scenarios[scenarioIterator].year} - ${scenarios[scenarioIterator].endYear}
                  </div>
              </h3>
              <br><br>
              <p>${scenarios[scenarioIterator].text}</p><br>

        </div>
          ${countrySelectDiv}
        <div id="mySelectedCountry">
          ${firstCountryHtml}
        </div>
      </div>
  `);
  selectPolicyDeck(0);
}}

var myCountry = "United Kingdom";

function selectCountry(country){
    myCountry = country;
    document.getElementById("mySelectedCountry").innerHTML = `
        <div style="width:90%;border:1px solid black;padding:1em 5% 1em 5%;margin:.5em 0 .5em 0;display:inline-flex;justify-content:space-between;">
          <div style="width:58%">

            <h3>${country}</h3>
            <p>Description goes here</p>
          </div>
            <div>
               <div style="width:100%">
                   <button class="scenarioButton" style="width:8em;" onclick="beginGame()">Begin</button>
               </div>
            </div>
        </div>
        `;

}

var currentPolicyDeck = 0;

function selectPolicyDeck(deckNum){
   currentPolicyDeck = deckNum;
   let nextDeck = Number(deckNum) + 1;
   let previousDeck = Number(deckNum) - 1;
   if ( nextDeck > scenarios[scenarioIterator].policyDecks.length - 1 ) {nextDeck = 0;}
   if ( previousDeck < 0 ) {previousDeck = scenarios[scenarioIterator].policyDecks.length - 1;}
   document.getElementById("choosePolicyDeck").innerHTML = `

         <h3>Choose a Policy Deck</h3>
         <div style="width:100%;vertical-align:top;display:inline-flex;">
             <button class="scenarioButton" onclick="selectPolicyDeck('${previousDeck}')"><</button>
             <button class="scenarioButton">
                 ${scenarios[scenarioIterator].policyDecks[currentPolicyDeck].title}
               <br><br>
               <img src="img/icons/sunrise.svg">
               <br><br>
               <img src="img/icons/lightning.svg">
               <img src="img/icons/star-fill.svg">
             </button>
             <button class="scenarioButton" onclick="selectPolicyDeck('${nextDeck}')">></button>
         </div>
     `
}
