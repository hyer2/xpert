import React, { useState } from "react";

const Pagination = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleChangePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedData = data.slice(startIndex, endIndex);

  return (
    <div>
      <div>
        {displayedData.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      <div>
        <button onClick={() => handleChangePage(currentPage - 1)}>이전</button>
        <span>
          {currentPage}/{totalPages}
        </span>
        <button onClick={() => handleChangePage(currentPage + 1)}>다음</button>
      </div>
    </div>
  );
};

export default Pagination;
