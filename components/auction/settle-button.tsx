import {MouseEvent, useEffect, useState} from "react";
import {useAccount, useContractWrite, usePrepareContractWrite} from "wagmi";
import abi from "../../json/lilnouns-auction.json";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function SettleButton() {
  const [isDisabled, setDisabled] = useState(false);
  const {isDisconnected} = useAccount();

  useEffect(() => {
    if (isDisconnected) {
      setDisabled(true);
    }
  }, [isDisconnected]);

  const {config} = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_LILNOUNS_AUCTION_CONTRACT ?? '',
    abi,
    functionName: 'settleCurrentAndCreateNewAuction',
  })
  const {data, isLoading, isSuccess, write} = useContractWrite(config)

  const buttonHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    write?.()
  };

  return (
    <button
      type="submit"
      disabled={isDisabled}
      onClick={buttonHandler}
      className={classNames(
        isDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-neutral-500",
        "w-full bg-neutral-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white"
      )}
    >
      Settle Now
    </button>
  );
}
