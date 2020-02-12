import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SideBar from './components/SideBar';
import {css} from 'emotion';

const satelliteContainer = css`
  display: flex;
  flex-flow: row wrap;
  flex-direction: column;
  width: 80vw;
  min-height: 100vh;
  box-sizing: border-box;
`;

const Satellites = () => {
  return (
    <div className={satelliteContainer}>
      <SideBar />
      <Switch>
        <Route exact path="/satellite-imagery" />
        <Route exact path="/satellite-imagery/WV" />
      </Switch>
    </div>
  );
};

export default Satellites;
