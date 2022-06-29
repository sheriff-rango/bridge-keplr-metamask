import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { WalletType } from "../../constant/enums";

import {
  Wrapper,
  Header,
  HeaderChainType,
  StyledSvg,
  ReviewItem,
  ReviewItemTitle,
  ReviewItemContent,
  ReviewResultContainer,
  ReviewResultItem,
  ReviewResultTitle,
  ReviewResultContent,
  StyledButton as Button,
} from "./styled";

const ChangeArrow = (props: any) => (
  <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" />
  </StyledSvg>
);

const ReviewTransaction: React.FC = () => {
  const history = useHistory();
  const inputsConfig = useAppSelector((state) => state.inputs);
  const direction = inputsConfig.direction;

  useEffect(() => {
    if (!direction) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header>
        <HeaderChainType
          walletType={WalletType[direction?.from || WalletType.KEPLR]}
        />
        <ChangeArrow />
        <HeaderChainType
          walletType={WalletType[direction?.to || WalletType.METAMASK]}
        />
      </Header>
      <ReviewItem>
        <ReviewItemTitle>Asset</ReviewItemTitle>
        <ReviewItemContent>{inputsConfig.asset}</ReviewItemContent>
      </ReviewItem>
      <ReviewItem>
        <ReviewItemTitle>Amount</ReviewItemTitle>
        <ReviewItemContent>{inputsConfig.amount}</ReviewItemContent>
      </ReviewItem>
      <ReviewResultContainer>
        <ReviewResultItem>
          <ReviewResultTitle>Fee</ReviewResultTitle>
          <ReviewResultContent>0</ReviewResultContent>
        </ReviewResultItem>
        <ReviewResultItem>
          <ReviewResultTitle>You will receive</ReviewResultTitle>
          <ReviewResultContent>5000</ReviewResultContent>
        </ReviewResultItem>
      </ReviewResultContainer>
      <Button onClick={() => history.push("/confirm")}>Confirm transfer</Button>
    </Wrapper>
  );
};

export default ReviewTransaction;
