import React from "react";

import { internationalNumber } from "../../utils";

import "./style.css";

function Cart(props) {
	const { count = 0, price } = props;

	const empty = <span>пусто</span>;
	const available = (
		<span>
			{count} / {internationalNumber(price)}
		</span>
	);

	return <div className='Cart'>В корзине: {count ? available : empty}</div>;
}

export default React.memo(Cart);
