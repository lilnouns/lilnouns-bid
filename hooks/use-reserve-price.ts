import { BigNumber } from 'ethers'
import { useMemo } from 'react'
import { Address, useContractRead } from 'wagmi'
import abi from '../json/lilnouns-auction.json'

export type ReservePriceResult = ReturnType<typeof useContractRead> & {
  data?: BigNumber
}

export const useReservePrice = () => {
  const result = useContractRead({
    address: process.env.NEXT_PUBLIC_LILNOUNS_AUCTION_CONTRACT as Address,
    abi,
    functionName: 'reservePrice',
    watch: false,
  }) as ReservePriceResult

  return useMemo(() => result.data ?? BigNumber.from(0), [result])
}
