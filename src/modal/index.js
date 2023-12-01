import React from "react";
import PropTypes from "prop-types";
import { cn as bem } from "@bem-react/classname";

import "./style.css";

function Modal({ head }) {
  const cn = bem("Modal");

  return (
    <div className={cn()}>
      <div className={cn("content")}>{head}</div>
    </div>
  );
}

Modal.propTypes = {
  header: PropTypes.node,
};

export default React.memo(Modal);
