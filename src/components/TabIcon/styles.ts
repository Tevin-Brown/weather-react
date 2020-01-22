import {css} from 'emotion';

export const tabIcon = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 30px;
  min-height: 40px;
  position: absolute;
  top: 50px;
  left: 200px;
  background-color: gray;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  &:hover {
    cursor: pointer;
  }
  z-index: 1;
`;
