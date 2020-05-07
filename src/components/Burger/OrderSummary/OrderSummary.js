import React from 'react';

import Axiliary from '../../../hoc/Auxiliary';
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map( igKey => {
            return <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li> 

        });

    return (
        <Axiliary>
            <h3>Your Order</h3>
            <p>A Delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout</p>
        </Axiliary>
    )

};

export default orderSummary;