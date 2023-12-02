import React from "react";
import PropTypes from "prop-types";
import { cn as bem } from "@bem-react/classname";

import { internationalNumber } from "../../utils";

import "./style.css";

function TotalBasket(props) {
  const cn = bem("TotalBasket");
  const { price = 0 } = props;

  return (
    <div className={cn()}>
      <span className={cn("descr")}>Итого</span>
      <span className={cn("price")}>
        {internationalNumber(price, {
          style: "currency",
          currency: "RUB",
          maximumSignificantDigits: 10,
        })}
      </span>
    </div>
  );
}

TotalBasket.propTypes = {
  price: PropTypes.number,
};

export default React.memo(TotalBasket);
