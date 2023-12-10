import cl from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, isLoading, setCurrentPage }) => {
  return (
    <div className={cl.pagination}>
      <button
        disabled={currentPage === 1 || isLoading}
        className={cl.btn}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        {"<"}
      </button>
      <ul className={cl.list} role="list">
        {[...Array(totalPages)].map((_, index) => (
          <li key={index}>
            <button
              disabled={isLoading}
              onClick={() => setCurrentPage(index + 1)}
              className={
                currentPage === index + 1 ? cl.btn + " " + cl.active : cl.btn
              }
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
      <button
        disabled={currentPage === totalPages || isLoading}
        className={cl.btn}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
