import {useContractRead} from "wagmi";
import contract from "../json/lilnouns-auction.json";
import {useMemo} from "react";

// Extract contract info
const {abi, address} = contract;

export interface TokenDataInterface {
  name: string
  image: string
  description: string
}

export type DataUriResult = ReturnType<typeof useContractRead> & {
  data?: string
}

export const useTokenData = (tokenId: number) => {
  const result = useContractRead({
    address,
    abi,
    functionName: 'dataURI',
    args: [tokenId]
  }) as DataUriResult;

  return useMemo(() => {
    if (!result) {
      return undefined;
    }

    try {
      const json = Buffer.from(`${result?.data}`.substring(29), 'base64').toString();
      const data: TokenDataInterface = JSON.parse(json);
      return data;
    } catch (e) {
      console.error(e)
    }
  }, [result])
};
