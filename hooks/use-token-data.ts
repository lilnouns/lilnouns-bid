import {useContractRead} from "wagmi";
import abi from "../json/lilnouns-token.json";
import {useMemo} from "react";

export interface TokenDataInterface {
  name: string
  image: string
  description: string
}

export type DataUriResult = ReturnType<typeof useContractRead> & {
  data?: string
}

export const useTokenData = (tokenId: number) => {
  const address = process.env.NEXT_PUBLIC_LILNOUNS_TOKEN_CONTRACT ?? '';

  const result = useContractRead({
    address,
    abi,
    functionName: 'dataURI',
    args: [tokenId]
  }) as DataUriResult;

  return useMemo(() => {
    if (!result?.data) {
      return;
    }

    try {
      const json = Buffer.from(`${result.data}`.substring(29), 'base64').toString();
      const data: TokenDataInterface = JSON.parse(json);
      return data;
    } catch (error) {
      console.error(error);
    }
  }, [result])
};
