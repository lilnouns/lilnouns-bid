import {useEffect, useState} from 'react'
import {RadioGroup} from '@headlessui/react'
import {AuctionInterface, TokenDataInterface, useAverageBid, useBestBid} from "../hooks";
import {useIdle} from "react-use";
import {ethers} from "ethers";
import {AuctionButton} from "./auction-button";
import dayjs from "dayjs";

const product = {
  types: [
    {name: '0.15 Ξ', description: 'Best bid based on current auction bids.'},
    {name: '0.16 Ξ', description: 'Average best bid based on past auction wins.'},
  ],
}

type Props = {
  auction: AuctionInterface;
  tokenData: TokenDataInterface;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Auction = ({auction, tokenData}: Props) => {
  const isIdle = useIdle(60e3);
  const [selectedType, setSelectedType] = useState(product.types[0]);
  const [isAuctionActive, setAuctionActive] = useState(false);

  const bestBid = useBestBid();
  const averageBid = useAverageBid();

  useEffect(() => {
    const currentTime = dayjs();
    const endOfAuction = dayjs.unix(auction.endTime.toNumber());

    if (currentTime.isBefore(endOfAuction)) {
      setAuctionActive(true);
      product.types[0].name = ethers.utils.formatEther(bestBid);
      product.types[1].name = ethers.utils.formatEther(averageBid);
    }

  }, [auction, averageBid, bestBid, isIdle])

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div
        className="max-w-2xl mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Auction details */}
        <div className="lg:max-w-lg lg:self-end">

          <div className="mt-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{tokenData.name}</h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Auction information
            </h2>

            <div className="flex items-center">
              <p
                className="text-lg text-gray-900 sm:text-xl">{ethers.utils.formatUnits(auction?.amount ?? "0", "ether")} Ξ</p>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">
                Choose one of the options below and then register your offer. The best offer will be automatically
                calculated and will be calculated after your approval over your wallet.
              </p>
            </div>

          </section>
        </div>

        {/* Auction image */}
        <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img src={tokenData?.image} alt={tokenData?.name} className="w-full h-full object-center object-cover"/>
          </div>
        </div>

        {/* Auction form */}
        <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Auction options
            </h2>

            <form>
              <div className="sm:flex sm:justify-between">
                {/* Type selector */}
                <RadioGroup value={selectedType} onChange={setSelectedType} disabled={!isAuctionActive}>
                  <RadioGroup.Label className="block text-sm font-medium text-gray-700">Type</RadioGroup.Label>
                  <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {product.types.map((type) => (
                      <RadioGroup.Option
                        as="div"
                        key={type.name}
                        value={type}
                        className={({active}) =>
                          classNames(
                            active ? 'ring-2 ring-neutral-500' : '',
                            'relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none'
                          )
                        }
                      >
                        {({active, checked}) => (
                          <>
                            <RadioGroup.Label as="p" className="text-base font-medium text-gray-900">
                              {type.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description as="p" className="mt-1 text-sm text-gray-500">
                              {type.description}
                            </RadioGroup.Description>
                            <div
                              className={classNames(
                                active ? 'border' : 'border-2',
                                checked ? 'border-neutral-500' : 'border-transparent',
                                'absolute -inset-px rounded-lg pointer-events-none'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <AuctionButton disabled={!isAuctionActive} auction={auction}/>

            </form>
          </section>
        </div>
      </div>
    </div>
  )
};
