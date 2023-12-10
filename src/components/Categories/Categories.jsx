import cl from "./Categories.module.css";

const Categories = ({
  categories,
  selectedCategory,
  isLoading,
  setSelectedCategory,
}) => {
  return (
    <div className={cl.categories}>
      <ul className={cl.list} role="list">
        {categories.map((category) => (
          <li key={category} className={cl.item}>
            <button
              disabled={isLoading}
              className={
                category === selectedCategory
                  ? cl.btn + " " + cl.active
                  : cl.btn
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
