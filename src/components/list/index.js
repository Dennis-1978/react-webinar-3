import React from "react";
import PropTypes from "prop-types";

import Item from "../item";

import "./style.css";

function List({ list, addToBasket }) {
	return (
		<div className='List'>
			{list.map(item => (
				<div
					key={item.code}
					className='List__item'>
					<Item
						item={item}
						addToBasket={addToBasket}
					/>
				</div>
			))}
		</div>
	);
}

List.propTypes = {
	list: PropTypes.arrayOf(
		PropTypes.shape({
			code: PropTypes.number,
		}),
	).isRequired,
};

export default React.memo(List);
