interface ProductItemType {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
}

const ProductItem: React.FC<ProductItemType> = (product) => {
  return (
    <div>
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="my-4 flex justify-between">
          <div>
            <h3 className="text-sm">
              <a href={product.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
              </a>
            </h3>
            <p className="mt-1 text-sm">{product.color}</p>
          </div>
          <p className="text-sm font-medium">{product.price}</p>
        </div>
      </div>
      <button className="bg-green-600 w-full py-2 rounded hover:bg-green-400">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
