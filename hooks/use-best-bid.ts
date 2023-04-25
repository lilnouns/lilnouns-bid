import {Address, useContractRead} from "wagmi";
import abi from "../json/lilnouns-auction.json";
import {useMemo} from "react";
import {useAuction, useReservePrice} from "./";
import {BigNumber} from "ethers";

export type MinBidIncrementPercentageResult = ReturnType<typeof useContractRead> & {
  data?: number
}

export const useBestBid = () => {
  const auction = useAuction();
  const reservePrice = useReservePrice();
  const currentBid = BigNumber.from(auction?.amount ?? reservePrice);

  const result = useContractRead({
    address: process.env.NEXT_PUBLIC_LILNOUNS_AUCTION_CONTRACT as Address,
    abi,
    functionName: 'minBidIncrementPercentage',
    watch: false,
  }) as MinBidIncrementPercentageResult;

  return useMemo(() => {
    let _bestBid: BigNumber;
    const minBidIncrementPercentage = result.data ?? 0;

    if (currentBid.lt(reservePrice)) {
      _bestBid = reservePrice;
    } else {
      _bestBid = currentBid.mul(minBidIncrementPercentage).div(100).add(currentBid)
    }

    return _bestBid;
  }, [currentBid, reservePrice, result])
}
