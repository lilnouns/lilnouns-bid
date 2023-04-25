import { useEffect, useMemo, useState } from 'react'
import auctionContract from '../json/lilnouns-auction.json'
import tokenContract from '../json/lilnouns-token.json'

export const useContractAbi = (contract: string) => {
  const [contractAbi, setContractAbi] = useState<readonly {}[]>([])

  useEffect(() => {
    if (contract === 'token') {
      setContractAbi(tokenContract)
    } else {
      setContractAbi(auctionContract)
    }
  }, [contract])

  return useMemo(() => contractAbi, [contractAbi])
}
