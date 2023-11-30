import React from "react";
import PropTypes from "prop-types";

import { internationalNumber } from "../../utils";

import "./style.css";

function Total(props) {
  const { count = 0, price = 0 } = props;

  const empty = <span>пусто</span>;
  const available = (
    <span>
      {count} / {internationalNumber(price)}
    </span>
  );

  return <div className="Total">В корзине: {count ? available : empty}</div>;
}

Total.propTypes = {
  count: PropTypes.number,
  price: PropTypes.number,
};

export default React.memo(Total);
