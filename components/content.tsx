import { Auction, ContentHero } from './'

type Props = {}

export const Content = ({}: Props) => {
  return (
    <main className="tw-mx-auto tw-mt-16 tw-min-h-screen tw-max-w-5xl tw-px-4 sm:tw-mt-24">
      <ContentHero />

      <section>
        <Auction />
      </section>
    </main>
  )
}
