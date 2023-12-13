import cl from "./Search.module.css";

const Search = ({ keywords, changeFilter }) => {
  return (
    <div className={cl.search}>
      <input
        type="text"
        placeholder="Search..."
        className={cl.input}
        value={keywords}
        onChange={(e) => changeFilter("keywords", e.target.value)}
      />
    </div>
  );
};

export default Search;
