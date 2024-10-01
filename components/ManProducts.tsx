import { getProducts } from "@/lib/actions/actions";
import ProductCard from "./ProductCard";

const ProductList = async () => {
  const products = await getProducts();

  // Фільтруємо товари за тегом "чоловічий"
  const filteredProducts = products.filter((product: ProductType) => 
    product.tags.includes('Чоловічий')
  );

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Товари</p>
      {!filteredProducts || filteredProducts.length === 0 ? (
        <p className="text-body-bold">Товари не знайдені</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {filteredProducts.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
