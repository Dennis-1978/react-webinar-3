import React from "react";
import PropTypes from "prop-types";

import Total from "../total";

import "./style.css";

function Controls({ count, handleBasketShow, price }) {
	return (
		<div className='Controls'>
			<Total
				count={count}
				price={price}
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
	price: PropTypes.number,
	handleBasketShow: PropTypes.func,
};

Controls.defaultProps = {
	handleBasketShow: () => {},
};

export default React.memo(Controls);
