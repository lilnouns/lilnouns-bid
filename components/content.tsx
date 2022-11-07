import {useAuction, useLilNoun} from "../hooks";
import {ContentHero, Panel} from "./";

type Props = {};

export const Content = ({}: Props) => {
  const {data: auction} = useAuction();
  const {data: lilNoun} = useLilNoun(auction?.nounId?.toNumber())

  return (
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 min-h-screen">
      <ContentHero/>

      <section>
        <Panel auction={auction} lilNoun={lilNoun}/>
      </section>
    </main>
  )
};
