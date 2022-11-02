import {useContractRead} from "wagmi";
import LilNounsAuctionReference from "../json/lilnouns-auction.json";
import {BigNumber} from "ethers";

export type Auction = {
  nounId: BigNumber
  amount: BigNumber
  startTime: BigNumber
  endTime: BigNumber
  bidder: string
  settled: boolean
}

export function useAuction() {
  const {data: auction, error} = useContractRead({
    address: LilNounsAuctionReference.address,
    abi: LilNounsAuctionReference.abi,
    functionName: 'auction',
    watch: true,
  });

  const {nounId, amount, startTime, endTime, bidder, settled} = auction as Auction || {}

  return {
    data: {nounId, amount, startTime, endTime, bidder, settled}, error
  }
}
