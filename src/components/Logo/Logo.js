import React from 'react';

import brugerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={brugerLogo} alt="MyBurger" />
    </div>
);

export default logo;