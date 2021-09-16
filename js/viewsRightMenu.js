//returns the right side menu for gamplay.
function html_rightMenuGamePlay(){
  return `
  <div style="width:100vw;text-align:right;">
       <div class="" style="text-align:right;width:100%;">
           <div class="deck rightAlign" onclick="gameCards()">Cards<br><br>4
           </div>
       </div>
       <div class="" style="text-align:right;width:100%;">
           <div class="deck rightAlign" style="top:15em;" onclick="window.alert('In game deck viewer coming soon')">Deck<br><br>82
           </div>
       </div>
       <div class="rightAlign" style="top:30em;"><button onclick="toggleTime()"><img src="img/icons/stopwatch-fill.svg"></button></div>
       <div class="rightAlign" style="top:25em;"><button onclick="rulesMenu()">Rules</button></div>
  </div>
  `
}

function html_rightMenuMenu(){
  return  `
          <div style="width:100vw;text-align:right;">
                    <div class="" style="text-align:right;width:100%;">
                        <div class="deck rightAlign" onclick="policyDeckViewer()">Policies<br><br>6
                        </div>
                    </div>
                    <div class="" style="text-align:right;width:100%;">
                        <div class="deck rightAlign" style="top:15em;" onclick="nationalDeckViewer()">National Decks<br><br>6
                        </div>
                    </div>
                    <div class="rightAlign" style="top:23em;"><button onclick="rulesMenu()">Rules</button></div>
               </div>`
}
