//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [HTouchdown, homeScore] = React.useState(0);
  const [AwayTouchdown, awayScore] = React.useState(0);
  const [count, quartercount] = React.useState(0);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Bears</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">
              <p className="click-desc">
                <span>{HTouchdown}</span>
              </p>
            </div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Sharks</h2>
            <div className="away__score">
              <p className="click-desc">
                <span>{AwayTouchdown}</span>
              </p>
            </div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            className="homeButtons__touchdown"
            onClick={() => {
              homeScore(HTouchdown + 7);
            }}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => {
              homeScore(HTouchdown + 3);
            }}
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => {
              awayScore(AwayTouchdown + 7);
            }}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => {
              awayScore(AwayTouchdown + 3);
            }}
          >
            Away Field Goal
          </button>
          <div className="quarter_button">
            <button
              className="quartertracker"
              onClick={() => {
                count(quartercount + 2);
              }}
            >
              Quarter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
