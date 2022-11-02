import {useEffect, useState} from "react";
import {Auction, LilNoun} from "../hooks";
import {useIdle} from "react-use";

type Props = {
  auction: Auction;
  lilNoun: LilNoun;
};

export default function Panel({auction, lilNoun}: Props) {
  const isIdle = useIdle(60e3);

  useEffect(() => {
    console.log(lilNoun);
  }, [auction, isIdle, lilNoun])

  return (
    <div>
      <img src={lilNoun?.image} alt={lilNoun?.name}/>
      {lilNoun?.description}<br/>
      {/*Amount: {parseEther(auction?.amount?.toString())}<br/>*/}
      {/*Start: {auction.startTime.toNumber()}<br/>*/}
      {/*End: {auction.endTime.toNumber()}<br/>*/}
    </div>
  );
}
