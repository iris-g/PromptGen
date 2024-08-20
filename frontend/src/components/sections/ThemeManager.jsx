import React, { useState, useEffect } from 'react';
import ThemeCategory from '../themes/ThemeCategory';
import categoriesData from '../../assets/conceptsData.json';



const ThemeManager = ({ selectedItems, handleItemClick }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Load and set the categories data
    setCategories(categoriesData.mathematicalConcepts);
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <ThemeCategory
          key={category.category}
          category={category.category}
          items={category.items.map(item => item.name)}
          selectedItems={selectedItems}
          handleItemClick={handleItemClick}
        />
      ))}
    </div>
  );
};

export default ThemeManager;
