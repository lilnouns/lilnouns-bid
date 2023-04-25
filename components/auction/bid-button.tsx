import {MouseEvent, useEffect, useState} from "react";
import {Address, useAccount, useContractWrite, usePrepareContractWrite} from "wagmi";
import abi from "../../json/lilnouns-auction.json";
import {BigNumber} from "ethers";
import clsx from "clsx";

type Props = {
  nounId?: BigNumber
  amount?: BigNumber
};

export function BidButton({nounId, amount}: Props) {
  const [isDisabled, setDisabled] = useState(false);
  const {isDisconnected} = useAccount();

  useEffect(() => {
    if (isDisconnected) {
      setDisabled(true);
    }
  }, [isDisconnected])

  const {config} = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_LILNOUNS_AUCTION_CONTRACT as Address,
    abi,
    functionName: 'createBid',
    args: [nounId],
    overrides: {value: amount},
  })
  const {write} = useContractWrite(config)

  const buttonHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    write?.()
  };

  return (
    <button
      type="submit"
      disabled={isDisabled}
      onClick={buttonHandler}
      className={clsx(
        isDisabled ? "tw-opacity-50 tw-cursor-not-allowed" : "tw-hover:bg-neutral-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-offset-gray-50 focus:tw-ring-neutral-500",
        "tw-w-full tw-bg-neutral-600 tw-border tw-border-transparent tw-rounded-md tw-py-3 tw-px-8 tw-flex tw-items-center tw-justify-center tw-text-base tw-font-medium tw-text-white"
      )}
    >
      Bid Now
    </button>
  );
}
