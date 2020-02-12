import React from 'react';
import {Link} from 'react-router-dom';
import {navigationBarContainer, navigationLink} from './styles';

const NavigationBar = () => {
  return (
    <div className={navigationBarContainer}>
      <Link to="/" className={navigationLink}>
        Home
      </Link>
      <Link to="/gfs" className={navigationLink}>
        GFS
      </Link>
    </div>
  );
};

export default NavigationBar;
