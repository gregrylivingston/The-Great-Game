
//conquerings By year /// should probably include which player you can choose.... or something.
//score - people, gov, science&Industry, military, navy

const color = {
  green1:"#219653",
  green2:"OliveDrab",
  green3:"#32B7C0",
  blue1:"#2F80ED",
  blue2:"#56CCF2",
  blue3:"MidnightBlue",
  red:"#EB5757",
  red2:"#ED2387",
  orange:"#F2994A",
  yellow:"#F2C94C",
  purple1:"#9B51E0",
  purple2:"#BB6BD9",
  grey:"rgb(100,100,100)"
}


var scenarios = [
                {
                    "year":1900,
                    "title":"The Victorian Age",
                    "text":`The Twentieth Century has dawned and it is sure to bring more marvelous changes.
                            Urbanization is transforming the capacities of people, the government and industry.
                            Slavery has been forced into the shadows.
                            The world continues to undergo rapid growth in productivity, profit, and prosperity -
                            but the spoils are not to be distributed fairly.  Players will get what they negotiate for,
                            not what they deserve.
                    `,
                    "countries":[
                    //other influencers
                          {owned:"Portugal",by:"Portugal",amount:100,score:[2,2,1,1,1],status:"Minor Country",flag:"pt.png"},
                          {owned:"Mozambique",by:"Portugal",amount:-50,score:[1,0,0,0,0],status:"Minor Country",flag:"pt.png"},
                          {owned:"Angola",by:"Portugal",amount:-50,score:[1,0,0,0,0],status:"Minor Country",flag:"pt.png"},
                          {owned:"East Timor",by:"Portugal",amount:-50,score:[0,0,0,0,0],status:"Minor Country",flag:"pt.png"},
                          {owned:"Guinea Bissau",by:"Portugal",amount:-50,score:[1,0,0,0,0],status:"Minor Country",flag:"pt.png"},
                          {owned:"Belgium",by:"Belgium",score:[2,2,2,2,1],amount:100,status:"Minor Country",flag:"be.png"},
                          {owned:"Democratic Republic of the Congo",by:"Belgium",score:[1,0,0,0,0],amount:-55,status:"Minor Country"},
                          {owned:"Denmark",by:"Denmark",score:[2,2,1,1,1],amount:100,status:"Minor Country",flag:"dk.png"},
                          {owned:"Iceland",by:"Denmark",score:[1,0,0,0,0],amount:-70,status:"Minor Country"},
                          {owned:"Greenland",by:"Denmark",score:[0,0,0,0,0],amount:-60,status:"Minor Country"},
                          {owned:"Netherlands",by:"Netherlands",score:[2,2,2,2,1],amount:100,status:"Minor Country",flag:"nl.png"},
                          {owned:"Indonesia",by:"Netherlands",score:[2,0,0,0,0],amount:-60,status:"Minor Country"},
                          {owned:"Suriname",by:"Netherlands",score:[1,0,0,0,0],amount:-60,status:"Minor Country"},
                          {owned:"China",by:"China",score:[3,2,2,3,1],amount:100,status:"Minor Country",flag:"ch.png"},
                          {owned:"Mongolia",by:"China",score:[1,0,0,1,0],amount:-50,status:"Minor Country",flag:"ch.png"},


                    //secondary powers
                          {owned:"Turkey",by:"Turkey",amount:88,score:[2,3,2,5,3],status:"Secondary Power",flag:"tr.png",color:color.blue2},
                          {owned:"Japan",by:"Japan",amount:100,score:[2,3,2,5,3],status:"Secondary Power",flag:"jp.png",color:color.orange},
                          {owned:"Austria",by:"Austria",amount:90,score:[4,3,3,4,2],status:"Secondary Power",flag:"at.png",color:color.green3},
                          {owned:"Italy",by:"Italy",amount:86,score:[4,3,3,4,2],status:"Secondary Power",flag:"it.png",color:color.green1},


                          {owned:"Macedonia",by:"Turkey",amount:-50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                          {owned:"Albania",by:"Turkey",amount:-50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                          {owned:"Kosovo",by:"Turkey",amount:-50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                          {owned:"Greece",by:"Turkey",amount:-15,score:[1,1,0,0,0],status:"Minor Country",flag:"tr.png"},
                          {owned:"Jordan",by:"Turkey",amount:-50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                          {owned:"Libya",by:"Turkey",amount:-55,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Kuwait",by:"Turkey",amount:-75,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Syria",by:"Turkey",amount:-50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                          {owned:"Iraq",by:"Turkey",amount:-50,score:[1,1,0,0,0],status:"Minor Country",flag:"tr.png"},
                          {owned:"Eritrea",by:"Italy",amount:-50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                          {owned:"Somalia",by:"Italy",amount:-50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                          {owned:"South Korea",by:"Japan",amount:-80,score:[2,0,1,0,0],status:"Minor Country"},
                          {owned:"North Korea",by:"Japan",amount:-50,score:[1,1,1,0,0],status:"Minor Country"},
                          {owned:"Taiwan",by:"Japan",amount:-60,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Hungary",by:"Austria",amount:-86,status:"Minor Country",score:[1,1,1,1,0]},
                          {owned:"Slovakia",by:"Austria",amount:-57,status:"Minor Country",score:[1,0,1,0,0]},
                          {owned:"Croatia",by:"Austria",amount:-58,status:"Minor Country",score:[1,1,0,1,0]},
                          {owned:"Czech Republic",by:"Austria",amount:-72,status:"Minor Country",score:[1,1,2,1,0]},
                          {owned:"Slovenia",by:"Austria",amount:-78,status:"Minor Country",score:[1,0,0,1,0]},


                    //great powers
                          {owned:"United Kingdom",by:"United Kingdom",amount:100,score:[6,8,6,2,8],status:"Great Power",flag:"gb.png",color:color.purple1},
                          {owned:"United States of America",by:"United States of America",amount:99,score:[8,4,8,1,2],status:"Great Power",flag:"us.png",color:color.blue1},
                          {owned:"Germany",by:"Germany",amount:99,score:[5,8,7,8,3],status:"Great Power",flag:"de.png",color:color.yellow},
                          {owned:"Russia",by:"Russia",amount:92,score:[5,5,5,7,6],status:"Great Power",flag:"ru.png",color:color.red},
                          {owned:"France",by:"France",amount:97,score:[5,7,5,8,4],status:"Great Power",flag:"fr.png",color:color.blue3},

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
                    "year":1914,
                    "title":"Powers Collide",
                    "text":"Tensions between the Great Powers have grown to a boiling point.",
                    "countries":[
                      {owned:"United Kingdom",by:"United Kingdom",amount:100,score:[6,8,6,2,8],status:"Great Power",flag:"gb.png"},
                      {owned:"United States of America",by:"United States of America",amount:100,score:[48,4,8,1,2],status:"Great Power",flag:"us.png"},
                      {owned:"Germany",by:"Germany",amount:100,score:[5,8,7,8,3],status:"Great Power",flag:"de.png"},
                      {owned:"Russia",by:"Russia",amount:100,score:[5,5,5,7,6],status:"Great Power",flag:"ru.png"},
                      {owned:"France",by:"France",amount:100,score:[5,7,5,8,4],status:"Great Power",flag:"fr.png"},

                                      ]
                },
                {
                    "year":1925,
                    "title":"A New World Order",
                    "text":"With the war behind us, prosperity is returning to the world.",
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
                    "title":"World At War",
                    "text":"Hopes for a lasting peace have been dashed.",
                    "countries":[
                      {owned:"United Kingdom",by:"United Kingdom",amount:100,score:[6,8,6,2,8],status:"Great Power",flag:"gb.png"},
                      {owned:"United States of America",by:"United States of America",amount:100,score:[48,4,8,1,2],status:"Great Power",flag:"us.png"},
                      {owned:"Germany",by:"Germany",amount:100,score:[5,8,7,8,3],status:"Great Power",flag:"de.png"},
                      {owned:"Russia",by:"Russia",amount:100,score:[5,5,5,7,6],status:"Great Power",flag:"ru.png"},
                      {owned:"France",by:"France",amount:100,score:[5,7,5,8,4],status:"Great Power",flag:"fr.png"},

                                      ]
                },
                {
                    "year":1950,
                    "title":"The Cold War",
                    "text":`The next great war is over but the danger has never been greater.   From the dust and ashes,
                        two mighty factions have arisen.  The leading nations of the factions, the United States of America
                        and the Union of Socialist Soviet Republics, have accumulated vast amounts of influence, technology,
                        industry, and control through the conquest of their rivals.  Wielding modern wonders of technology, organization, and Industry,
                        the Super Powers of the 21st Century had powers that were unimaginable even a few decades prior.
                    `,
                    "countries":[
                      {owned:"United Kingdom",by:"United Kingdom",amount:100,score:[46,58,46,22,48],status:"Secondary Power",flag:"gb.png",color:color.purple1},
                      {owned:"United States of America",by:"United States of America",amount:100,score:[100,100,100,102,102],status:"Great Power",flag:"us.png",color:color.blue1},
                      {owned:"Germany",by:"United States of America",amount:-80,score:[55,58,57,48,18],status:"Minor Country",flag:"de.png",color:color.yellow},
                      {owned:"Russia",by:"Russia",amount:100,score:[32,40,39,55,32],status:"Great Power",flag:"ru.png",color:color.red},
                      {owned:"China",by:"China",amount:20,score:[45,70,62,45,22],status:"Secondary Power",flag:"cn.png",color:color.red2},
                      {owned:"Turkey",by:"Turkey",amount:20,score:[15,12,10,11,6],status:"Minor Country",flag:"tr.png",color:color.blue2},
                      {owned:"Japan",by:"United States of America",amount:-70,score:[20,24,27,12,11],status:"Minor Country",flag:"jp.png",color:color.orange},
                      {owned:"Austria",by:"United States of America",amount:-60,score:[11,4,6,2,0],status:"Minor Country",flag:"at.png",color:color.green3},
                      {owned:"Italy",by:"United States of America",amount:-90,score:[19,12,13,9,7],status:"Minor Country",flag:"it.png",color:color.green1},
                      {owned:"India",by:"United Kingdom",amount:-57,score:[28,20,24,26,14],status:"Minor Country",flag:"in.png",color:color.green2},
                      {owned:"France",by:"United States of America",amount:-5,score:[40,50,44,35,27],status:"Minor Country",flag:"fr.png",color:color.blue3},

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
                    "year":1991,
                    "title":"Pax Americana",
                    "text":`The Cold War is won.  With the implosion of the Soviet Union and the accompanying loss of incluence around the world,
                        the Americans are the lone remaining superpower with a globe spanning sphere of bases, agents, diplomats and allies.
                        <br><br><h4>Welcome to the American Age</h4>.`,
                    "countries":[
                      {owned:"Belgium",by:"United States of America",score:[2,2,2,2,1],amount:-80,status:"Minor Country",flag:"be.png",color:color.blue2},

                      {owned:"United Kingdom",by:"Belgium",amount:-51,score:[46,58,46,22,48],status:"Minor Country",flag:"gb.png",color:color.purple1},
                      {owned:"United States of America",by:"United States of America",amount:100,score:[100,100,100,102,102],status:"Great Power",flag:"us.png",color:color.blue1},
                      {owned:"Germany",by:"Belgium",amount:-62,score:[55,58,57,48,18],status:"Secondary Power",flag:"de.png",color:color.yellow},
                      {owned:"Russia",by:"Russia",amount:100,score:[32,40,39,55,32],status:"Secondary Power",flag:"ru.png",color:color.red},
                      {owned:"China",by:"China",amount:100,score:[45,70,62,45,22],status:"Secondary Power",flag:"cn.png",color:color.red2},
                      {owned:"Turkey",by:"Turkey",amount:-51,score:[15,12,10,11,6],status:"Minor Country",flag:"tr.png",color:'yellow'},
                      {owned:"Japan",by:"Japan",amount:100,score:[20,24,27,12,11],status:"Minor Country",flag:"jp.png",color:color.orange},
                      {owned:"Austria",by:"Austria",amount:10,score:[11,4,6,2,0],status:"Minor Country",flag:"at.png",color:color.green3},
                      {owned:"Italy",by:"Belgium",amount:-55,score:[19,12,13,9,7],status:"Minor Country",flag:"it.png",color:color.green1},
                      {owned:"India",by:"India",amount:97,score:[28,20,24,26,14],status:"Secondary Power",flag:"in.png",color:color.green2},
                      {owned:"France",by:"Belgium",amount:-62,score:[40,50,44,35,27],status:"Minor Country",flag:"fr.png",color:color.blue3},
                      {owned:"Spain",by:"Belgium",amount:-62,score:[40,50,44,35,27],status:"Minor Country",flag:"fr.png",color:color.blue3},
                      {owned:"Netherlands",by:"Belgium",amount:-62,score:[40,50,44,35,27],status:"Minor Country",flag:"fr.png",color:color.blue3},
                      {owned:"Denmark",by:"Belgium",amount:-62,score:[40,50,44,35,27],status:"Minor Country",flag:"fr.png",color:color.blue3},
                      {owned:"Ireland",by:"Belgium",amount:-62,score:[40,50,44,35,27],status:"Minor Country",flag:"fr.png",color:color.blue3},
                      {owned:"Portugal",by:"Belgium",amount:-62,score:[40,50,44,35,27],status:"Minor Country",flag:"fr.png",color:color.blue3},
                      {owned:"Greece",by:"Belgium",amount:-62,score:[40,50,44,35,27],status:"Minor Country",flag:"fr.png",color:color.blue3},

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

                                      ]
                }
          ]
  var scenarioIterator = 0;

  function buildCountryData(d){
    let country = countryData.find(x=>x.properties.admin == d.owned);
    country.properties.influencer = d.by;
    country.properties.Independence = d.amount;
    country.properties.status = d.status;
    (d.color === undefined || d.by != d.owned)? country.properties.color = scenarioData.countries.find(x=>x.owned==d.by).color:
        country.properties.color = d.color;
    country.properties.flag = (d.by == d.owned)? d.flag: scenarioData.countries.find(x=>x.owned==d.by).flag;
    (d.score!==undefined)?country.properties.score = d.score : country.properties.score = [0,0,0,0,0];
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
