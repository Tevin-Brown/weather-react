import React from 'react';
import { tabIcon } from './styles'
interface TabIconProps {
    clickHandler: () => void;
}
const TabIcon = ({clickHandler}:TabIconProps) => {
    return(
        <div className={ tabIcon } onClick={clickHandler}>
        </div>
    )
}

export default TabIcon