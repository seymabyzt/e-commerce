"use client";

export default function FilterBar({ onSelectCategory, onSelectSort, onSelectPrice }) {
  const categories = ["T-shirt", "Shorts", "Shirt", "Jeans"];

  // Kategori seçildiğinde
  const handleCategoryClick = (category) => {
    onSelectCategory(category); // Parent state günceller
  };

  // Sıralama seçildiğinde
  const handleSortChange = (e) => {
    onSelectSort(e.target.value);
  };

  const handlePriceChange = (e) => {
    onSelectPrice(Number(e.target.value)); 
  };

  return (
    <div className="filterBar">
      <h4>Filters</h4>

      <div className="categories mb-3">
        {categories.map((cat, i) => (
          <div key={i} onClick={() => handleCategoryClick(cat)}>
            {cat}
          </div>
        ))}
      </div>

      <h4>Price</h4>
      <input type="range"
             min="0" max="500"
             onChange={handlePriceChange} />

      <h4>Sort</h4>
      <select onChange={handleSortChange}>
        <option value="Products">Default</option>
        <option value="Popular">Popular</option>
        <option value="Highest Rating">Highest Rating</option>
        <option value="Newest">Newest</option>
      </select>
    </div>
  );
}
