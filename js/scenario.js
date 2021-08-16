
//conquerings By year /// should probably include which player you can choose.... or something.
//score - people, gov, science&Industry, military, navy

const color = {
  green1:"#219653",
  green2:"#27AE60",
  green3:"#6FCF97",
  blue1:"#2F80ED",
  blue2:"#2D9CDB",
  blue3:"#56CCF2",
  red:"#EB5757",
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
                    "text":"The Twentieth Century has dawned and it sure to bring marvelous changes.",
                    "countries":[
                    //other influencers
                          {owned:"Portugal",by:"Portugal",amount:100,score:[2,2,1,1,1],status:"Minor Country",flag:"pt.png"},
                          {owned:"Mozambique",by:"Portugal",amount:50,score:[1,0,0,0,0],status:"Minor Country",flag:"pt.png"},
                          {owned:"Angola",by:"Portugal",amount:50,score:[1,0,0,0,0],status:"Minor Country",flag:"pt.png"},
                          {owned:"East Timor",by:"Portugal",amount:50,score:[0,0,0,0,0],status:"Minor Country",flag:"pt.png"},
                          {owned:"Guinea Bissau",by:"Portugal",amount:50,score:[1,0,0,0,0],status:"Minor Country",flag:"pt.png"},
                          {owned:"Belgium",by:"Belgium",score:[2,2,2,2,1],amount:100,status:"Minor Country",flag:"be.png"},
                          {owned:"Democratic Republic of the Congo",by:"Belgium",score:[1,0,0,0,0],amount:55,status:"Minor Country"},
                          {owned:"Denmark",by:"Denmark",score:[2,2,1,1,1],amount:100,status:"Minor Country",flag:"dk.png"},
                          {owned:"Iceland",by:"Denmark",score:[1,0,0,0,0],amount:70,status:"Minor Country"},
                          {owned:"Greenland",by:"Denmark",score:[0,0,0,0,0],amount:60,status:"Minor Country"},
                          {owned:"Netherlands",by:"Netherlands",score:[2,2,2,2,1],amount:100,status:"Minor Country",flag:"nl.png"},
                          {owned:"Indonesia",by:"Netherlands",score:[2,0,0,0,0],amount:60,status:"Minor Country"},
                          {owned:"Suriname",by:"Netherlands",score:[1,0,0,0,0],amount:60,status:"Minor Country"},
                          {owned:"China",by:"China",score:[3,2,2,3,1],amount:100,status:"Minor Country",flag:"ch.png"},
                          {owned:"Mongolia",by:"China",score:[3,2,2,3,1],amount:50,status:"Minor Country",flag:"ch.png"},


                    //secondary powers
                          {owned:"Turkey",by:"Turkey",amount:100,score:[2,3,2,5,3],status:"Secondary Power",flag:"tr.png",color:color.purple2},
                          {owned:"Japan",by:"Japan",amount:100,score:[2,3,2,5,3],status:"Secondary Power",flag:"jp.png",color:color.orange},
                          {owned:"Austria",by:"Austria",amount:100,score:[4,3,3,4,2],status:"Secondary Power",flag:"at.png",color:color.green3},
                          {owned:"Italy",by:"Italy",amount:100,score:[4,3,3,4,2],status:"Secondary Power",flag:"it.png",color:color.green1},


                          {owned:"Macedonia",by:"Turkey",amount:50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                          {owned:"Albania",by:"Turkey",amount:50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                          {owned:"Kosovo",by:"Turkey",amount:50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                          {owned:"Greece",by:"Turkey",amount:15,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                          {owned:"Jordan",by:"Turkey",amount:50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                          {owned:"Libya",by:"Turkey",amount:75,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Kuwait",by:"Turkey",amount:75,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Syria",by:"Turkey",amount:50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                          {owned:"Iraq",by:"Turkey",amount:50,score:[1,1,0,0,0],status:"Minor Country",flag:"tr.png"},
                          {owned:"Eritrea",by:"Italy",amount:50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                          {owned:"Somalia",by:"Italy",amount:50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                          {owned:"South Korea",by:"Japan",amount:80,score:[2,0,1,0,0],status:"Minor Country"},
                          {owned:"North Korea",by:"Japan",amount:50,score:[1,1,1,0,0],status:"Minor Country"},
                          {owned:"Taiwan",by:"Japan",amount:60,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Hungary",by:"Austria",amount:90,status:"Minor Country"},
                          {owned:"Slovakia",by:"Austria",amount:100,status:"Minor Country"},
                          {owned:"Croatia",by:"Austria",amount:100,status:"Minor Country"},
                          {owned:"Czech Republic",by:"Austria",amount:100,status:"Minor Country"},
                          {owned:"Slovenia",by:"Austria",amount:70,status:"Minor Country"},


                    //great powers
                          {owned:"United Kingdom",by:"United Kingdom",amount:100,score:[6,8,6,2,8],status:"Great Power",flag:"gb.png",color:color.purple1},
                          {owned:"United States of America",by:"United States of America",amount:100,score:[8,4,8,1,2],status:"Great Power",flag:"us.png",color:color.blue1},
                          {owned:"Germany",by:"Germany",amount:100,score:[5,8,7,8,3],status:"Great Power",flag:"de.png",color:color.yellow},
                          {owned:"Russia",by:"Russia",amount:100,score:[5,5,5,7,6],status:"Great Power",flag:"ru.png",color:color.red},
                          {owned:"France",by:"France",amount:100,score:[5,7,5,8,4],status:"Great Power",flag:"fr.png",color:color.blue3},

                          {owned:"Philippines",by:"United States of America",amount:50,status:"Minor Country"},
                          {owned:"Puerto Rico",by:"United States of America",amount:50,status:"Minor Country"},

                          {owned:"Poland",by:"Germany",amount:100,status:"Minor Country"},
                          {owned:"Cameroon",by:"Germany",amount:55,status:"Minor Country"},
                          {owned:"Namibia",by:"Germany",amount:55,status:"Minor Country"},
                          {owned:"United Republic of Tanzania",by:"Germany",amount:55,status:"Minor Country"},
                          {owned:"Papua New Guinea",by:"Germany",amount:55,status:"Minor Country"},
                          {owned:"Togo",by:"Germany",amount:55,status:"Minor Country"},

                          {owned:"Belarus",by:"Russia",amount:90,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Ukraine",by:"Russia",amount:70,score:[1,1,1,0,0],status:"Minor Country"},
                          {owned:"Lithuania",by:"Russia",amount:60,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Estonia",by:"Russia",amount:60,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Latvia",by:"Russia",amount:60,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Georgia",by:"Russia",amount:70,score:[1,0,0,0,0],status:"Minor Country",flag:"ru.png"},
                          {owned:"Armenia",by:"Russia",amount:60,score:[1,0,0,0,0],status:"Minor Country",flag:"ru.png"},
                          {owned:"Azerbaijan",by:"Russia",amount:80,score:[1,0,1,0,0],status:"Minor Country",flag:"ru.png"},
                          {owned:"Kazakhstan",by:"Russia",amount:40,score:[1,0,0,0,0],status:"Minor Country",flag:"ru.png"},
                          {owned:"Uzbekistan",by:"Russia",amount:40,score:[1,0,0,0,0],status:"Minor Country",flag:"ru.png"},
                          {owned:"Turkmenistan",by:"Russia",amount:40,score:[1,0,0,0,0],status:"Minor Country",flag:"ru.png"},
                          {owned:"Kyrgyzstan",by:"Russia",amount:40,score:[1,0,0,0,0],status:"Minor Country",flag:"ru.png"},
                          {owned:"Tajikistan",by:"Russia",amount:40,score:[1,0,0,0,0],status:"Minor Country",flag:"ru.png"},
                          {owned:"Finland",by:"Russia",amount:55,score:[1,1,1,1,0],status:"Minor Country",flag:"ru.png"},

                          {owned:"Canada",by:"United Kingdom",amount:90,status:"Minor Country"},
                          {owned:"Australia",by:"United Kingdom",amount:90,status:"Minor Country"},
                          {owned:"India",by:"United Kingdom",amount:47,status:"Minor Country"},
                          {owned:"South Africa",by:"United Kingdom",amount:70,status:"Minor Country"},
                          {owned:"New Zealand",by:"United Kingdom",amount:90,status:"Minor Country"},
                          {owned:"Kenya",by:"United Kingdom",amount:55,status:"Minor Country"},
                          {owned:"Jamaica",by:"United Kingdom",amount:80,status:"Minor Country"},
                          {owned:"Ireland",by:"United Kingdom",amount:60,status:"Minor Country"},
                          {owned:"Egypt",by:"United Kingdom",amount:60,status:"Minor Country"},
                          {owned:"Sudan",by:"United Kingdom",amount:60,status:"Minor Country"},
                          {owned:"South Sudan",by:"United Kingdom",amount:60,status:"Minor Country"},
                          {owned:"The Bahamas",by:"United Kingdom",amount:80,status:"Minor Country"},
                          {owned:"Myanmar",by:"United Kingdom",amount:57,status:"Minor Country"},
                          {owned:"Pakistan",by:"United Kingdom",amount:45,status:"Minor Country"},
                          {owned:"Bangladesh",by:"United Kingdom",amount:65,status:"Minor Country"},
                          {owned:"Cyprus",by:"United Kingdom",amount:85,status:"Minor Country"},
                          {owned:"Malaysia",by:"United Kingdom",amount:75,status:"Minor Country"},
                          {owned:"Nigeria",by:"United Kingdom",amount:75,status:"Minor Country"},
                          {owned:"Zambia",by:"United Kingdom",score:[1,0,0,0,0],amount:55,status:"Minor Country"},
                          {owned:"Zimbabwe",by:"United Kingdom",score:[1,0,0,0,0],amount:65,status:"Minor Country"},
                          {owned:"Botswana",by:"United Kingdom",score:[1,0,0,0,0],amount:65,status:"Minor Country"},
                          {owned:"South Sudan",by:"United Kingdom",score:[1,0,0,0,0],amount:65,status:"Minor Country"},
                          {owned:"Uganda",by:"United Kingdom",score:[1,0,0,0,0],amount:65,status:"Minor Country"},
                          {owned:"Somaliland",by:"United Kingdom",score:[1,0,0,0,0],amount:65,status:"Minor Country"},
                          {owned:"Malawi",by:"United Kingdom",score:[1,0,0,0,0],amount:65,status:"Minor Country"},
                          {owned:"Guyana",by:"United Kingdom",score:[1,0,0,0,0],amount:65,status:"Minor Country"},
                          {owned:"Fiji",by:"United Kingdom",score:[0,0,0,0,0],amount:65,status:"Minor Country"},
                          {owned:"Solomon Islands",by:"United Kingdom",score:[0,0,0,0,0],amount:65,status:"Minor Country"},
                          {owned:"Brunei",by:"United Kingdom",score:[0,0,0,0,0],amount:65,status:"Minor Country"},
                          {owned:"Sri Lanka",by:"United Kingdom",score:[0,0,0,0,0],amount:65,status:"Minor Country"},
                          {owned:"Ghana",by:"United Kingdom",score:[0,0,0,0,0],amount:65,status:"Minor Country"},
                          {owned:"Sierra Leone",by:"United Kingdom",score:[0,0,0,0,0],amount:65,status:"Minor Country"},
                          {owned:"Gambia",by:"United Kingdom",score:[0,0,0,0,0],amount:65,status:"Minor Country"},

                          {owned:"New Caledonia",by:"France",amount:40,score:[0,0,0,0,0],status:"Minor Country"},
                          {owned:"Republic of Congo",by:"France",amount:40,score:[1,0,0,0,0],status:"Minor Country"},
                          {owned:"Algeria",by:"France",amount:60,status:"Minor Country"},
                          {owned:"Vietnam",by:"France",amount:55,status:"Minor Country"},
                          {owned:"Cambodia",by:"France",amount:35,status:"Minor Country"},
                          {owned:"Laos",by:"France",amount:35,status:"Minor Country"},
                          {owned:"Mauritania",by:"France",amount:35,status:"Minor Country"},
                          {owned:"Ivory Coast",by:"France",amount:35,status:"Minor Country"},
                          {owned:"Gabon",by:"France",amount:35,status:"Minor Country"},
                          {owned:"Tunisia",by:"France",amount:35,status:"Minor Country"},
                          {owned:"Niger",by:"France",amount:35,status:"Minor Country"},
                          {owned:"Mali",by:"France",amount:35,status:"Minor Country"},
                          {owned:"Madagascar",by:"France",amount:35,status:"Minor Country"},
                          {owned:"Central African Republic",by:"France",amount:35,status:"Minor Country"},
                          {owned:"Chad",by:"France",amount:35,status:"Minor Country"},
                          {owned:"Burkina Faso",by:"France",amount:35,status:"Minor Country"},
                          {owned:"Senegal",by:"France",amount:35,status:"Minor Country"},
                          {owned:"Guinea",by:"France",amount:35,status:"Minor Country"},

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
                    "text":"The next great war is over but the danger has never been greater.",
                    "countries":[
                      {owned:"United Kingdom",by:"United Kingdom",amount:100,score:[6,8,6,2,8],status:"Secondary Power",flag:"gb.png",color:color.purple1},
                      {owned:"United States of America",by:"United States of America",amount:100,score:[8,4,8,1,2],status:"Great Power",flag:"us.png",color:color.blue1},
                      {owned:"Germany",by:"Germany",amount:100,score:[5,8,7,8,3],status:"Secondary Power",flag:"de.png",color:color.yellow},
                      {owned:"Russia",by:"Russia",amount:100,score:[5,5,5,7,6],status:"Great Power",flag:"ru.png",color:color.red},
                      {owned:"China",by:"China",amount:100,score:[65,74,64,45,24],status:"Secondary Power",flag:"cn.png",color:color.blue3},

                                      ]
                },
                {
                    "year":1991,
                    "title":"Pax Americana",
                    "text":"The Cold War is won.  Welcome to the American Age.",
                    "countries":[
                      {owned:"United Kingdom",by:"United Kingdom",amount:100,score:[6,8,6,2,8],status:"Secondary Power",flag:"gb.png",color:color.purple1},
                      {owned:"United States of America",by:"United States of America",amount:100,score:[8,4,8,1,2],status:"Great Power",flag:"us.png",color:color.blue1},
                      {owned:"Germany",by:"Germany",amount:100,score:[5,8,7,8,3],status:"Secondary Power",flag:"de.png",color:color.yellow},
                      {owned:"Russia",by:"Russia",amount:100,score:[5,5,5,7,6],status:"Secondary Power",flag:"ru.png",color:color.red},
                      {owned:"China",by:"China",amount:100,score:[65,74,64,45,24],status:"Secondary Power",flag:"cn.png",color:color.blue3},

                      {owned:"Jordan",by:"Jordan",amount:50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                      {owned:"Libya",by:"Libya",amount:75,score:[1,0,0,0,0],status:"Minor Country"},
                      {owned:"Kuwait",by:"Kuwait",amount:75,score:[1,0,0,0,0],status:"Minor Country"},
                      {owned:"Syria",by:"Syria",amount:50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                      {owned:"Iraq",by:"Iraq",amount:50,score:[1,1,0,0,0],status:"Minor Country",flag:"tr.png"},
                      {owned:"Eritrea",by:"Eritrea",amount:50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                      {owned:"Somalia",by:"Somalia",amount:50,score:[1,0,0,0,0],status:"Minor Country",flag:"tr.png"},
                      {owned:"South Korea",by:"United States of America",amount:40,score:[2,0,1,0,0],status:"Minor Country"},
                      {owned:"North Korea",by:"China",amount:40,score:[1,1,1,0,0],status:"Minor Country"},
                      {owned:"Taiwan",by:"United States of America",amount:40,score:[1,0,0,0,0],status:"Minor Country"},
                      {owned:"Hungary",by:"Germany",amount:90,status:"Minor Country"},
                      {owned:"Slovakia",by:"Germany",amount:100,status:"Minor Country"},
                      {owned:"Croatia",by:"Germany",amount:100,status:"Minor Country"},
                      {owned:"Czech Republic",by:"Germany",amount:100,status:"Minor Country"},
                      {owned:"Slovenia",by:"Germany",amount:70,status:"Minor Country"},
                                      ]
                }
          ]
  var scenarioIterator = 0;

  function buildCountryData(d){
    let country = countryData.find(x=>x.properties.admin == d.owned);
    country.properties.influencer = d.by;
    country.properties.influenceAmount = d.amount;
    country.properties.status = d.status;
    (d.color === undefined)? country.properties.color = scenarioData.countries.find(x=>x.owned==d.by).color:
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
