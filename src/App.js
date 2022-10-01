import React from 'react';
import PresentationCard from './presentationCard/PresentationCard';
import Counter from './contador';
import Countdown from './countdown';
import List from './list/List';
import ListC from './listContext/ListC';
import TooltipText from './tooltip/TooltipText';
import AppForm from './form/AppForm';
import './style.css';

function App() {
  return (
    <div className="App">
      <h1>Hello desde React!</h1>
      {/* <AppForm/> */}

      {/* <PresentationCard /> */}
      {/* <Counter/> */}
      {/* <Countdown/> */}
      <List/>
   
      {/* <h3>Looking at lists</h3>

      <p>Turn the <TooltipText tooltip={'texo extra'}>following list</TooltipText> of my favorite vegetables into an unordered list. Cucumber Broccoli Asparagus Pepper</p>
      <p>Turn the  following directions into an ordered list. First knock on the door When prompted, say the magic word Wait for at least 5 seconds Turn the handle and push</p>
      <p>There are two things I care about — <TooltipText tooltip={"texo extra"}> music and friends.</TooltipText> Someday I might be able to get my friends interested in each other, and my music!</p> */}
    </div>
  );
}

export default App;
