import React from "react";
import PropTypes from "prop-types";

import Cart from "../cart";

import "./style.css";

function Controls(props) {
	return (
		<div className='Controls'>
			<Cart quantity={props.order} price={props.totalPrice}/>
			<button
				onClick={() => props.handlerBasketShow()}
				className='Controls__btn'>
				Перейти
			</button>
		</div>
	);
}

Controls.propTypes = {
	onAdd: PropTypes.func,
};

Controls.defaultProps = {
	onAdd: () => {},
};

export default React.memo(Controls);
