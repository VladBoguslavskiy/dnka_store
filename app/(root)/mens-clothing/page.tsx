"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/actions/actions";

const MensClothing = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const allProducts = await getProducts();
      const filteredProducts = allProducts.filter((product: ProductType) =>
        product.tags.includes("Чоловічий")
      );
      setProducts(filteredProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
      <p className="text-heading3-bold">Чоловічий одяг</p>
      <div className="flex flex-wrap gap-16 mx-auto mt-8">
        {products.length > 0 ? (
          products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>Немає товарів у цій категорії.</p>
        )}
      </div>
    </div>
  );
};

export default MensClothing;
