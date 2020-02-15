import React, {useState} from 'react';
import {css} from 'emotion';
import {NavLink} from 'react-router-dom';

const navigationLink = css`
  font-size: 16px;
  width: 100%;
  color: black;
  text-decoration: none;
  border-bottom: 1px solid #888;
`;

const sideBarContainer = css`
  display: flex;
  flex-direction: column;
  width: 200px;
  position: fixed;
  top:0
  left: 0;
`;

const SideBar = () => {
  return (
    <div className={sideBarContainer}>
      <NavLink to="/satellite-imagery" className={navigationLink}>
        Satellites
      </NavLink>
      <NavLink to="/satellite-imagery/WV" className={navigationLink}>
        Water Vapor Imagery
      </NavLink>
    </div>
  );
};

export default SideBar;
