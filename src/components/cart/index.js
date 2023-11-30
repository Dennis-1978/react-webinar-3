import React from "react";

import { internationalNumber } from "../../utils";

import './style.css';

function Cart(props) {
    const {quantity = 0, price } = props;

	const empty = <span>пусто</span>;
    const available = <span>{quantity} / {internationalNumber(price)}</span>

    return (
        <div className="Cart">
            В корзине: {quantity ? available : empty}
        </div>
    );
}

export default React.memo(Cart);
