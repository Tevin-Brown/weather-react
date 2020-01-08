import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';
import { sideBarContainer } from './styles'

const SideBar = () => {
    return(
        <div className={ sideBarContainer }>
            <Link to='/'>
                Home
            </Link>
            <Link to='/gfs'>
                GFS
            </Link>
        </div>
    )
}

export default SideBar