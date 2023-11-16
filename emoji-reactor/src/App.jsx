import React from 'react';

function App() {

  let emojiArray = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","💝","💙","👌","❤","😍","😉","😓","😳","💪","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","😘","😜","😵","🙏","👋","💃","💎","🚀","🌙","🎁","⛄","⛵","🏀","💰","👶","👸","🐰","🐫","🚲","🍉","💛","💚"]
  

  let getEmoji = () =>{
    let index = Math.floor(Math.random() * emojiArray.length);
    let display = document.getElementById('display');
    display.innerHTML = emojiArray[index];
  }
  

  return (
    <div className="mainContainer">
      <h1>Emoji Reactor</h1>
      <button id="emoji" onClick={getEmoji}>Get Emoji</button>
      <div id="display"></div>
    </div>
  )
}

export default App
