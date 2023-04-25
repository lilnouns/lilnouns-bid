import clsx from 'clsx'
import { BigNumber } from 'ethers'
import { MouseEvent, useEffect, useState } from 'react'
import {
  Address,
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
} from 'wagmi'
import abi from '../../json/lilnouns-auction.json'

type Props = {
  nounId?: BigNumber
  amount?: BigNumber
}

export function BidButton({ nounId, amount }: Props) {
  const [isDisabled, setDisabled] = useState(false)
  const { isDisconnected } = useAccount()

  useEffect(() => {
    if (isDisconnected) {
      setDisabled(true)
    }
  }, [isDisconnected])

  const { config } = usePrepareContractWrite({
    address: process.env.NEXT_PUBLIC_LILNOUNS_AUCTION_CONTRACT as Address,
    abi,
    functionName: 'createBid',
    args: [nounId],
    overrides: { value: amount },
  })
  const { write } = useContractWrite(config)

  const buttonHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    write?.()
  }

  return (
    <button
      type="submit"
      disabled={isDisabled}
      onClick={buttonHandler}
      className={clsx(
        isDisabled
          ? 'tw-cursor-not-allowed tw-opacity-50'
          : 'tw-hover:bg-neutral-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-neutral-500 focus:tw-ring-offset-2 focus:tw-ring-offset-gray-50',
        'tw-flex tw-w-full tw-items-center tw-justify-center tw-rounded-md tw-border tw-border-transparent tw-bg-neutral-600 tw-px-8 tw-py-3 tw-text-base tw-font-medium tw-text-white',
      )}
    >
      Bid Now
    </button>
  )
}
