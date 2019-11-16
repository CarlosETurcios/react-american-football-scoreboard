//TODO: STEP 1 - Import the useState hook.
import React, { useState } from 'react';
import './App.css';
import BottomRow from './BottomRow';
import HomeTouchdown from './HomeTouchdown';
import Buttons from './Buttons';

function App() {
  const [homeTouchdown, setHomeTouchdown] = useState(0);
  const [awayTouchdown, setAwayTouchdown] = useState(0);

  return (
    <div className='container'>
      <HomeTouchdown
        hometouchdown={homeTouchdown}
        awaytouchdown={awayTouchdown}
      />

      <Buttons
        homeTouchdown={homeTouchdown}
        setHomeTouchdown={setHomeTouchdown}
        awayTouchdown={awayTouchdown}
        setAwayTouchdown={setAwayTouchdown}
      />
    </div>
  );
}

export default App;
