import React,{useState} from "react";

function CategoryFilter({categories,onFilterChange}){
  const [selectedCategory,setSelectedCategory]=useState("All");

  const handleCategoryClick=(category)=>{
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button
      className={selectedCategory==="All"? "selected" : ""}
      onClick={()=>handleCategoryClick("All")}
    >
      All
      </button>
      {categories.map((category)=>(
        <button 
        key={category}
        className={selectedCategory===category? "selected" : ""}
        onClick={()=>handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
 
</div>
  );
}

export default CategoryFilter;
