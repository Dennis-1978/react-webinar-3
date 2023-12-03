import React from "react";
import PropTypes from "prop-types";
import { cn as bem } from "@bem-react/classname";

import Item from "../item";

import "./style.css";

function List({ list, addToBasket, deleteOrderItem, label }) {
  const cn = bem("List");

  return (
    <div className={cn()}>
      {list.map((item) => (
        <Item
          key={item.code}
          item={item}
          label={label}
          func={
            addToBasket
              ? () => addToBasket(item)
              : () => deleteOrderItem(item.code)
          }
        />
      ))}
    </div>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
    })
  ).isRequired,
  addToBasket: PropTypes.func,
  deleteOrderItem: PropTypes.func,
  label: PropTypes.string,
};

export default React.memo(List);
