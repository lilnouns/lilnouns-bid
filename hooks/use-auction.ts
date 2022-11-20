import {useContractRead} from "wagmi";
import abi from "../json/lilnouns-auction.json";
import {BigNumber} from "ethers";
import {useMemo} from "react";

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
  const address = process.env.NEXT_PUBLIC_LILNOUNS_AUCTION_CONTRACT ?? '';

  const result = useContractRead({
    address,
    abi,
    functionName: 'auction',
    watch: true,
  }) as AuctionResult;

  return useMemo(() => result.data, [result])
};
