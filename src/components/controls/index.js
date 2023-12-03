import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { cn as bem } from "@bem-react/classname";

import Total from "../total";

import "./style.css";

function Controls({ count, handleBasketShow, price }) {
  const cn = bem("Controls");

  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    !count
      ? element.setAttribute("disabled", false)
      : element.removeAttribute("disabled", null);
  }, [count]);

  return (
    <div className={cn()}>
      <Total count={count} price={price} />
      <button
        onClick={() => handleBasketShow()}
        className={cn("btn")}
        ref={ref}
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
