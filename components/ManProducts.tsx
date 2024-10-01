"use client"; // Додати цю директиву, якщо компонент використовує React hooks

import { useEffect, useState } from "react";
import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true); // Стан для завантаження

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const fetchedProducts = await getProducts();
      const filteredProducts = fetchedProducts.filter((product: ProductType) => 
        product.tags.includes('Чоловічий')
      );
      setProducts(filteredProducts);
      setLoading(false);
    };

    fetchProducts();

    // Якщо потрібно перезавантажити продукти, наприклад, через кілька секунд:
    const intervalId = setInterval(fetchProducts, 5000); // Оновлення кожні 5 секунд

    return () => clearInterval(intervalId); // Очистка інтервалу при демонтажі
  }, []);

  if (loading) {
    return <p>Завантаження...</p>; // Повідомлення про завантаження
  }

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Товари</p>
      {products.length === 0 ? (
        <p className="text-body-bold">Товари не знайдені</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
