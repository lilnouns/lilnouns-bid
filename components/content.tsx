import Hero from "./content/hero";
import Panel from "./panel";
import {useAuction, useLilNoun} from "../hooks";

type Props = {};

const Content = ({}: Props) => {
  const {data: auction} = useAuction();
  const {data: lilNoun} = useLilNoun(auction?.nounId?.toNumber())

  return (
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 min-h-screen">
      <Hero/>

      <section>
        <Panel auction={auction} lilNoun={lilNoun}/>
      </section>
    </main>
  )
};

export default Content
