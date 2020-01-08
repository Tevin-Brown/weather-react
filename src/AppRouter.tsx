import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import SideBar from './components/SideBar';

export const AppRouter: React.FC = () => {
 return(
     <Router>
         <SideBar/>
         <Switch>
         <Route exact path="/">
            <div>Home</div>
          </Route>
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
     </Router>
 )
}