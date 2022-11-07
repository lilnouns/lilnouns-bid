function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Props =  {
  auction?: any
}

export const AuctionButton = ({}: Props) => {
  return (
    <div className="mt-10">
      <button
        type="submit"
        className={classNames(
          'w-full bg-neutral-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-neutral-500'
        )}
      >
        Bid Now
      </button>
    </div>
  );
};
