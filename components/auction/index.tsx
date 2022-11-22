import {useEffect, useState} from 'react'
import {RadioGroup} from '@headlessui/react'
import {AuctionState, useAuction, useAuctionState, useAverageBid, useBestBid, useTokenData} from "../../hooks";
import {useIdle} from "react-use";
import {BigNumber} from "ethers";
import {SettleButton} from "./settle-button";
import {BidButton} from "./bid-button";
import {formatEther, formatUnits} from "ethers/lib/utils";

type Props = {};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Auction = ({}: Props) => {
  const isIdle = useIdle(60e3);
  const [selectedType, setSelectedType] = useState();

  const auction = useAuction();
  const nounId = auction?.nounId || BigNumber.from("0");
  const tokenData = useTokenData(nounId.toNumber())

  const bestBid = useBestBid();
  const averageBid = useAverageBid();
  const auctionState = useAuctionState();

  const [amount, setAmount] = useState<BigNumber>();

  const [types, setTypes] = useState([
    {name: `${formatEther(bestBid)} Ξ`, description: 'Best bid based on current auction bids.'},
    {name: `${formatEther(averageBid)} Ξ`, description: 'Average best bid based on past auction wins.'},
  ])

  useEffect(() => {
    setAmount(bestBid)
    setTypes([...types])
  }, [auction, averageBid, bestBid, isIdle, types])

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div
        className="max-w-2xl mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:max-w-5xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Auction details */}
        <div className="lg:max-w-lg lg:self-end">

          <div className="mt-4">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{tokenData?.name}</h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Auction information
            </h2>

            <div className="flex items-center">
              <p
                className="text-lg text-gray-900 sm:text-xl">{formatUnits(auction?.amount ?? "0", "ether")} Ξ</p>
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
                <RadioGroup
                  value={selectedType}
                  onChange={setSelectedType}
                  disabled={auctionState !== AuctionState.ACTIVE}
                >
                  <RadioGroup.Label className="block text-sm font-medium text-gray-700">Type</RadioGroup.Label>
                  <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {types.map((type, index) => (
                      <RadioGroup.Option
                        as="div"
                        key={index}
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

              <div className="mt-10">
                {auctionState === AuctionState.ACTIVE && <BidButton nounId={auction?.nounId} amount={amount}/>}
                {auctionState === AuctionState.OVER_NOT_SETTLED && <SettleButton/>}
              </div>

            </form>
          </section>
        </div>
      </div>
    </div>
  )
};
