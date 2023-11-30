import React from "react";
import PropTypes from "prop-types";

import Cart from "../cart";

import "./style.css";

function Controls({ count }) {
	return (
		<div className='Controls'>
			<Cart
				count={count}
				price={0}
			/>
			<button
				// onClick={() => props.handlerBasketShow()}
				className='Controls__btn'>
				Перейти
			</button>
		</div>
	);
}

Controls.propTypes = {
	count: PropTypes.number,
	onAdd: PropTypes.func,
};

Controls.defaultProps = {
	onAdd: () => {},
};

export default React.memo(Controls);
