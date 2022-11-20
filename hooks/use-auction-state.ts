import {useAuction} from "./use-auction";
import {useEffect, useState} from "react";
import dayjs from "dayjs";

export enum AuctionState {
  NOT_STARTED,
  ACTIVE,
  OVER_NOT_SETTLED,
  OVER_AND_SETTLED
}

export const useAuctionState = () => {
  const auction = useAuction();
  const [auctionState, setAuctionState] = useState<AuctionState>();

  useEffect(()=>{
    const currentTime = dayjs();
    const endOfAuction = dayjs.unix(auction?.endTime?.toNumber() ?? 0);

    if (auction?.startTime.eq(0)) {
      setAuctionState(AuctionState.NOT_STARTED);
    } else if (auction?.settled) {
      setAuctionState(AuctionState.OVER_AND_SETTLED);
    } else if (currentTime.isBefore(endOfAuction)) {
      setAuctionState(AuctionState.ACTIVE);
    } else {
      setAuctionState(AuctionState.OVER_NOT_SETTLED);
    }
  }, [auction])

  return auctionState;
}
