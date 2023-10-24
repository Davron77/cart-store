import { useCart } from "../../context/useCart";

interface ProductItemType {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: number;
  color: string;
  isCart: boolean;
}

const ProductItem: React.FC<ProductItemType> = (product) => {
  const { id, name, href, imageSrc, imageAlt, price, color, isCart } = product;

  const { addToCart, removeToCart } = useCart();

  return (
    <div>
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="my-4 flex justify-between">
          <div>
            <h3 className="text-sm">
              <a href={href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {name}
              </a>
            </h3>
            <p className="mt-1 text-sm">{color}</p>
          </div>
          <p className="text-sm font-medium">${price}</p>
        </div>
      </div>
      {isCart ? (
        <button
          onClick={() => removeToCart(id)}
          className="bg-red-600 w-full py-2 rounded hover:bg-red-400"
        >
          Remove to Cart
        </button>
      ) : (
        <button
          onClick={() => addToCart(id, 1, price, imageSrc, name, color)}
          className="bg-green-600 w-full py-2 rounded hover:bg-green-400"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductItem;
