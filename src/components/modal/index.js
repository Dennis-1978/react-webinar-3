import React from "react";
import PropTypes from "prop-types";
import { cn as bem } from "@bem-react/classname";

import "./style.css";

function Modal({ head, list, total }) {
  const cn = bem("Modal");

  return (
    <div className={cn()}>
      <div className={cn("content")}>
        {head}
        <div className={cn("list")}>
          {list}
          <div className={cn("total")}>{total}</div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  head: PropTypes.node,
  list: PropTypes.node,
  total: PropTypes.node,
};

export default React.memo(Modal);
