import React from 'react';
import {css} from 'emotion';

const green = css`
  background: green;
  width: 200px;
  height: 250px;
  margin: 10px;
`;

const red = css`
  background: red;
  width: 200px;
  height: 250px;
  margin: 10px;
`;

const Home: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row wrap',
        width: 'inherit',
        justifyContent: 'center',
      }}
    >
      <div className={green} />
      <div className={red} />
      <div className={green} />
      <div className={red} />
      <div className={green} />
      <div className={red} />
      <div className={green} />
      <div className={red} />
    </div>
  );
};

export default Home;
