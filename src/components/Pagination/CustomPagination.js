import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";

export default function CustomPagination({ setPage, numOfPages }) {
  // Scroll to top when page changes
  const handlePageChange = (value) => {
    setPage(value);
  };

  // useEffect(() => {
  //   if (!currentPage) {
  //     setCurrentPage(1);
  //   }
  // }, [currentPage]);

  return (
    <div
      style={{
        maxWidth: "100%",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        margin: "3rem auto",
        background: "#fff",
        padding: "2px",
        borderRadius: "10px",
      }}
    >
      <Pagination
        onChange={(e) => handlePageChange(e.target.textContent)}
        count={numOfPages}
        color="primary"
        // page={currentPage}

        // size="small"
        // hideNextButton
        // hidePrevButton
      />
    </div>
  );
}
