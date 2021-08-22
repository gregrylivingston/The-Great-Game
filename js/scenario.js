
//conquerings By year /// should probably include which player you can choose.... or something.
//score - people, gov, science&Industry, military, navy

const color = {
  "Italy":"#5c7a1e",
  "ItalyAlly":"#6b8e23",
  "ItalyFriend":"#7aa228",
  "ItalySphere":"#e4ecd4",
  "India":"#5c7a1e",
  "IndiaAlly":"#6b8e23",
  "IndiaFriend":"#7aa228",
  "IndiaSphere":"#e4ecd4",
  "Austria":"#2da4ac",
  "AustriaAlly":"#32B7C0",
  "AustriaFriend":"#3fc4cd",
  "AustriaSphere":"#c0e3e6",
  "United States of America":"#1872eb",
  "United States of AmericaAlly":"#2F80ED",
  "United States of AmericaFriend":"#468eef",
  "United States of AmericaSphere":"#b9d4f9",
  "Turkey":"#3ec5f0",
  "TurkeyAlly":"#56CCF2",
  "TurkeyFriend":"#6ed3f4",
  "TurkeySphere":"#c5edfa",
  "France":"#22229a",
  "FranceAlly":"#2727af",
  "FranceFriend":"#2c2cc4",
  "FranceSphere":"#bebee7",
  "Russia":"#e62929",
  "RussiaAlly":"#e84040",
  "RussiaFriend":"#EB5757",
  "RussiaSphere":"#f8c5c5",

  "Republic of Serbia":"#e4137a",
  "Republic of SerbiaAlly":"#ED2387",
  "Republic of SerbiaFriend":"#ef3b94",
  "Japan":"#f08c32",
  "JapanAlly":"#F2994A",
  "JapanFriend":"#f4a662",
  "Germany":"#f0c234",
  "GermanyAlly":"#F2C94C",
  "GermanyFriend":"#f4d064",
  "United Kingdom":"#8f3bdc",
  "United KingdomAlly":"#9B51E0",
  "United KingdomFriend":"#a767e4",
  "China":"#bb6bd9",
  "ChinaAlly":"#c47fde",
  "ChinaFriend":"#ce94e3",
  "grey":"rgb(100,100,100)",
  "Belgium":"#56CCF2",
  "BelgiumAlly":"#56CCF2",
  "BelgiumFriend":"#56CCF2",

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


var scenarios = [
                {
                    "year":1900,
                    "endYear":1950,
                    "length":120,
                    "era":"The Great Game",
                    "type":"Campaign",
                    "title":"The Great Game",
                    "defaultDeck":"Nationhood",
                    "text":`The Twentieth Century has dawned and it is sure to bring more marvelous changes.
                            Urbanization is transforming the capacities of people, the government and industry.
                            Slavery has been forced into the shadows.
                            The world continues to undergo rapid growth in productivity, profit, and prosperity -
                            but the spoils are not to be distributed fairly.  Players will get what they negotiate for,
                            not what they deserve.
                    `,
                    "countries":[
                    //other influencers
                          {owned:"Portugal",by:"Portugal",amount:100,score:[2,2,1,1,1]},
                          {owned:"Mozambique",by:"Portugal",amount:-50,score:[1,0,0,0,0]},
                          {owned:"Angola",by:"Portugal",amount:-50,score:[1,0,0,0,0]},
                          {owned:"East Timor",by:"Portugal",amount:-50,score:[0,0,0,0,0]},
                          {owned:"Guinea Bissau",by:"Portugal",amount:-50,score:[1,0,0,0,0]},
                          {owned:"Belgium",by:"France",score:[2,2,2,2,1],amount:-10},
                          {owned:"Democratic Republic of the Congo",by:"Belgium",score:[1,0,0,0,0],amount:-55},
                          {owned:"Denmark",by:"Denmark",score:[2,2,1,1,1],amount:100},
                          {owned:"Iceland",by:"Denmark",score:[1,0,0,0,0],amount:-70},
                          {owned:"Greenland",by:"Denmark",score:[0,0,0,0,0],amount:-60},
                          {owned:"Netherlands",by:"Netherlands",score:[2,2,2,2,1],amount:100},
                          {owned:"Indonesia",by:"Netherlands",score:[2,0,1,0,0],amount:-60},
                          {owned:"Suriname",by:"Netherlands",score:[1,0,0,0,0],amount:-60},
                          {owned:"China",by:"China",score:[3,2,2,3,1],amount:100},
                          {owned:"Mongolia",by:"China",score:[1,0,0,1,0],amount:-50},
                          {owned:"Spain",by:"Spain",amount:100,score:[2,2,2,2,2]},
                          {owned:"Equatorial Guinea",by:"Spain",amount:-30,score:[0,0,0,0,1]},
                          {owned:"Brazil",by:"Brazil",amount:65,score:[0,0,0,0,1]},
                          {owned:"Bolivia",by:"Brazil",amount:-20,score:[0,0,0,0,1]},
                          {owned:"Paraguay",by:"Brazil",amount:-20,score:[0,0,0,0,1]},
                          {owned:"Uruguay",by:"Brazil",amount:-20,score:[0,0,0,0,1]},

                          //secondary powers
                          {owned:"Austria",by:"Austria",amount:90,score:[4,3,3,4,2],status:"Secondary Power",
                              desc:``,decks:['Divine Empire','International Order','Defender of the Faith']},
                          {owned:"Turkey",by:"Turkey",amount:88,score:[2,3,2,5,2],status:"Secondary Power",
                              desc:`For 400 years we have rules from Istanbul, the greatest city on Earth.
                              Our institutions are old and our vassels innumerable.  Muslims around the World
                              look to us to protect them, the holy cities, and the ancient Hajj.  Nonetheless
                              the Western Powers have come to overshadow our splendor.  We must rely on their
                              technologies, capital, and culture to overcome the burdens of time without
                              selling out our sovereignty or upsetting our divine right to rule.
                              `,decks:['Defender of the Faith','Divine Empire','Nationhood']},
                          {owned:"Japan",by:"Japan",amount:100,score:[2,3,3,5,4],status:"Secondary Power",
                              desc:``,decks:['Nationhood','Divine Empire']},
                          {owned:"Italy",by:"Italy",amount:86,score:[4,3,3,4,2],status:"Secondary Power",
                              desc:``,decks:['Colonialism','Nationhood']},

                          {owned:"Montenegro",by:"Republic of Serbia",amount:-15,score:[1,0,0,0,0]},
                          {owned:"Macedonia",by:"Turkey",amount:-77,score:[0,0,0,1,0]},
                          {owned:"Albania",by:"Turkey",amount:-52,score:[1,0,0,1,1],},
                          {owned:"Kosovo",by:"Turkey",amount:-50,score:[0,0,0,1,0],},
                          {owned:"Jordan",by:"Turkey",amount:-82,score:[0,0,0,1,0],},
                          {owned:"Libya",by:"Turkey",amount:-55,score:[0,0,1,1,0]},
                          {owned:"Syria",by:"Turkey",amount:-75,score:[1,0,1,1,0],},
                          {owned:"Iraq",by:"Turkey",amount:-90,score:[1,1,2,2,0],},
                          {owned:"Lebanon",by:"Turkey",amount:-80,score:[1,0,1,0,1],},
                          {owned:"Israel",by:"Turkey",amount:-60,score:[1,0,1,0,0],},
                          {owned:"Palestine",by:"Turkey",amount:-50,score:[0,0,0,1,0],},
                          {owned:"Armenia",by:"Turkey",amount:-75,score:[1,0,0,0,0],},
                          {owned:"Yemen",by:"Turkey",amount:-30,score:[1,1,1,0,1]},

                          {owned:"Eritrea",by:"Italy",amount:-77,score:[1,0,1,0,1],},
                          {owned:"Somalia",by:"Italy",amount:-77,score:[1,0,1,0,1],},
                          {owned:"South Korea",by:"Japan",amount:-95,score:[2,0,1,1,2]},
                          {owned:"North Korea",by:"Japan",amount:-75,score:[1,1,2,1,0]},
                          {owned:"Taiwan",by:"Japan",amount:-75,score:[1,0,1,0,1]},
                          {owned:"Hungary",by:"Austria",amount:-92,score:[1,2,1,2,0]},
                          {owned:"Slovakia",by:"Austria",amount:-75,score:[1,0,1,1,0]},
                          {owned:"Croatia",by:"Austria",amount:-82,score:[1,1,1,1,2]},
                          {owned:"Czech Republic",by:"Austria",amount:-84,score:[2,1,2,1,0]},
                          {owned:"Slovenia",by:"Austria",amount:-78,score:[1,0,1,1,0]},
                          {owned:"Bulgaria",by:"Austria",amount:-28,score:[1,1,1,2,0]},

                    //great powers
                          {owned:"United Kingdom",by:"United Kingdom",amount:100,score:[6,8,6,5,8],status:"Great Power",
                              desc:`The sun never sets on the British Empire.  Our allies and friends span the globe,
                              supported by an expansive network of agents and institutions.  Our sprawling factories
                              consume vast quantities of raw materials arriving everday from every continent on massive ships.
                              Our powerful navy ensures our influence will span the globe for generations to come.
                              `,decks:['Colonialism','International Order','Divine Empire']},
                          {owned:"United States of America",by:"United States of America",amount:99,score:[12,6,12,3,4],status:"Great Power",
                              desc:`The American destiny has manifest and our powerful country stretches from sea to sea.
                              For generations we have looked first inward.  Now masters of our own domain, who could pose us any threat.
                              `,decks:['Isolationism','International Order','Nationhood']},
                          {owned:"Germany",by:"Germany",amount:99,score:[6,8,9,7,2],status:"Great Power",
                              desc:`In living memory the German Empire was born of cunning politics and national fervor.
                              Our industry and armies are mighty.
                              We have joined the ranks of the Great Powers and rightfully earned our place at the head
                              of the international conference.  Beware the powers surrounding us - the conspire to surround us,
                              to separate us from our friends and allies, and to undermine our place in the sun.
                              `,decks:['Divine Empire','International Order','Colonialism','Nationhood']},
                          {owned:"France",by:"France",amount:97,score:[7,9,6,8,7],status:"Great Power",
                              desc:`The indomitable spirit of the French and our intense passion for our nation
                              has kept us strong despite the best efforts of the other powers to thrawt our progress.
                              Our influence stretches across vast oceans and in every type of human endeavor
                              the whole world calls out to recognize us as leaders.
                              `,decks:['International Order','Colonialism','Divine Empire']},
                          {owned:"Russia",by:"Russia",amount:92,score:[4,4,4,8,6],status:"Great Power",
                              desc:`For generations our family has sat at the head table among the great powers.
                              Our empire is truly vast and are our capacities are many but we must make sure to not overstep our bounds.
                              Enemies and allies alike eagerly scheme to take away what is rightfully ours.
                              `,decks:['Defender of the Faith','Divine Empire','Nationhood']},



                          {owned:"Philippines",by:"United States of America",amount:-52,score:[1,0,1,0,2]},
                          {owned:"Puerto Rico",by:"United States of America",amount:-58,score:[1,0,1,0,1]},
                          {owned:"Cuba",by:"United States of America",amount:-55,score:[1,0,1,0,1]},
                          {owned:"Dominican Republic",by:"United States of America",amount:-20,score:[0,0,1,0,1]},
                          {owned:"Honduras",by:"United States of America",amount:-35,score:[0,0,1,0,0]},
                          {owned:"El Salvador",by:"United States of America",amount:-28,score:[0,0,1,1,0]},
                          {owned:"Nicaragua",by:"United States of America",amount:-30,score:[0,1,1,0,0]},
                          {owned:"Costa Rica",by:"United States of America",amount:-25,score:[1,0,1,0,0]},
                          {owned:"Liberia",by:"United States of America",amount:-35,score:[0,0,0,0,0]},


                          {owned:"Poland",by:"Germany",amount:-100,score:[4,7,3,8,2]},
                          {owned:"Cameroon",by:"Germany",amount:-75,score:[1,0,1,0,1]},
                          {owned:"Namibia",by:"Germany",amount:-75,score:[1,0,1,0,0]},
                          {owned:"United Republic of Tanzania",by:"Germany",amount:-55,score:[0,0,1,1,1]},
                          {owned:"Papua New Guinea",by:"Germany",amount:-55,score:[1,0,0,0,1]},
                          {owned:"Togo",by:"Germany",amount:-75,score:[0,0,0,0,1]},
                          {owned:"Rwanda",by:"Germany",amount:-45,score:[0,0,0,0,0]},
                          {owned:"Burundi",by:"Germany",amount:-55,score:[0,0,0,0,0]},

                          {owned:"Belarus",by:"Russia",amount:-96,score:[1,0,1,1,0]},
                          {owned:"Ukraine",by:"Russia",amount:-82,score:[2,1,2,2,1]},
                          {owned:"Lithuania",by:"Russia",amount:-75,score:[1,1,1,0,1]},
                          {owned:"Estonia",by:"Russia",amount:-79,score:[1,1,1,0,0]},
                          {owned:"Latvia",by:"Russia",amount:-82,score:[1,0,1,0,0]},
                          {owned:"Georgia",by:"Russia",amount:-82,score:[1,0,0,1,0],},
                          {owned:"Azerbaijan",by:"Russia",amount:-82,score:[1,0,1,1,0],},
                          {owned:"Kazakhstan",by:"Russia",amount:-75,score:[0,0,1,1,0],},
                          {owned:"Uzbekistan",by:"Russia",amount:-75,score:[0,0,0,0,0],},
                          {owned:"Turkmenistan",by:"Russia",amount:-81,score:[0,0,0,0,0],},
                          {owned:"Kyrgyzstan",by:"Russia",amount:-82,score:[0,0,0,0,0],},
                          {owned:"Tajikistan",by:"Russia",amount:-81,score:[0,0,0,0,0],},
                          {owned:"Finland",by:"Russia",amount:-75,score:[1,1,1,2,0],},
                          {owned:"Moldova",by:"Russia",amount:-75,score:[0,0,1,0,0],},
                          {owned:"Republic of Serbia",by:"Russia",amount:-25,score:[1,1,1,2,0]},

                          {owned:"Canada",by:"United Kingdom",amount:-88,score:[1,1,1,1,1]},
                          {owned:"Australia",by:"United Kingdom",amount:-92,score:[0,1,1,1,1]},
                          {owned:"India",by:"United Kingdom",amount:-52,score:[2,1,2,2,1]},
                          {owned:"South Africa",by:"United Kingdom",amount:-85,score:[1,1,1,1,1]},
                          {owned:"New Zealand",by:"United Kingdom",amount:-94,score:[1,0,0,0,1]},
                          {owned:"Kenya",by:"United Kingdom",amount:-52,score:[1,0,1,1,0]},
                          {owned:"Jamaica",by:"United Kingdom",amount:-84,score:[0,0,0,0,0]},
                          {owned:"Ireland",by:"United Kingdom",amount:-81,score:[1,0,1,0,1]},
                          {owned:"Egypt",by:"United Kingdom",amount:-32,score:[1,0,1,0,3]},
                          {owned:"Sudan",by:"United Kingdom",amount:-29,score:[0,0,0,0,0]},
                          {owned:"South Sudan",by:"United Kingdom",amount:-22,score:[0,0,0,0,0]},
                          {owned:"The Bahamas",by:"United Kingdom",amount:-80,score:[0,0,0,0,1]},
                          {owned:"Myanmar",by:"United Kingdom",amount:-57,score:[1,0,0,0,0]},
                          {owned:"Pakistan",by:"United Kingdom",amount:-52,score:[1,0,1,1,0]},
                          {owned:"Bangladesh",by:"United Kingdom",amount:-38,score:[1,0,1,0,0]},
                          {owned:"Cyprus",by:"United Kingdom",amount:-25,score:[0,0,0,0,1]},
                          {owned:"Malaysia",by:"United Kingdom",amount:-65,score:[0,0,1,0,1]},
                          {owned:"Nigeria",by:"United Kingdom",amount:-71,score:[1,0,2,1,0]},
                          {owned:"Zambia",by:"United Kingdom",score:[0,0,1,0,0],amount:-69},
                          {owned:"Zimbabwe",by:"United Kingdom",score:[1,0,0,0,0],amount:-61},
                          {owned:"Botswana",by:"United Kingdom",score:[0,0,0,0,0],amount:-48},
                          {owned:"Uganda",by:"United Kingdom",score:[0,0,0,0,0],amount:-38},
                          {owned:"Somaliland",by:"United Kingdom",score:[1,0,0,0,1],amount:-68},
                          {owned:"Malawi",by:"United Kingdom",score:[0,0,0,0,0],amount:-61},
                          {owned:"Guyana",by:"United Kingdom",score:[1,0,0,0,0],amount:-55},
                          {owned:"Fiji",by:"United Kingdom",score:[0,0,0,0,1],amount:-75},
                          {owned:"Solomon Islands",by:"United Kingdom",score:[0,0,0,0,1],amount:-62},
                          {owned:"Brunei",by:"United Kingdom",score:[0,0,1,1,1],amount:-42},
                          {owned:"Sri Lanka",by:"United Kingdom",score:[1,0,1,0,1],amount:-76},
                          {owned:"Ghana",by:"United Kingdom",score:[1,0,1,0,0],amount:-61},
                          {owned:"Sierra Leone",by:"United Kingdom",score:[1,0,0,0,1],amount:-64},
                          {owned:"Gambia",by:"United Kingdom",score:[1,0,0,0,0],amount:-57},
                          {owned:"Iran",by:"United Kingdom",amount:-10,score:[1,1,1,1,0]},
                          {owned:"Belize",by:"United Kingdom",amount:-82,score:[0,0,0,0,0]},
                          {owned:"Kuwait",by:"United Kingdom",amount:-25,score:[1,0,1,0,0]},
                          {owned:"United Arab Emirates",by:"United Kingdom",amount:-45,score:[0,0,1,0,0]},

                          {owned:"New Caledonia",by:"France",amount:-90,score:[0,0,0,0,1]},
                          {owned:"Republic of Congo",by:"France",amount:-50,score:[1,0,1,0,0]},
                          {owned:"Algeria",by:"France",amount:-92,score:[1,1,1,2,1]},
                          {owned:"Vietnam",by:"France",amount:-55,score:[1,1,2,1,1]},
                          {owned:"Cambodia",by:"France",amount:-35,score:[1,0,1,0,0]},
                          {owned:"Laos",by:"France",amount:-35,score:[0,0,0,0,0]},
                          {owned:"Mauritania",by:"France",amount:-85,score:[0,0,1,0,0]},
                          {owned:"Ivory Coast",by:"France",amount:-85,score:[0,0,1,0,1]},
                          {owned:"Gabon",by:"France",amount:-65,score:[1,0,0,0,0]},
                          {owned:"Tunisia",by:"France",amount:-10,score:[1,1,2,1,2]},
                          {owned:"Niger",by:"France",amount:-75,score:[1,0,1,0,0]},
                          {owned:"Mali",by:"France",amount:-77,score:[0,0,0,0,0]},
                          {owned:"Madagascar",by:"France",amount:-72,score:[1,0,1,0,1]},
                          {owned:"Central African Republic",by:"France",amount:-35,score:[1,0,0,0,0]},
                          {owned:"Chad",by:"France",amount:-82,score:[0,0,0,0,0]},
                          {owned:"Burkina Faso",by:"France",amount:-55,score:[1,0,1,0,0]},
                          {owned:"Senegal",by:"France",amount:-35,score:[1,0,1,0,0]},
                          {owned:"Guinea",by:"France",amount:-55,score:[1,0,1,0,0]},
                          {owned:"Morocco",by:"France",amount:-35,score:[1,1,1,1,1]},
                          {owned:"Romania",by:"France",amount:-5,score:[2,1,2,1,0]},
                          {owned:"Djibouti",by:"France",amount:-67,score:[0,0,1,0,1]},
                          {owned:"Benin",by:"France",amount:-55,score:[0,0,1,0,0]},

                    //independant countries
                          {owned:"Norway",by:"Norway",amount:5,score:[3,3,1,1,1]},
                          {owned:"Sweden",by:"Sweden",amount:5,score:[3,3,1,2,1]},
                          {owned:"Afghanistan",by:"Afghanistan",amount:50,score:[0,0,0,1,0]},
                          {owned:"Bosnia and Herzegovina",by:"Austria",amount:-15,score:[1,0,0,0,0]},

                          {owned:"Bhutan",by:"Bhutan",amount:100,score:[0,0,0,0,0]},
                          {owned:"Nepal",by:"Nepal",amount:100,score:[0,0,0,0,0]},
                          {owned:"Switzerland",by:"Switzerland",amount:100,score:[3,1,2,1,0]},
                          {owned:"Ethiopia",by:"Ethiopia",amount:100,score:[1,1,0,2,0]},
                          {owned:"Thailand",by:"Thailand",amount:100,score:[0,0,1,1,0]},
                          {owned:"Qatar",by:"Qatar",amount:100,score:[0,0,1,0,0]},
                          {owned:"Saudi Arabia",by:"Saudi Arabia",amount:100,score:[0,0,1,0,0]},
                          {owned:"Oman",by:"Oman",amount:60,score:[0,0,1,0,0]},
                          {owned:"Haiti",by:"Haiti",amount:55,score:[0,0,0,0,0]},
                          {owned:"Mexico",by:"Mexico",amount:85,score:[2,1,2,1,0]},
                          {owned:"Guatemala",by:"Guatemala",amount:55,score:[0,0,0,0,0]},
                          {owned:"Venezuela",by:"Venezuela",amount:85,score:[1,1,1,0,0]},
                          {owned:"Colombia",by:"Colombia",amount:75,score:[1,1,1,1,0]},
                          {owned:"Panama",by:"Colombia",amount:-90,score:[0,0,0,0,1]},
                          {owned:"Ecuador",by:"Ecuador",amount:15,score:[0,0,0,0,1]},
                          {owned:"Peru",by:"Peru",amount:25,score:[0,0,0,0,1]},
                          {owned:"Chile",by:"Chile",amount:35,score:[0,0,0,0,1]},
                          {owned:"Argentina",by:"Argentina",amount:55,score:[0,0,0,0,1]},
                          {owned:"Greece",by:"Greece",amount:15,score:[1,1,1,1,0],},
                          {owned:"Luxembourg",by:"Luxembourg",amount:80,score:[1,1,1,1,0],},






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
                    //other influencers
                          {owned:"Portugal",by:"Portugal",amount:100,score:[2,2,1,1,1]},
                          {owned:"Mozambique",by:"Portugal",amount:-50,score:[1,0,0,0,0]},
                          {owned:"Angola",by:"Portugal",amount:-50,score:[1,0,0,0,0]},
                          {owned:"East Timor",by:"Portugal",amount:-50,score:[0,0,0,0,0]},
                          {owned:"Guinea Bissau",by:"Portugal",amount:-50,score:[1,0,0,0,0]},
                          {owned:"Belgium",by:"France",score:[2,2,2,2,1],amount:-20},
                          {owned:"Democratic Republic of the Congo",by:"Belgium",score:[1,0,0,0,0],amount:-55},
                          {owned:"Denmark",by:"Denmark",score:[2,2,1,1,1],amount:100},
                          {owned:"Iceland",by:"Denmark",score:[1,0,0,0,0],amount:-70,decks:['Long Live the King']},
                          {owned:"Greenland",by:"Denmark",score:[0,0,0,0,0],amount:-60},
                          {owned:"Netherlands",by:"Netherlands",score:[2,2,2,2,1],amount:100},
                          {owned:"Indonesia",by:"Netherlands",score:[2,0,0,0,0],amount:-60},
                          {owned:"Suriname",by:"Netherlands",score:[1,0,0,0,0],amount:-60},
                          {owned:"China",by:"China",score:[3,2,2,3,1],amount:100},
                          {owned:"Mongolia",by:"China",score:[1,0,0,1,0],amount:-50},


                    //secondary powers
                          {owned:"Turkey",by:"Turkey",amount:88,score:[2,3,2,5,3],status:"Secondary Power",
                              desc:``,decks:['Divine Empire','Nationhood']},
                          {owned:"Japan",by:"Japan",amount:100,score:[2,3,2,5,3],status:"Secondary Power",
                              desc:``,decks:['Divine Empire','Nationhood']},
                          {owned:"Austria",by:"Austria",amount:90,score:[4,3,3,4,2],status:"Secondary Power",
                              desc:``,decks:['Divine Empire','International Order']},
                          {owned:"Italy",by:"Italy",amount:86,score:[4,3,3,4,2],status:"Secondary Power",
                              desc:``,decks:['Nationhood','Colonialism']},

                          {owned:"Montenegro",by:"Republic of Serbia",amount:-15,score:[1,0,0,0,0]},
                          {owned:"Macedonia",by:"Turkey",amount:-50,score:[1,0,0,0,0]},
                          {owned:"Albania",by:"Turkey",amount:-50,score:[1,0,0,0,0],},
                          {owned:"Kosovo",by:"Turkey",amount:-50,score:[1,0,0,0,0],},
                          {owned:"Jordan",by:"Turkey",amount:-50,score:[1,0,0,0,0],},
                          {owned:"Libya",by:"Turkey",amount:-55,score:[1,0,0,0,0]},
                          {owned:"Kuwait",by:"Turkey",amount:-75,score:[1,0,0,0,0]},
                          {owned:"Syria",by:"Turkey",amount:-50,score:[1,0,0,0,0],},
                          {owned:"Iraq",by:"Turkey",amount:-50,score:[1,1,0,0,0],},
                          {owned:"Armenia",by:"Turkey",amount:-59,score:[1,0,0,0,0],},
                          {owned:"Eritrea",by:"Italy",amount:-50,score:[1,0,0,0,0],},
                          {owned:"Somalia",by:"Italy",amount:-50,score:[1,0,0,0,0],},
                          {owned:"South Korea",by:"Japan",amount:-80,score:[2,0,1,0,0]},
                          {owned:"North Korea",by:"Japan",amount:-50,score:[1,1,1,0,0]},
                          {owned:"Taiwan",by:"Japan",amount:-60,score:[1,0,0,0,0]},
                          {owned:"Hungary",by:"Austria",amount:-86,score:[1,1,1,1,0]},
                          {owned:"Slovakia",by:"Austria",amount:-57,score:[1,0,1,0,0]},
                          {owned:"Croatia",by:"Austria",amount:-58,score:[1,1,0,1,0]},
                          {owned:"Czech Republic",by:"Austria",amount:-72,score:[1,1,2,1,0]},
                          {owned:"Slovenia",by:"Austria",amount:-78,score:[1,0,0,1,0]},
                          {owned:"Bulgaria",by:"Austria",amount:-38,score:[1,0,0,1,0]},


                    //great powers
                          {owned:"United Kingdom",by:"United Kingdom",amount:100,score:[6,8,6,2,8],status:"Great Power",
                              desc:`The sun never sets on the British Empire.`,decks:['Colonialism','International Order','Divine Empire']},
                          {owned:"United States of America",by:"United States of America",amount:99,score:[8,4,8,1,2],status:"Great Power",
                              desc:``,decks:['Isolationism','Internation Order','Nationhood']},
                          {owned:"Germany",by:"Germany",amount:99,score:[5,8,7,8,3],status:"Great Power",
                              desc:``,decks:['Divine Empire','Internation Order','Colonialism','Nationhood']},
                          {owned:"Russia",by:"Russia",amount:92,score:[5,5,5,7,6],status:"Great Power",
                              desc:``,decks:['Divine Empire','Nationhood']},
                          {owned:"France",by:"France",amount:97,score:[5,7,5,8,4],status:"Great Power",
                              desc:``,decks:['Colonialism','Internation Order','Divine Empire']},

                          {owned:"Philippines",by:"United States of America",amount:52,score:[1,0,0,0,0]},
                          {owned:"Puerto Rico",by:"United States of America",amount:58,score:[1,0,0,0,0]},

                          {owned:"Poland",by:"Germany",amount:-92,score:[2,2,2,2,2]},
                          {owned:"Cameroon",by:"Germany",amount:-55,score:[1,0,0,0,0]},
                          {owned:"Namibia",by:"Germany",amount:-55,score:[1,0,0,0,0]},
                          {owned:"United Republic of Tanzania",by:"Germany",amount:-55,score:[1,0,0,0,0]},
                          {owned:"Papua New Guinea",by:"Germany",amount:-55,score:[1,0,0,0,0]},
                          {owned:"Togo",by:"Germany",amount:-55,score:[1,0,0,0,0]},

                          {owned:"Belarus",by:"Russia",amount:-86,score:[1,0,0,0,0]},
                          {owned:"Ukraine",by:"Russia",amount:-72,score:[2,1,1,1,0]},
                          {owned:"Lithuania",by:"Russia",amount:-55,score:[1,0,0,0,0]},
                          {owned:"Estonia",by:"Russia",amount:-59,score:[1,0,0,0,0]},
                          {owned:"Latvia",by:"Russia",amount:-62,score:[1,0,0,0,0]},
                          {owned:"Georgia",by:"Russia",amount:-72,score:[1,0,0,0,0],},
                          {owned:"Azerbaijan",by:"Russia",amount:72,score:[1,0,1,0,0],},
                          {owned:"Kazakhstan",by:"Russia",amount:-55,score:[1,0,0,0,0],},
                          {owned:"Uzbekistan",by:"Russia",amount:-55,score:[1,0,0,0,0],},
                          {owned:"Turkmenistan",by:"Russia",amount:-51,score:[1,0,0,0,0],},
                          {owned:"Kyrgyzstan",by:"Russia",amount:-62,score:[1,0,0,0,0],},
                          {owned:"Tajikistan",by:"Russia",amount:-61,score:[1,0,0,0,0],},
                          {owned:"Finland",by:"Russia",amount:-55,score:[1,1,1,2,0],},
                          {owned:"Moldova",by:"Russia",amount:-55,score:[1,1,1,2,0],},

                          {owned:"Canada",by:"United Kingdom",amount:-88,score:[1,1,1,1,1]},
                          {owned:"Australia",by:"United Kingdom",amount:-92,score:[1,1,0,1,1]},
                          {owned:"India",by:"United Kingdom",amount:-57,score:[2,1,1,2,0]},
                          {owned:"South Africa",by:"United Kingdom",amount:-85,score:[1,0,0,1,0]},
                          {owned:"New Zealand",by:"United Kingdom",amount:-94,score:[1,0,0,0,0]},
                          {owned:"Kenya",by:"United Kingdom",amount:-62,score:[1,0,0,0,0]},
                          {owned:"Jamaica",by:"United Kingdom",amount:-84,score:[0,0,0,0,0]},
                          {owned:"Ireland",by:"United Kingdom",amount:-61,score:[1,0,0,0,0]},
                          {owned:"Egypt",by:"United Kingdom",amount:-62,score:[1,0,0,0,3]},
                          {owned:"Sudan",by:"United Kingdom",amount:-52,score:[1,0,0,0,0]},
                          {owned:"South Sudan",by:"United Kingdom",amount:-54,score:[0,0,0,0,0]},
                          {owned:"The Bahamas",by:"United Kingdom",amount:-80,score:[0,0,0,0,1]},
                          {owned:"Myanmar",by:"United Kingdom",amount:-57,score:[1,0,0,0,0]},
                          {owned:"Pakistan",by:"United Kingdom",amount:-52,score:[1,0,0,1,0]},
                          {owned:"Bangladesh",by:"United Kingdom",amount:-61,score:[1,0,0,0,0]},
                          {owned:"Cyprus",by:"United Kingdom",amount:-85,score:[0,0,0,0,1]},
                          {owned:"Malaysia",by:"United Kingdom",amount:-65,score:[0,0,1,0,1]},
                          {owned:"Nigeria",by:"United Kingdom",amount:-71,score:[1,0,0,0,0]},
                          {owned:"Zambia",by:"United Kingdom",score:[0,0,0,0,0],amount:-69},
                          {owned:"Zimbabwe",by:"United Kingdom",score:[1,0,0,0,0],amount:-61},
                          {owned:"Botswana",by:"United Kingdom",score:[0,0,0,0,0],amount:-62},
                          {owned:"Uganda",by:"United Kingdom",score:[0,0,0,0,0],amount:-68},
                          {owned:"Somaliland",by:"United Kingdom",score:[1,0,0,0,1],amount:-68},
                          {owned:"Malawi",by:"United Kingdom",score:[1,0,0,0,0],amount:-61},
                          {owned:"Guyana",by:"United Kingdom",score:[1,0,0,0,0],amount:-55},
                          {owned:"Fiji",by:"United Kingdom",score:[0,0,0,0,0],amount:-75},
                          {owned:"Solomon Islands",by:"United Kingdom",score:[0,0,0,0,0],amount:-62},
                          {owned:"Brunei",by:"United Kingdom",score:[0,0,0,0,0],amount:-72},
                          {owned:"Sri Lanka",by:"United Kingdom",score:[1,0,0,0,0],amount:-76},
                          {owned:"Ghana",by:"United Kingdom",score:[1,0,0,0,0],amount:-61},
                          {owned:"Sierra Leone",by:"United Kingdom",score:[1,0,0,0,1],amount:-64},
                          {owned:"Gambia",by:"United Kingdom",score:[1,0,0,0,0],amount:-57},

                          {owned:"New Caledonia",by:"France",amount:-40,score:[0,0,0,0,0]},
                          {owned:"Republic of Congo",by:"France",amount:-40,score:[1,0,0,0,0]},
                          {owned:"Algeria",by:"France",amount:-60},
                          {owned:"Vietnam",by:"France",amount:-55},
                          {owned:"Cambodia",by:"France",amount:-35},
                          {owned:"Laos",by:"France",amount:-35},
                          {owned:"Mauritania",by:"France",amount:-35},
                          {owned:"Ivory Coast",by:"France",amount:-35},
                          {owned:"Gabon",by:"France",amount:-35},
                          {owned:"Tunisia",by:"France",amount:-35},
                          {owned:"Niger",by:"France",amount:-35},
                          {owned:"Mali",by:"France",amount:-35},
                          {owned:"Madagascar",by:"France",amount:-35},
                          {owned:"Central African Republic",by:"France",amount:-35},
                          {owned:"Chad",by:"France",amount:-35},
                          {owned:"Burkina Faso",by:"France",amount:-35},
                          {owned:"Senegal",by:"France",amount:-35},
                          {owned:"Guinea",by:"France",amount:-35},
                          {owned:"Morocco",by:"France",amount:-25,score:[1,0,0,0,1]},
                          {owned:"Romania",by:"France",amount:5,score:[1,1,1,1,0]},

                    //independant countries
                          {owned:"Norway",by:"Norway",amount:5,score:[2,2,1,1,1]},
                          {owned:"Sweden",by:"Sweden",amount:5,score:[2,2,1,1,1]},
                          {owned:"Afghanistan",by:"Afghanistan",amount:50,score:[1,0,0,1,0]},
                          {owned:"Iran",by:"Iran",amount:50,score:[1,1,1,1,0]},
                          {owned:"Republic of Serbia",by:"Austria",amount:15,score:[1,0,0,2,0]},
                          {owned:"Bosnia and Herzegovina",by:"Austria",amount:15,score:[1,0,0,0,0]},
                          {owned:"Spain",by:"Spain",amount:100,score:[2,2,2,2,1]},
                          {owned:"Bhutan",by:"Bhutan",amount:100,score:[1,0,0,0,0]},
                          {owned:"Nepal",by:"Nepal",amount:100,score:[1,0,0,0,0]},
                          {owned:"Switzerland",by:"Switzerland",amount:100,score:[3,1,2,1,0]},
                          {owned:"Greece",by:"Greece",amount:15,score:[1,1,0,0,0],},


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
                      //other influencers
                            {owned:"Portugal",by:"Portugal",amount:100,score:[2,2,1,1,1]},
                            {owned:"Mozambique",by:"Portugal",amount:-50,score:[1,0,0,0,0]},
                            {owned:"Angola",by:"Portugal",amount:-50,score:[1,0,0,0,0]},
                            {owned:"East Timor",by:"Portugal",amount:-50,score:[0,0,0,0,0]},
                            {owned:"Guinea Bissau",by:"Portugal",amount:-50,score:[1,0,0,0,0]},
                            {owned:"Belgium",by:"France",score:[2,2,2,2,1],amount:-20},
                            {owned:"Democratic Republic of the Congo",by:"Belgium",score:[1,0,0,0,0],amount:-55},
                            {owned:"Denmark",by:"Denmark",score:[2,2,1,1,1],amount:100},
                            {owned:"Iceland",by:"Denmark",score:[1,0,0,0,0],amount:-70},
                            {owned:"Greenland",by:"Denmark",score:[0,0,0,0,0],amount:-60},
                            {owned:"Netherlands",by:"Netherlands",score:[2,2,2,2,1],amount:100},
                            {owned:"Indonesia",by:"Netherlands",score:[2,0,1,0,0],amount:-60},
                            {owned:"Suriname",by:"Netherlands",score:[1,0,0,0,0],amount:-60},
                            {owned:"China",by:"China",score:[3,2,2,3,1],amount:100},
                            {owned:"Mongolia",by:"China",score:[1,0,0,1,0],amount:-50},


                      //secondary powers
                            {owned:"Turkey",by:"Turkey",amount:88,score:[2,3,2,5,3],status:"Secondary Power",
                                desc:`The situation has grown intolerable - our rightful place as leader of nations is not only usurped,
                                but the other powers look on us as weak.  British ships fill our harbors, French "Schools" teach foreign doctrine
                                in our backyards, and foreign soldiers fill what were supposed to be our cities in Africa, Asia and Europe.
                                The time has come to defend our lands and interests, by any means if necessary.`
                            },
                            {owned:"Japan",by:"Japan",amount:100,score:[2,3,2,5,3],status:"Secondary Power"},
                            {owned:"Austria",by:"Austria",amount:90,score:[4,3,3,4,2],status:"Secondary Power"},
                            {owned:"Italy",by:"Italy",amount:86,score:[4,3,3,4,2],status:"Secondary Power"},
                            {owned:"Republic of Serbia",by:"Russia",amount:-58,score:[1,0,0,2,0],status:"Secondary Power",
                                desc:``
                            },

                            {owned:"Montenegro",by:"Republic of Serbia",amount:-65,score:[1,0,0,0,0]},
                            {owned:"Macedonia",by:"Republic of Serbia",amount:-90,score:[1,0,0,0,0]},
                            {owned:"Albania",by:"Republic of Serbia",amount:-40,score:[1,0,0,0,0],},
                            {owned:"Kosovo",by:"Republic of Serbia",amount:-90,score:[1,0,0,0,0],},
                            {owned:"Jordan",by:"Turkey",amount:-50,score:[1,0,0,0,0],},
                            {owned:"Kuwait",by:"Turkey",amount:-75,score:[1,0,0,0,0]},
                            {owned:"Syria",by:"Turkey",amount:-50,score:[1,0,0,0,0],},
                            {owned:"Iraq",by:"Turkey",amount:-50,score:[1,1,0,0,0],},
                            {owned:"Armenia",by:"Turkey",amount:-59,score:[1,0,0,0,0],},
                            {owned:"Eritrea",by:"Italy",amount:-50,score:[1,0,0,0,0],},
                            {owned:"Somalia",by:"Italy",amount:-50,score:[1,0,0,0,0],},
                            {owned:"Libya",by:"Italy",amount:-55,score:[1,0,0,0,0]},
                            {owned:"Tunisia",by:"Italy",amount:-45},
                            {owned:"South Korea",by:"Japan",amount:-80,score:[2,0,1,0,0]},
                            {owned:"North Korea",by:"Japan",amount:-50,score:[1,1,1,0,0]},
                            {owned:"Taiwan",by:"Japan",amount:-60,score:[1,0,0,0,0]},
                            {owned:"Hungary",by:"Austria",amount:-86,score:[1,1,1,1,0]},
                            {owned:"Slovakia",by:"Austria",amount:-57,score:[1,0,1,0,0]},
                            {owned:"Croatia",by:"Austria",amount:-58,score:[1,1,0,1,0]},
                            {owned:"Czech Republic",by:"Austria",amount:-72,score:[1,1,2,1,0]},
                            {owned:"Slovenia",by:"Austria",amount:-78,score:[1,0,0,1,0]},
                            {owned:"Bulgaria",by:"Austria",amount:-38,score:[1,0,0,1,0]},

                            {owned:"Bosnia and Herzegovina",by:"Austria",amount:-55,score:[1,0,0,0,0]},


                      //great powers
                            {owned:"United Kingdom",by:"United Kingdom",amount:100,score:[6,8,6,2,10],status:"Great Power",
                                desc:`The sun never sets on the British Empire.`},
                            {owned:"United States of America",by:"United States of America",amount:99,score:[8,4,8,1,2],status:"Great Power"},
                            {owned:"Germany",by:"Germany",amount:99,score:[5,8,7,10,3],status:"Great Power"},
                            {owned:"Russia",by:"Russia",amount:92,score:[5,5,5,7,6],status:"Great Power"},
                            {owned:"France",by:"France",amount:97,score:[5,7,5,8,4],status:"Great Power"},

                            {owned:"Philippines",by:"United States of America",amount:52,score:[1,0,0,0,0]},
                            {owned:"Puerto Rico",by:"United States of America",amount:58,score:[1,0,0,0,0]},

                            {owned:"Poland",by:"Germany",amount:-92,score:[2,2,2,2,2]},
                            {owned:"Cameroon",by:"Germany",amount:-55,score:[1,0,0,0,0]},
                            {owned:"Namibia",by:"Germany",amount:-55,score:[1,0,0,0,0]},
                            {owned:"United Republic of Tanzania",by:"Germany",amount:-55,score:[1,0,0,0,0]},
                            {owned:"Papua New Guinea",by:"Germany",amount:-55,score:[1,0,0,0,0]},
                            {owned:"Togo",by:"Germany",amount:-55,score:[1,0,0,0,0]},

                            {owned:"Belarus",by:"Russia",amount:-86,score:[1,0,0,0,0]},
                            {owned:"Ukraine",by:"Russia",amount:-72,score:[2,1,1,1,0]},
                            {owned:"Lithuania",by:"Russia",amount:-55,score:[1,0,0,0,0]},
                            {owned:"Estonia",by:"Russia",amount:-59,score:[1,0,0,0,0]},
                            {owned:"Latvia",by:"Russia",amount:-62,score:[1,0,0,0,0]},
                            {owned:"Georgia",by:"Russia",amount:-72,score:[1,0,0,0,0],},
                            {owned:"Azerbaijan",by:"Russia",amount:72,score:[1,0,1,0,0],},
                            {owned:"Kazakhstan",by:"Russia",amount:-55,score:[1,0,0,0,0],},
                            {owned:"Uzbekistan",by:"Russia",amount:-55,score:[1,0,0,0,0],},
                            {owned:"Turkmenistan",by:"Russia",amount:-51,score:[1,0,0,0,0],},
                            {owned:"Kyrgyzstan",by:"Russia",amount:-62,score:[1,0,0,0,0],},
                            {owned:"Tajikistan",by:"Russia",amount:-61,score:[1,0,0,0,0],},
                            {owned:"Finland",by:"Russia",amount:-55,score:[1,1,1,2,0],},
                            {owned:"Moldova",by:"Russia",amount:-55,score:[1,1,1,2,0],},

                            {owned:"Canada",by:"United Kingdom",amount:-88,score:[1,1,1,1,1]},
                            {owned:"Australia",by:"United Kingdom",amount:-92,score:[1,1,0,1,1]},
                            {owned:"India",by:"United Kingdom",amount:-57,score:[2,1,1,2,0]},
                            {owned:"South Africa",by:"United Kingdom",amount:-85,score:[1,0,0,1,0]},
                            {owned:"New Zealand",by:"United Kingdom",amount:-94,score:[1,0,0,0,0]},
                            {owned:"Kenya",by:"United Kingdom",amount:-62,score:[1,0,0,0,0]},
                            {owned:"Jamaica",by:"United Kingdom",amount:-84,score:[0,0,0,0,0]},
                            {owned:"Ireland",by:"United Kingdom",amount:-61,score:[1,0,0,0,0]},
                            {owned:"Egypt",by:"United Kingdom",amount:-62,score:[1,0,0,0,3]},
                            {owned:"Sudan",by:"United Kingdom",amount:-52,score:[1,0,0,0,0]},
                            {owned:"South Sudan",by:"United Kingdom",amount:-54,score:[0,0,0,0,0]},
                            {owned:"The Bahamas",by:"United Kingdom",amount:-80,score:[0,0,0,0,1]},
                            {owned:"Myanmar",by:"United Kingdom",amount:-57,score:[1,0,0,0,0]},
                            {owned:"Pakistan",by:"United Kingdom",amount:-52,score:[1,0,0,1,0]},
                            {owned:"Bangladesh",by:"United Kingdom",amount:-61,score:[1,0,0,0,0]},
                            {owned:"Cyprus",by:"United Kingdom",amount:-85,score:[0,0,0,0,1]},
                            {owned:"Malaysia",by:"United Kingdom",amount:-65,score:[0,0,1,0,1]},
                            {owned:"Nigeria",by:"United Kingdom",amount:-71,score:[1,0,0,0,0]},
                            {owned:"Zambia",by:"United Kingdom",score:[0,0,0,0,0],amount:-69},
                            {owned:"Zimbabwe",by:"United Kingdom",score:[1,0,0,0,0],amount:-61},
                            {owned:"Botswana",by:"United Kingdom",score:[0,0,0,0,0],amount:-62},
                            {owned:"Uganda",by:"United Kingdom",score:[0,0,0,0,0],amount:-68},
                            {owned:"Somaliland",by:"United Kingdom",score:[1,0,0,0,1],amount:-68},
                            {owned:"Malawi",by:"United Kingdom",score:[1,0,0,0,0],amount:-61},
                            {owned:"Guyana",by:"United Kingdom",score:[1,0,0,0,0],amount:-55},
                            {owned:"Fiji",by:"United Kingdom",score:[0,0,0,0,0],amount:-75},
                            {owned:"Solomon Islands",by:"United Kingdom",score:[0,0,0,0,0],amount:-62},
                            {owned:"Brunei",by:"United Kingdom",score:[0,0,0,0,0],amount:-72},
                            {owned:"Sri Lanka",by:"United Kingdom",score:[1,0,0,0,0],amount:-76},
                            {owned:"Ghana",by:"United Kingdom",score:[1,0,0,0,0],amount:-61},
                            {owned:"Sierra Leone",by:"United Kingdom",score:[1,0,0,0,1],amount:-64},
                            {owned:"Gambia",by:"United Kingdom",score:[1,0,0,0,0],amount:-57},

                            {owned:"New Caledonia",by:"France",amount:-40,score:[0,0,0,0,0]},
                            {owned:"Republic of Congo",by:"France",amount:-40,score:[1,0,0,0,0]},
                            {owned:"Algeria",by:"France",amount:-60},
                            {owned:"Vietnam",by:"France",amount:-55},
                            {owned:"Cambodia",by:"France",amount:-35},
                            {owned:"Laos",by:"France",amount:-35},
                            {owned:"Mauritania",by:"France",amount:-35},
                            {owned:"Ivory Coast",by:"France",amount:-35},
                            {owned:"Gabon",by:"France",amount:-35},
                            {owned:"Niger",by:"France",amount:-35},
                            {owned:"Mali",by:"France",amount:-35},
                            {owned:"Madagascar",by:"France",amount:-35},
                            {owned:"Central African Republic",by:"France",amount:-35},
                            {owned:"Chad",by:"France",amount:-35},
                            {owned:"Burkina Faso",by:"France",amount:-35},
                            {owned:"Senegal",by:"France",amount:-35},
                            {owned:"Guinea",by:"France",amount:-35},
                            {owned:"Morocco",by:"France",amount:-65,score:[1,0,0,0,1]},
                            {owned:"Romania",by:"France",amount:-20,score:[1,1,1,1,0]},

                      //independant countries
                            {owned:"Norway",by:"Norway",amount:5,score:[2,2,1,1,1]},
                            {owned:"Sweden",by:"Sweden",amount:5,score:[2,2,1,1,1]},
                            {owned:"Afghanistan",by:"Afghanistan",amount:50,score:[1,0,0,1,0]},
                            {owned:"Iran",by:"Iran",amount:50,score:[1,1,1,1,0]},
                            {owned:"Spain",by:"Spain",amount:100,score:[2,2,2,2,1]},
                            {owned:"Bhutan",by:"Bhutan",amount:100,score:[1,0,0,0,0]},
                            {owned:"Nepal",by:"Nepal",amount:100,score:[1,0,0,0,0]},
                            {owned:"Greece",by:"United Kingdom",amount:-15,score:[1,1,0,0,0],},
                            {owned:"Switzerland",by:"Switzerland",amount:100,score:[3,1,2,1,0]},

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
                      {owned:"United Kingdom",by:"United Kingdom",amount:100,score:[6,8,6,2,8],status:"Great Power"},
                      {owned:"United States of America",by:"United States of America",amount:100,score:[48,4,8,1,2],status:"Great Power"},
                      {owned:"Germany",by:"Germany",amount:100,score:[5,8,7,8,3],status:"Great Power"},
                      {owned:"Russia",by:"Russia",amount:100,score:[5,5,5,7,6],status:"Great Power"},
                      {owned:"France",by:"France",amount:100,score:[5,7,5,8,4],status:"Great Power"},

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
                      {owned:"Germany",by:"Germany",amount:100,score:[5,8,7,8,3],status:"Great Power"},
                      {owned:"United Kingdom",by:"United Kingdom",amount:100,score:[6,8,6,2,8],status:"Great Power"},
                      {owned:"United States of America",by:"United States of America",amount:100,score:[48,4,8,1,2],status:"Great Power"},
                      {owned:"Russia",by:"Russia",amount:100,score:[5,5,5,7,6],status:"Great Power"},
                      {owned:"France",by:"France",amount:100,score:[5,7,5,8,4],status:"Great Power"},

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
                      {owned:"Russia",by:"Russia",amount:100,score:[32,40,39,55,32],status:"Great Power",
                          desc:`Once seemingly alone against the whole world, our allies, friends, and dependents are found across vast parts of Europe and Asia.`},
                      {owned:"United States of America",by:"United States of America",amount:100,score:[100,100,100,102,102],status:"Great Power"},
                      {owned:"United Kingdom",by:"United Kingdom",amount:100,score:[46,58,46,22,48],status:"Secondary Power"},
                      {owned:"Germany",by:"United States of America",amount:-80,score:[55,58,57,48,18]},
                      {owned:"China",by:"China",amount:20,score:[45,70,62,45,22],status:"Secondary Power"},
                      {owned:"Turkey",by:"Turkey",amount:20,score:[15,12,10,11,6]},
                      {owned:"Japan",by:"United States of America",amount:-70,score:[20,24,27,12,11]},
                      {owned:"Austria",by:"United States of America",amount:-60,score:[11,4,6,2,0]},
                      {owned:"Italy",by:"United States of America",amount:-90,score:[19,12,13,9,7]},
                      {owned:"India",by:"United Kingdom",amount:-57,score:[28,20,24,26,14]},
                      {owned:"France",by:"United States of America",amount:-5,score:[40,50,44,35,27]},

                      {owned:"Hungary",by:"Russia",amount:-86,score:[1,1,1,1,0]},
                      {owned:"Slovakia",by:"Russia",amount:-57,score:[1,0,1,0,0]},
                      {owned:"Czech Republic",by:"Russia",amount:-72,score:[1,1,2,1,0]},
                      {owned:"Poland",by:"Russia",amount:-72,score:[1,1,2,1,0]},
                      {owned:"Mongolia",by:"Russia",amount:-72,score:[1,1,2,1,0]},
                      {owned:"Romania",by:"Russia",amount:-72,score:[1,1,2,1,0]},
                      {owned:"Mongolia",by:"Russia",amount:-72,score:[1,1,2,1,0]},
                      {owned:"Moldova",by:"Russia",amount:-72,score:[1,1,2,1,0]},

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
                      {owned:"United States of America",by:"United States of America",amount:100,score:[100,100,100,102,102],status:"Great Power",
                          "desc":`Oh beacon of liberty, land of Freedom.  Home to the best and brightest, gathered from all over the world.  Let not our sins destroy us....`},
                      {owned:"Belgium",by:"United States of America",score:[2,2,2,2,1],amount:-80},
                      {owned:"United Kingdom",by:"Belgium",amount:-51,score:[46,58,46,22,48]},
                      {owned:"Germany",by:"Belgium",amount:-62,score:[55,58,57,48,18],status:"Secondary Power"},
                      {owned:"Russia",by:"Russia",amount:100,score:[32,40,39,55,32],status:"Secondary Power"},
                      {owned:"China",by:"China",amount:100,score:[45,70,62,45,22],status:"Secondary Power"},
                      {owned:"Japan",by:"Japan",amount:100,score:[20,24,27,12,11]},
                      {owned:"Austria",by:"Austria",amount:10,score:[11,4,6,2,0]},
                      {owned:"Italy",by:"Belgium",amount:-55,score:[19,12,13,9,7]},
                      {owned:"India",by:"India",amount:97,score:[28,20,24,26,14],status:"Secondary Power"},
                      {owned:"France",by:"Belgium",amount:-62,score:[40,50,44,35,27]},
                      {owned:"Spain",by:"Belgium",amount:-62,score:[40,50,44,35,27]},
                      {owned:"Netherlands",by:"Belgium",amount:-62,score:[40,50,44,35,27]},
                      {owned:"Denmark",by:"Belgium",amount:-62,score:[40,50,44,35,27]},
                      {owned:"Ireland",by:"Belgium",amount:-62,score:[40,50,44,35,27]},
                      {owned:"Portugal",by:"Belgium",amount:-62,score:[40,50,44,35,27]},
                      {owned:"Greece",by:"Belgium",amount:-62,score:[40,50,44,35,27]},

                      {owned:"Jordan",by:"Jordan",amount:50,score:[1,0,0,0,0]},
                      {owned:"Libya",by:"Libya",amount:75,score:[1,0,0,0,0]},
                      {owned:"Kuwait",by:"Kuwait",amount:75,score:[1,0,0,0,0]},
                      {owned:"Syria",by:"Syria",amount:50,score:[1,0,0,0,0]},
                      {owned:"Iraq",by:"Iraq",amount:50,score:[1,1,0,0,0]},
                      {owned:"Eritrea",by:"Eritrea",amount:50,score:[1,0,0,0,0]},
                      {owned:"Somalia",by:"Somalia",amount:50,score:[1,0,0,0,0]},
                      {owned:"North Korea",by:"China",amount:40,score:[1,1,1,0,0]},
                      {owned:"Hungary",by:"Germany",amount:90},
                      {owned:"Slovakia",by:"Germany",amount:100},
                      {owned:"Croatia",by:"Germany",amount:100},
                      {owned:"Czech Republic",by:"Germany",amount:100},
                      {owned:"Slovenia",by:"Germany",amount:70},

                      {owned:"Turkey",by:"United States of America",amount:-51,score:[15,12,10,11,6]},
                      {owned:"Taiwan",by:"United States of America",amount:-90,score:[1,0,0,0,0]},
                      {owned:"South Korea",by:"United States of America",amount:-95,score:[2,0,1,0,0]},
                      {owned:"Japan",by:"United States of America",amount:-75,score:[2,0,1,0,0]},
                      {owned:"Australia",by:"United States of America",amount:-80,score:[2,0,1,0,0]},
                      {owned:"Canada",by:"United States of America",amount:-80,score:[2,0,1,0,0]},
                      {owned:"New Zealand",by:"United States of America",amount:-80,score:[2,0,1,0,0]},
                      {owned:"Israel",by:"United States of America",amount:-80,score:[2,0,1,0,0]},
                      {owned:"Panama",by:"United States of America",amount:-55,score:[2,0,1,0,0]},
                      {owned:"Oman",by:"United States of America",amount:-55,score:[2,0,1,0,0]},
                      {owned:"Peru",by:"United States of America",amount:-55,score:[2,0,1,0,0]},
                      {owned:"Iceland",by:"United States of America",amount:-55,score:[2,0,1,0,0]},
                      {owned:"United Arab Emirates",by:"United States of America",amount:-55,score:[2,0,1,0,0]},
                      {owned:"Eritrea",by:"United States of America",amount:-55,score:[2,0,1,0,0]},
                      {owned:"Cameroon",by:"United States of America",amount:-55,score:[2,0,1,0,0]},
                      {owned:"The Bahamas",by:"United States of America",amount:-55,score:[2,0,1,0,0]},
                      {owned:"Honduras",by:"United States of America",amount:-55,score:[2,0,1,0,0]},
                      {owned:"Saudi Arabia",by:"United States of America",amount:-55,score:[2,0,1,0,0]},

                      {owned:"Egypt",by:"Egypt",amount:85,score:[2,0,1,0,0]},
                      {owned:"Sudan",by:"Sudan",amount:85,score:[2,0,1,0,0]},
                      {owned:"South Sudan",by:"South Sudan",amount:85,score:[2,0,1,0,0]},
                      {owned:"South Africa",by:"South Africa",amount:85,score:[2,0,1,0,0]},
                      {owned:"Pakistan",by:"Pakistan",amount:85,score:[2,0,1,0,0]},
                      {owned:"Bangladesh",by:"Bangladesh",amount:85,score:[2,0,1,0,0]},
                      {owned:"Myanmar",by:"Myanmar",amount:85,score:[2,0,1,0,0]},
                      {owned:"Chad",by:"Chad",amount:85,score:[2,0,1,0,0]},
                      {owned:"Vietnam",by:"Vietnam",amount:85,score:[2,0,1,0,0]},
                      {owned:"Poland",by:"Poland",amount:85,score:[2,0,1,0,0]},
                      {owned:"Cambodia",by:"Cambodia",amount:85,score:[2,0,1,0,0]},
                      {owned:"Laos",by:"Laos",amount:85,score:[2,0,1,0,0]},
                      {owned:"Malaysia",by:"Malaysia",amount:85,score:[2,0,1,0,0]},
                      {owned:"Kenya",by:"Kenya",amount:85,score:[2,0,1,0,0]},
                      {owned:"Uganda",by:"Uganda",amount:85,score:[2,0,1,0,0]},
                      {owned:"Zambia",by:"Zambia",amount:85,score:[2,0,1,0,0]},
                      {owned:"Malawi",by:"Malawi",amount:85,score:[2,0,1,0,0]},
                      {owned:"Namibia",by:"Namibia",amount:85,score:[2,0,1,0,0]},
                      {owned:"United Republic of Tanzania",by:"United Republic of Tanzania",amount:85,score:[2,0,1,0,0]},
                      {owned:"Malawi",by:"Malawi",amount:85,score:[2,0,1,0,0]},
                      {owned:"Zimbabwe",by:"Zimbabwe",amount:85,score:[2,0,1,0,0]},
                      {owned:"Botswana",by:"Botswana",amount:85,score:[2,0,1,0,0]},
                      {owned:"Mauritania",by:"Mauritania",amount:85,score:[2,0,1,0,0]},
                      {owned:"Niger",by:"Niger",amount:85,score:[2,0,1,0,0]},
                      {owned:"Mali",by:"Mali",amount:85,score:[2,0,1,0,0]},
                      {owned:"Finland",by:"Finland",amount:85,score:[2,0,1,0,0]},
                      {owned:"Lithuania",by:"Lithuania",amount:85,score:[2,0,1,0,0]},
                      {owned:"Latvia",by:"Latvia",amount:85,score:[2,0,1,0,0]},
                      {owned:"Estonia",by:"Estonia",amount:85,score:[2,0,1,0,0]},
                      {owned:"Ukraine",by:"Ukraine",amount:85,score:[2,0,1,0,0]},
                      {owned:"Hungary",by:"Hungary",amount:85,score:[2,0,1,0,0]},
                      {owned:"Slovakia",by:"Slovakia",amount:85,score:[2,0,1,0,0]},
                      {owned:"Czech Republic",by:"Czech Republic",amount:85,score:[2,0,1,0,0]},
                      {owned:"Croatia",by:"Croatia",amount:85,score:[2,0,1,0,0]},
                      {owned:"Slovenia",by:"Slovenia",amount:85,score:[2,0,1,0,0]},
                      {owned:"Albania",by:"Slovenia",amount:85,score:[2,0,1,0,0]},
                      {owned:"Macedonia",by:"Slovenia",amount:85,score:[2,0,1,0,0]},
                      {owned:"Kosovo",by:"Slovenia",amount:85,score:[2,0,1,0,0]},

                                      ]
                }
          ]
  var scenarioIterator = 0;

function buildCountryData(d){
    let country = countryData.find(x=>x.properties.admin == d.owned);
    country.properties.influencer = d.by;
    country.desc = (d.desc!==undefined)?d.desc:`This is a minor country with very limited international influence.
        Beware, success with this country will be <b>very difficult or impossible</b> in the face
        of meddling by stronger countries.`;

    country.properties.Independence = d.amount;
    country.properties.decks = ( d.decks !== undefined ) ?
          d.decks:
          [scenarios[scenarioIterator].defaultDeck]
    country.properties.status =  (d.status!==undefined) ? d.status:"Minor Country";
  /*  if (d.color === undefined || d.by != d.owned){
       country.properties.color = color[d.by];
    } else {
        country.properties.color = d.color;
    }*/
//    country.properties.flag = (d.by == d.owned)? flag[d.by]:'';
    (d.score!==undefined)?country.properties.score = d.score : country.properties.score = [0,0,0,0,0];
    updateScenarioData(country);
}

function updateScenarioData(country){
  if (country.properties.influencer == country.properties.admin){
     country.properties.color = (color[country.properties.admin]!==undefined)?
            color[country.properties.admin]:
            `rgb(${200-country.properties.Independence},${225-country.properties.Independence},${225-country.properties.Independence})`;
  }
  if (country.properties.influencer != country.properties.admin){
    country.properties.flag = flag[country.properties.influencer];
    if ( country.properties.Independence > - 25) {
      country.properties.color =  (color[country.properties.influencer+ "Sphere"] !==undefined)?
          color[country.properties.influencer + "Sphere"]:
          "white";
    } else if (country.properties.Independence > - 50){
      country.properties.color = color[country.properties.influencer + "Friend"];
    } else if (country.properties.Independence > - 75){
      country.properties.color = color[country.properties.influencer + "Ally"];
    } else {
      country.properties.color = color[country.properties.influencer];
    }
  }
  country.properties.flag = flag[country.properties.influencer];
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

        </div>`;
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
  //selectPolicyDeck(0);
}}

//provide some filler data to load the menu (UK comes first i guess)
var myCountry = "United Kingdom";
var myCountryData;
myCountryData = scenarios[scenarioIterator].countries.find(x=>myCountry==x.owned);

function selectCountry(country){
    myCountry = country;
    myCountryData = scenarios[scenarioIterator].countries.find(x=>country==x.owned);
    document.getElementById("mySelectedCountry").innerHTML = `
        <div style="width:90%;border:1px solid black;padding:1em 5% 1em 5%;margin:.5em 0 .5em 0;display:inline-flex;justify-content:space-between;">

            <div>
               <div style="width:100%">
                   <button class="scenarioButton" style="width:8em;" onclick="beginGame()">Begin</button>
               </div>
            </div>
        </div>
        `;
        selectPolicyDeck(0);


}
