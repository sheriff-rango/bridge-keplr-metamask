import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { WalletType } from "../../constant/enums";

import {
  Wrapper,
  Loading,
  SubmissionItem,
  SubmissionItemTitle,
  SubmissionItemContent,
} from "./styled";

const Submission: React.FC = () => {
  const history = useHistory();
  const inputs = useAppSelector((state) => state.inputs);
  const direction = inputs.direction;
  const connectedWallets = useAppSelector((state) => state.accounts);
  const { keplr: keplrWallet, metamask: metamaskWallet } = connectedWallets;

  useEffect(() => {
    if (!direction) history.push("/home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fromWalletAddress =
    direction?.from === WalletType.KEPLR ? keplrWallet.address : metamaskWallet;
  const toWalletAddress =
    direction?.to === WalletType.KEPLR ? keplrWallet.address : metamaskWallet;

  return (
    <Wrapper>
      <Loading type="spokes" color="#000" />
      <SubmissionItem>
        <SubmissionItemTitle>From</SubmissionItemTitle>
        <SubmissionItemContent>Source name</SubmissionItemContent>
        <SubmissionItemContent>{fromWalletAddress}</SubmissionItemContent>
        <SubmissionItemTitle color="black">Transferring</SubmissionItemTitle>
        <SubmissionItemContent>{inputs.amount}</SubmissionItemContent>
      </SubmissionItem>
      <SubmissionItem>
        <SubmissionItemTitle>To</SubmissionItemTitle>
        <SubmissionItemContent>Destination name</SubmissionItemContent>
        <SubmissionItemContent>{toWalletAddress}</SubmissionItemContent>
        <SubmissionItemTitle color="black">Receiving</SubmissionItemTitle>
        <SubmissionItemContent>5000</SubmissionItemContent>
      </SubmissionItem>
    </Wrapper>
  );
};

export default Submission;
