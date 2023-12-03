import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { cn as bem } from "@bem-react/classname";

import { internationalNumber } from "../../utils";

import "./style.css";

function Item(props) {
  const cn = bem("Item");

  const visible = props.item.quantity ? (
    <div className={cn("quantity")}>{props.item.quantity} шт</div>
  ) : (
    ""
  );

  visible
    ? useEffect(() => {
        document.body.style.overflow = "hidden";
      }, [])
    : "";

  return (
    <div className={cn()}>
      <div className={cn("code")}>{props.item.code}</div>
      <div className={cn("title")}>{props.item.title}</div>
      <div className={cn("price")}>
        {internationalNumber(props.item.price, {
          style: "currency",
          currency: "RUB",
          maximumSignificantDigits: 10,
        })}
      </div>
      {visible}
      <div className={cn("actions")}>
        <button onClick={props.func} className={cn("btn")}>
          {props.label}
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
  addToBasket: PropTypes.func,
};

export default React.memo(Item);
