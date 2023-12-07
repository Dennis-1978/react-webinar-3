import {memo} from "react";
import PropTypes from "prop-types";

import './style.css';

function Footer({children}) {
  return (
    <div className='Footer'>
      {children}
    </div>
  )
}

Footer.propTypes = {
  pagination: PropTypes.node,
};

export default memo(Footer);