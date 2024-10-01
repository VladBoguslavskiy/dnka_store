import ManProducts from "@/components/ManProducts"; // шлях до компонента ProductList

const MensClothingPage = () => {
  return (
    <div>
      <h1>Чоловічий одяг</h1>
      <ManProducts /> {/* Підключаємо компонент зі списком товарів */}
    </div>
  );
};

export default MensClothingPage;
