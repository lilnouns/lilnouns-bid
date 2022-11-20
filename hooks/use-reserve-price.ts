import {useContractRead} from "wagmi";
import contract from "../json/lilnouns-auction.json";
import {useMemo} from "react";
import {BigNumber} from "ethers";

// Extract contract info
const {abi, address} = contract;

export type ReservePriceResult = ReturnType<typeof useContractRead> & {
  data?: BigNumber
}

export const useReservePrice = () => {
  const result = useContractRead({
    address,
    abi,
    functionName: 'reservePrice',
    watch: false,
  }) as ReservePriceResult;

  return useMemo(() => result.data ?? BigNumber.from(0), [result])
}
