import {useContractRead} from "wagmi";
import LilNounsTokenReference from "../json/lilnouns-token.json";

export type LilNoun = {
  name: string
  image: string
  description: string
}

export const useLilNoun = (tokenId: number) => {
  const {data: dataURI, error} = useContractRead({
    address: LilNounsTokenReference.address,
    abi: LilNounsTokenReference.abi,
    functionName: 'dataURI',
    args: [tokenId]
  });

  const json = Buffer.from((dataURI as string || "").substring(29), 'base64').toString();
  const data = JSON.parse(json || "{}") as LilNoun;

  return {data, error}
};
