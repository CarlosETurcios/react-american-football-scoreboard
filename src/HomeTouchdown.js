import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';
import Buttons from './Buttons';

function HomeTouchdown(props) {
  console.log(props);

  return (
    <div className='container'>
      <section className='scoreboard'>
        <div className='topRow'>
          <div className='home'>
            <h2 className='home__name'>Lions</h2>
            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className='away__score'>
              <p className='click-desc'>
                <span>{props.hometouchdown}</span>
              </p>
            </div>
          </div>
          <div className='timer'>00:03</div>
          <div className='away'>
            <h2 className='away__name'>Tigers</h2>
            <div className='home__score'>
              <p className='click-desc'>
                <span>{props.awaytouchdown}</span>
              </p>
            </div>
          </div>
        </div>
        <BottomRow />
      </section>
    </div>
  );
}

export default HomeTouchdown;
