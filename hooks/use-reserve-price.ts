import {useContractRead} from "wagmi";
import LilNounsAuctionReference from "../json/lilnouns-auction.json";
import {useMemo} from "react";
import {BigNumber} from "ethers";

export type ReservePriceResult = ReturnType<typeof useContractRead> & {
  data?: BigNumber
}

export const useReservePrice = () => {
  const result = useContractRead({
    address: LilNounsAuctionReference.address,
    abi: LilNounsAuctionReference.abi,
    functionName: 'reservePrice',
    watch: false,
  }) as ReservePriceResult;

  return useMemo(() => result.data ?? BigNumber.from(0), [result])
}
