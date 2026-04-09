import React from "react";
import ProductCard from "./Productcard";

export default function ProductListings({ products }) {
  return (
    <div className="product-listings-container">
      <div className="product-listings-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <p className="product-listing-empty">No Products Found</p>
        )}
      </div>
    </div>
  );
}
