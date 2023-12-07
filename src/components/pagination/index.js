import React, { useState } from "react";
import { cn as bem } from "@bem-react/classname";

import "./style.css";

function Pagination({ totalPage }) {
  const cn = bem("Pagination");

  const onClick = (event) => setCurrentPage(Number(event.target.innerHTML));

  const [currentPage, setCurrentPage] = useState(1);

  const arr = [1, 2, 3];
  const dots = "...";

  let content;

  if (currentPage < 3) {
    content = (
      <>
        {arr.map((_, index) => (
          <button
            onClick={onClick}
            className={index + 1 === currentPage ? cn("active") : cn("button")}
            key={index}
          >
            {index + 1}
          </button>
        ))}
        {dots}
        <button>{totalPage}</button>
      </>
    );
  }

  if (currentPage === 3) {
    content = (
      <>
        {arr.concat(4).map((_, index) => (
          <button
            onClick={onClick}
            className={index + 1 === currentPage ? cn("active") : cn("button")}
            key={index}
          >
            {index + 1}
          </button>
        ))}
        {dots}
        <button>{totalPage}</button>
      </>
    );
  } 

  return <div className={cn("")}>{content}</div>;
}

export default React.memo(Pagination);
