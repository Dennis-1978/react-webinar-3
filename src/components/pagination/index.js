import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { cn as bem } from "@bem-react/classname";

import { changePaginate } from "../../utils";

import "./style.css";

function Pagination({ totalGoods, goodsPerPage, changeSkip }) {
  const cn = bem("Pagination");

  const [currentPage, setCurrentPage] = useState(1);
  const [arrCurrentPages, setArrCurrentPages] = useState([]);

  const pages = Math.ceil(totalGoods / goodsPerPage);

  useCallback(() => {
    return pages;
  },[]);

  useEffect(() => {
    changePaginate(currentPage, pages, setArrCurrentPages);
    changeSkip(currentPage);
  }, [currentPage, totalGoods]);

  return (
    <div className={cn()}>
      {arrCurrentPages.map((page, i) => {
        return (
          <button
            onClick={() => setCurrentPage(page)}
            className={
              currentPage === page && typeof page === "number"
                ? cn("active")
                : cn("button")
            }
            key={i}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

Pagination.propTypes = {
  totalGoods: PropTypes.number.isRequired,
  goodsPerPage: PropTypes.number,
  changeSkip: PropTypes.func.isRequired
};

export default React.memo(Pagination);
