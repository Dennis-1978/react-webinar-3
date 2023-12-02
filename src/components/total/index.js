import React from "react";
import PropTypes from "prop-types";

import { internationalNumber, plural } from "../../utils";

import "./style.css";

function Total(props) {
  const { count = 0, price = 0 } = props;
  const empty = <span>пусто</span>;

  const available = (
    <span>
      {count} {plural(count, { one: "товар", few: "товара", many: "товаров" })}{" "}
      /{" "}
      {internationalNumber(price, {
        style: "currency",
        currency: "RUB",
        maximumSignificantDigits: 10,
      })}
    </span>
  );

  return <div className="Total">В корзине: {count ? available : empty}</div>;
}

Total.propTypes = {
  count: PropTypes.number,
  price: PropTypes.number,
};

export default React.memo(Total);
