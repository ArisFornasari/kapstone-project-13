import "../App.scss";
import React, { useState } from 'react';



export default function Intro() {
  
    const [showIntro, setShowIntro] = useState(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 8000)
    
  
  

  
  return (

    <>
    { showIntro && (

      <div className="App">
      <input class="retrigger" type="radio" name="rerun" id="retrigger--1" />
      <input
        class="retrigger"
        type="radio"
        name="rerun"
        id="retrigger--2"
        checked="checked"
        />
      <div class="bg"></div>
      <div class="buttons">
        <label class="button button--1" for="retrigger--1">
          PLAY AGAIN
        </label>
        <label class="button button--2" for="retrigger--2">
          PLAY AGAIN
        </label>
      </div>
      <div class="pane">
        <div class="rotate">
          <div class="logo">KENZIE</div>
          <div class="logo">KENZIE</div>
          <div class="logo">KENZIE</div>
          <div class="logo">KENZIE</div>
          <div class="logo">KENZIE</div>
          <div class="logo">KENZIE</div>
          <div class="logo">KENZIE</div>
          <div class="logo">KENZIE</div>
          <div class="logo">KENZIE</div>
          <div class="logo">KENZIE</div>
          <div class="logo">KENZIE</div>
          <div class="logo">KENZIE</div>
          <div class="logo">KENZIE</div>
          <div class="logo">KENZIE</div>
          <div class="logo">KENZIE</div>
          <div class="logo">KENZIE</div>
          <div class="logo">KENZIE</div>
          <div class="logo">KENZIE</div>
          <div class="logo">KENZIE</div>
          <div class="logo">KENZIE</div>
        </div>
      </div>
    </div>
  )}
</>
  );
}
