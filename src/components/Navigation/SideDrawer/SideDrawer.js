import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Axiliary from '../../../hoc/Auxiliary';

const sideDrawer = (props) => {
    let attchedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attchedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <Axiliary>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attchedClasses.join(' ')} >
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Axiliary>
    );
}

export default sideDrawer;