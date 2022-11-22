import {useAuction, useTokenData} from "../hooks";
import {Auction, ContentHero} from "./";
import {BigNumber} from "ethers";

type Props = {};

export const Content = ({}: Props) => {
  return (
    <main className="mt-16 mx-auto max-w-5xl px-4 sm:mt-24 min-h-screen">
      <ContentHero/>

      <section>
        <Auction />
      </section>
    </main>
  )
};
