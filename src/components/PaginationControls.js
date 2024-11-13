"use client";

import styles from "./ActionBotton.module.css";
import { FaArrowDown } from "react-icons/fa";
const PaginationControls = ({ setCurrentPage, loading }) => (
  <div className="pagination">
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        className={`${styles.button} ${loading ? styles.loading : ""}`} // Add loading class for special styling
        onClick={setCurrentPage}
        disabled={loading}
      >
        {!loading && <FaArrowDown className={styles.arrowIcon} />}

        <span>{loading ? "Loading..." : "Load More"}</span>
      </button>
    </div>
  </div>
);

export default PaginationControls;
