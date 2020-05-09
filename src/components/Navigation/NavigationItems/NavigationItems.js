import React from 'react';

import classes from './NavigationItems.module.css';
import NaviagationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NaviagationItem link='/' active>Burger Builder</NaviagationItem>
        <NaviagationItem link='/'>Checkout</NaviagationItem>
        
    </ul>
);

export default navigationItems;