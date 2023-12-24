import cl from "./Search.module.css";

interface SearchProps {
  keywords: string | number | readonly string[] | undefined;
  changeFilter: (
    prop: string,
    value: string | number | readonly string[] | undefined
  ) => void;
}

const Search = ({ keywords, changeFilter }: SearchProps) => {
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
