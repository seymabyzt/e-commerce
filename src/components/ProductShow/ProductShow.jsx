"use client";

import Link from "next/link";
import "./ProductShow.sass";

export default function ProductShow({ data, selectedSort }) {
  return (
    <>
      <h4>{selectedSort}</h4>
      <div className="categoriesContainer">
        {data.map((item) => (
          <Link key={item.id} href={`/productdetail/${item.id}`}>
            <div className="boxPrd">
              <div className="imgContainer">
                <img src={item.image} alt="" />
              </div>
              <h2>{item.name}</h2>
              <div>Price: {item.price}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
