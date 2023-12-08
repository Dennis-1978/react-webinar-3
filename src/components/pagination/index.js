import React, { useState, useEffect, useMemo } from "react";
import { cn as bem } from "@bem-react/classname";

import { changePaginate } from "../../utils";

import "./style.css";

function Pagination({ countGoods, goodsPerPage = 10 }) {
  const cn = bem("Pagination");

  const [currentPage, setCurrentPage] = useState(1);
  const [arrOfCurrButtons, setArrOfCurrButtons] = useState([]);

  const pages = useMemo(
    () => Math.round(countGoods / goodsPerPage),
    [countGoods]
  );

  

  useEffect(() => {
    changePaginate(currentPage, pages, setArrOfCurrButtons)
  }, [currentPage, pages]);

  return (
    <div className={cn()}>
      {arrOfCurrButtons.map((page, i) => {
        return (
          <button
            onClick={(e) => setCurrentPage(page)}
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

export default React.memo(Pagination);
