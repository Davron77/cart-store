import ProductItem from "../components/product/product-item";
import Container from "../components/ui/Container";
import { products } from "../data/product";

const Products = () => {
  return (
    <Container>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight ">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((item, index) => (
            <ProductItem {...item} key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Products;
