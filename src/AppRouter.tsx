import React, {useState} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import SideBar from './components/SideBar';
import TabIcon from './components/TabIcon';
import Transition from './components/Transition';
import Home from './pages/Home';
import {appContainer} from './components/SideBar/styles';

export const AppRouter: React.FC = () => {
  const [closeNavigation, setCloseNavigation] = useState(true);
  const navigationHandler = () => {
    setCloseNavigation(!closeNavigation);
  };
  return (
    <Router>
      <div style={{overflow: 'hidden', display: 'flex'}}>
        <Transition
          trigger={closeNavigation}
          styleOverrides={{width: '230px'}}
          transitionOverrides={{transform: 'translateX(-200px)'}}
        >
          <TabIcon clickHandler={navigationHandler} />
          <SideBar />
        </Transition>
        <Transition
          trigger={closeNavigation}
          styleOverrides={{marginLeft: '230px', width: 'calc(100vw - 230px)'}}
          transitionOverrides={{
            marginLeft: '30px',
            width: 'calc(100vw - 30px)',
          }}
        >
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
        </Transition>
      </div>
    </Router>
  );
};
