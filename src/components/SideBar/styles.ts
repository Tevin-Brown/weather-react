import {css} from 'emotion';

export const sideBarContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 20px;
  z-index: 1;
  box-shadow: 5px 0 5px 0px #888;
  border-right: 1px solid #888;
`;

export const appContainer = css`
  display: flex;
  flex-flow: row wrap;
  padding-right: 30px;
  width: 100vw;
`;
