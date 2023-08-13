import { Stack } from "@mui/material";
import { categories } from "../../constants/category";
import { colors } from "../../constants/colors";

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {categories.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{
            background: item.name === selectedCategory && colors.secondary,
            color: item.name === selectedCategory && "#fff",
          }}
          onClick={() => selectedCategoryHandler(item.name)}
        >
          <span
            style={{
              color: item.name === selectedCategory ? "#fff" : colors.secondary,
              marginRight: "15px",
            }}
          >
            {item.icon}
          </span>
          <span style={{ opacity: "1px" }}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
