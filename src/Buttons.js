import React, { useState } from 'react';

function Buttons(props) {
  return (
    <div className='container'>
      <section className='buttons'>
        <div className='homeButtons'>
          <button
            className='homeButtons__touchdown'
            onClick={() => {
              props.setHomeTouchdown(props.homeTouchdown + 7);
            }}
          >
            Home Touchdown
          </button>
          <button
            className='homeButtons__fieldGoal'
            onClick={() => {
              props.setHomeTouchdown(props.homeTouchdown + 3);
            }}
          >
            Home Field Goal
          </button>
        </div>

        {/* away buttons  */}
        <div className='awayButtons'>
          <button
            className='awayButtons__touchdown'
            onClick={() => {
              props.setAwayTouchdown(props.awayTouchdown + 7);
            }}
          >
            Away Touchdown
          </button>
          <button
            className='awayButtons__fieldGoal'
            onClick={() => {
              props.setAwayTouchdown(props.awayTouchdown + 3);
            }}
          >
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}
export default Buttons;
