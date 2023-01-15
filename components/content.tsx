import {Auction, ContentHero} from "./";

type Props = {};

export const Content = ({}: Props) => {
  return (
    <main className="tw-mt-16 tw-mx-auto tw-max-w-5xl tw-px-4 sm:tw-mt-24 tw-min-h-screen">
      <ContentHero/>

      <section>
        <Auction />
      </section>
    </main>
  )
};
