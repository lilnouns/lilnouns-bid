import {useContractRead} from "wagmi";
import abi from "../json/lilnouns-auction.json";
import {useMemo} from "react";
import {BigNumber} from "ethers";

export type ReservePriceResult = ReturnType<typeof useContractRead> & {
  data?: BigNumber
}

export const useReservePrice = () => {
  const address = process.env.NEXT_PUBLIC_LILNOUNS_AUCTION_CONTRACT ?? '';

  const result = useContractRead({
    address,
    abi,
    functionName: 'reservePrice',
    watch: false,
  }) as ReservePriceResult;

  return useMemo(() => result.data ?? BigNumber.from(0), [result])
}
