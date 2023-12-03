import React from "react";
import PropTypes from "prop-types";
import { cn as bem } from "@bem-react/classname";

import Total from "../total";

import "./style.css";

function Controls({ count, handleBasketShow, price }) {
  const cn = bem("Controls");

  let isEnable = true;
  count ? (isEnable = false) : isEnable;

  return (
    <div className={cn()}>
      <Total count={count} price={price} />
      <button
        onClick={() => handleBasketShow()}
        className={cn("btn")}
        disabled={isEnable}
      >
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
