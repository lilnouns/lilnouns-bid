import { BigNumber } from 'ethers'
import { useMemo } from 'react'
import { useQuery } from 'urql'
import { useAuction } from './'

const query = `
  query Auctions($amount: BigInt = "0") {
    auctions(
      orderBy: startTime
      orderDirection: desc
      where: {amount_gt: $amount}
      first: 20
    ) {
      id
      amount
    }
  }
`

export const useAverageBid = () => {
  const auction = useAuction()
  const [{ data }] = useQuery({
    query,
    variables: { amount: (auction?.amount ?? 0).toString() },
  })

  const auctions: { id: number; amount: BigNumber }[] = useMemo(() => {
    return data ? data.auctions : []
  }, [data])

  return useMemo(() => {
    let total: BigNumber = BigNumber.from(0)
    auctions.forEach((auction) => (total = total.add(auction.amount)))
    return auctions.length == 0 ? total : total.div(auctions.length)
  }, [auctions])
}
