import {useContractRead} from "wagmi";
import contract from "../json/lilnouns-auction.json";
import {BigNumber} from "ethers";
import {useMemo} from "react";

// Extract contract info
const {abi, address} = contract;

export interface AuctionInterface {
  nounId: BigNumber
  amount: BigNumber
  startTime: BigNumber
  endTime: BigNumber
  bidder: string
  settled: boolean
}

export type AuctionResult = ReturnType<typeof useContractRead> & {
  data?: AuctionInterface
};

export const useAuction = () => {
  const result = useContractRead({
    address,
    abi,
    functionName: 'auction',
    watch: true,
  }) as AuctionResult;

  return useMemo(() => {
    return result.data ?? {
      nounId: BigNumber.from(0),
      amount: BigNumber.from(0),
      startTime: BigNumber.from(0),
      endTime: BigNumber.from(0),
      bidder: "",
      settled: false,
    };
  }, [result])
};
