"use client";

import FilterBar from "../../components/FilterBar/FilterBar";
import ProductShow from "../../components/ProductShow/ProductShow";
import { useState, useMemo } from "react";
import React from "react";

 function ProductPageClient({ data, params }) {
  // 1. Filtre ile ilgili state'leri burada tutun
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSort, setSelectedSort] = useState("Products");
  const [maxPrice, setMaxPrice] = useState(500);

  // 2. Filtreleme ve sıralama işlemlerini bir "useMemo" içinde yapabilirsiniz
  const filteredData = useMemo(() => {
    let result = [...data]; // Orijinali bozmamak adına kopya al

    // a) params ile gelen arama kelimesi vs. (örnek)
    if (params?.id?.[0] && params.id[0] !== "all") {
      const searchParam = params.id[0].toLowerCase();
      result = result.filter(item =>
        item.name.toLowerCase().includes(searchParam) ||
        item.description.toLowerCase().includes(searchParam)
      );
    }

    // b) Kategori filtresi
    if (selectedCategory) {
      result = result.filter(item =>
        item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // c) Fiyat filtresi
    result = result.filter(item => item.price <= maxPrice);

    // d) Sıralama
    switch (selectedSort) {
      case "Popular":
        // Örneğin topSelling == true olanları listele
        result = result.filter(item => item.topSelling);
        break;
      case "Highest Rating":
        // Rating'e göre büyükten küçüğe
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "Newest":
        // newArrivals == true olanları al
        result = result.filter(item => item.newArrivals);
        break;
      default:
      // "Products" -> dokunma
    }

    return result;
  }, [data, params, selectedCategory, maxPrice, selectedSort]);

  return (
    <div className='d-flex gap-3 p-3'>
      <div className="col-lg-3">
        <FilterBar
          onSelectCategory={setSelectedCategory}
          onSelectSort={setSelectedSort}
          onSelectPrice={setMaxPrice}
        />
      </div>

      <div className="col-lg-9 ">
        <ProductShow data={filteredData} selectedSort={selectedSort} />
      </div>
    </div>
  );
}
export default ProductPageClient;
