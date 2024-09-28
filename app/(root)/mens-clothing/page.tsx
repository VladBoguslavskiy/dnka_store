import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/actions/actions";

const MensClothing = async () => {
  // Отримуємо всі товари для чоловічого одягу
  const mensClothingProducts = await getProducts(); // Передайте тег "чоловічий"

  // Фільтруємо товари за тегом "чоловічий"
  const filteredProducts = mensClothingProducts.filter((product: ProductType) =>
    product.tags.includes("Чоловічий") // Перевіряємо, чи містить масив тегів "чоловічий"
  );

  return (
    <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
      <p className="text-heading3-bold">Чоловічий одяг</p>
      <div className="flex flex-wrap gap-16 mx-auto mt-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>Немає товарів у цій категорії.</p> // Показати повідомлення, якщо немає товарів
        )}
      </div>
    </div>
  );
};

export default MensClothing;
