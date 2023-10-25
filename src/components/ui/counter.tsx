import cn from "classnames";
import MinusIcon from "../icons/minus-icon";
import PlusIcon from "../icons/plus-icon";

type CounterProps = {
  quantity: number;
  onDecrement: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onIncrement: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disableIncrement?: boolean;
  disableDecrement?: boolean;
  variant?: "default" | "dark";
  className?: string;
  cartButton?: () => void;
  setQuantity?: (quantity: number) => void;
  addToCartInput?: (value: string) => void;
};

const Counter: React.FC<CounterProps> = ({
  quantity,
  onDecrement,
  onIncrement,
  disableIncrement = false,
  disableDecrement = false,
  variant = "default",
  cartButton,
  setQuantity,
  addToCartInput,
}) => {
  const size = variant !== "dark" ? "12px" : "10px";

  const handleOnDecrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    onDecrement(e);
    cartButton && cartButton();
  };

  const handleOnIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    onIncrement(e);
    cartButton && cartButton();
  };

  const handleEnterNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity && setQuantity(parseInt(e.target.value, 10));
    addToCartInput && addToCartInput(e.target.value);
  };

  return (
    <div
      className={cn(
        "group flex items-center justify-between rounded overflow-hidden flex-shrink-0 h-10 shadow-navigation bg-[#1570EF]"
      )}
    >
      <button
        onClick={handleOnDecrement}
        className={cn(
          "flex items-center justify-center h-full flex-shrink-0 focus:outline-none w-12 text-heading bg-stone-900 "
        )}
        disabled={disableDecrement}
      >
        <MinusIcon width={size} />
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => handleEnterNumber(e)}
        className={cn(
          "font-semibold outline-none text-center h-full transition-colors duration-250 ease-in-out cursor-default text-base text-heading w-16 sm:w-10 lg:w-20 2xl:w-20 text-black"
        )}
      />
      <button
        onClick={handleOnIncrement}
        className={cn(
          "flex items-center justify-center h-full flex-shrink-0 focus:outline-none w-12 text-heading bg-stone-900 "
        )}
        disabled={disableIncrement}
      >
        <PlusIcon width={size} height={size} />
      </button>
    </div>
  );
};

export default Counter;
