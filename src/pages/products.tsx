import ProductItem from "../components/product/product-item";
import Container from "../components/ui/Container";
import { useCart } from "../context/useCart";
import { products } from "../data/product";
import { checkCart } from "../utils/utils";

const Products = () => {
  const { items } = useCart();

  return (
    <Container>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight ">Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((item, index) => (
            <ProductItem
              {...item}
              key={index}
              isCart={checkCart(item.id, items)}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Products;
