import React, {useState} from 'react';
import {css} from 'emotion';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Footer from './components/Footer';

const centeredContainer = css`
  display: flex;
  flex-flow: row wrap;
  flex-direction: column;
  width: 80vw;
  background: #ffffff;
  box-shadow: 0px 1px 10px 0px #888;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 25px;
  margin: 25px auto;
`;

const appContainer = css`
  background: #eeeeee;
`;

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <div className={appContainer}>
        <NavigationBar />
        <div className={centeredContainer}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about">
              <div>About</div>
            </Route>
            <Route exact path="/gfs">
              <div>GFS Model</div>
            </Route>
            <Route exact path="/satallite-imagery">
              <div>Sattallites</div>
            </Route>
            <Route>
              <div>This page was not found</div>
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
