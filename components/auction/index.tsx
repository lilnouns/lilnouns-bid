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
    <div className="tw-bg-white tw-overflow-hidden tw-shadow tw-rounded-lg">
      <div
        className="tw-max-w-2xl tw-mx-auto tw-py-8 tw-px-4 sm:tw-py-8 sm:tw-px-6 lg:tw-max-w-5xl lg:tw-px-8 lg:tw-grid lg:tw-grid-cols-2 lg:tw-gap-x-8">
        {/* Auction details */}
        <div className="lg:tw-max-w-lg lg:tw-self-end">

          <div className="tw-mt-4">
            <h1 className="tw-text-3xl tw-font-extrabold tw-tracking-tight tw-text-gray-900 sm:tw-text-4xl">{tokenData?.name}</h1>
          </div>

          <section aria-labelledby="information-heading" className="tw-mt-4">
            <h2 id="information-heading" className="tw-sr-only">
              Auction information
            </h2>

            <div className="tw-flex tw-items-center">
              <p
                className="tw-text-lg tw-text-gray-900 sm:tw-text-xl">{formatUnits(auction?.amount ?? "0", "ether")} Ξ</p>
            </div>

            <div className="tw-mt-4 tw-space-y-6">
              <p className="tw-text-base tw-text-gray-500">
                Choose one of the options below and then register your offer. The best offer will be automatically
                calculated and will be calculated after your approval over your wallet.
              </p>
            </div>

          </section>
        </div>

        {/* Auction image */}
        <div className="tw-mt-10 lg:tw-mt-0 lg:tw-col-start-2 lg:tw-row-span-2 lg:tw-self-center">
          <div className="tw-aspect-w-1 tw-aspect-h-1 tw-rounded-lg tw-overflow-hidden">
            <img src={tokenData?.image} alt={tokenData?.name} className="tw-w-full tw-h-full tw-object-center tw-object-cover"/>
          </div>
        </div>

        {/* Auction form */}
        <div className="tw-mt-10 lg:tw-max-w-lg lg:tw-col-start-1 lg:tw-row-start-2 lg:tw-self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="tw-sr-only">
              Auction options
            </h2>

            <form>
              <div className="sm:tw-flex sm:tw-justify-between">
                {/* Type selector */}
                <RadioGroup
                  value={selectedType}
                  onChange={setSelectedType}
                  disabled={auctionState !== AuctionState.ACTIVE}
                >
                  <RadioGroup.Label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700">Type</RadioGroup.Label>
                  <div className="tw-mt-1 tw-grid tw-grid-cols-1 tw-gap-4 sm:tw-grid-cols-2">
                    {types.map((type, index) => (
                      <RadioGroup.Option
                        as="div"
                        key={index}
                        value={type}
                        className={({active}) =>
                          classNames(
                            active ? 'tw-ring-2 tw-ring-neutral-500' : '',
                            'tw-relative tw-block tw-border tw-border-gray-300 tw-rounded-lg tw-p-4 tw-cursor-pointer focus:tw-outline-none'
                          )
                        }
                      >
                        {({active, checked}) => (
                          <>
                            <RadioGroup.Label as="p" className="tw-text-base tw-font-medium tw-text-gray-900">
                              {type.name}
                            </RadioGroup.Label>
                            <RadioGroup.Description as="p" className="tw-mt-1 tw-text-sm tw-text-gray-500">
                              {type.description}
                            </RadioGroup.Description>
                            <div
                              className={classNames(
                                active ? 'tw-border' : 'tw-border-2',
                                checked ? 'tw-border-neutral-500' : 'tw-border-transparent',
                                'tw-absolute -tw-inset-px tw-rounded-lg tw-pointer-events-none'
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

              <div className="tw-mt-10">
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
