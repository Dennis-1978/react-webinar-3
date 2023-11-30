import React from "react";
import PropTypes from "prop-types";

import { internationalNumber } from "../../utils";

import "./style.css";

function Item({item, addToBasket}) {
	return (
		<div className='Item'>
			<div className='Item__code'>{item.code}</div>
			<div className='Item__title'>{item.title}</div>
			<div className='Item__price'>{internationalNumber(item.price)}</div>
			<div className='Item__actions'>
				<button
					onClick={() => addToBasket(item)}
					className='Item__btn'>
					Добавить
				</button>
			</div>
		</div>
	);
}

Item.propTypes = {
	item: PropTypes.shape({
		code: PropTypes.number,
		title: PropTypes.string,
	}).isRequired,
	onDelete: PropTypes.func,
};

Item.defaultProps = {
	onDelete: () => {},
};

export default React.memo(Item);
