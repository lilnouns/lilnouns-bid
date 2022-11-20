import {useContractRead} from "wagmi";
import contract from "../json/lilnouns-auction.json";
import {useMemo} from "react";
import {useAuction, useReservePrice} from "./";
import {BigNumber} from "ethers";

// Extract contract info
const {abi, address} = contract;

export type MinBidIncrementPercentageResult = ReturnType<typeof useContractRead> & {
  data?: number
}

export const useBestBid = () => {
  const {amount: currentBid} = useAuction();
  const reservePrice = useReservePrice();

  const result = useContractRead({
    address,
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
      console.log(minBidIncrementPercentage / 100)
      _bestBid = currentBid.mul(minBidIncrementPercentage).div(100).add(currentBid)
    }

    return _bestBid;
  }, [currentBid, reservePrice, result])
}
