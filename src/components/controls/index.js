import React from "react";
import PropTypes from "prop-types";

import Cart from "../cart";

import "./style.css";

function Controls({ count, handleBasketShow }) {
	return (
		<div className='Controls'>
			<Cart
				count={count}
				price={0}
			/>
			<button
				onClick={() => handleBasketShow()}
				className='Controls__btn'>
				Перейти
			</button>
		</div>
	);
}

Controls.propTypes = {
	count: PropTypes.number,
	handleBasketShow: PropTypes.func,
};

Controls.defaultProps = {
	handleBasketShow: () => {},
};

export default React.memo(Controls);
