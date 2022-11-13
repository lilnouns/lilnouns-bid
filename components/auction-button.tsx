import {MouseEvent} from "react";
import {AuctionInterface} from "../hooks";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  auction: AuctionInterface,
  disabled: boolean
}

export const AuctionButton = ({auction, disabled}: Props) => {
  const buttonHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className="mt-10">
      <button
        type="submit"
        disabled={disabled}
        onClick={buttonHandler}
        className={classNames(
          disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-neutral-500',
          'w-full bg-neutral-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white'
        )}
      >
        Bid Now
      </button>
    </div>
  );
};
