import {MouseEvent, useEffect, useState} from "react";
import {AuctionInterface, AuctionState, useAuctionState} from "../hooks";
import {useAccount} from "wagmi";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  disabled?: boolean,
  auction?: AuctionInterface,
}

export const AuctionButton = ({auction, disabled}: Props) => {
  const [isDisabled, setDisabled] = useState(disabled);
  const {isDisconnected} = useAccount();
  const auctionState = useAuctionState();

  useEffect(()=>{
    if (auctionState === AuctionState.ACTIVE) {
      setDisabled(false);
    } else if (isDisconnected) {
      setDisabled(true);
    }
  }, [auctionState, isDisconnected])

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
          isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-neutral-500',
          'w-full bg-neutral-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white'
        )}
      >
        Bid Now
      </button>
    </div>
  );
};
