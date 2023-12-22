import { forwardRef } from "react";
import cl from "./Categories.module.css";

const Categories = forwardRef(
  ({ categories, selectedCategory, newsIsLoading, changeFilter }, ref) => {
    return (
      <div ref={ref} className={cl.categories}>
        <ul className={cl.list} role="list">
          <li className={cl.item}>
            <button
              disabled={newsIsLoading}
              className={
                selectedCategory === "all" ? cl.btn + " " + cl.active : cl.btn
              }
              onClick={() => changeFilter("category", null)}
            >
              all
            </button>
          </li>
          {categories.map((category) => (
            <li key={category} className={cl.item}>
              <button
                disabled={newsIsLoading}
                className={
                  category === selectedCategory
                    ? cl.btn + " " + cl.active
                    : cl.btn
                }
                onClick={() => changeFilter("category", category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

Categories.displayName = "Categories";

export default Categories;
