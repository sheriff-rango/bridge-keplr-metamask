import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import { WalletType } from "../../constant/enums";

import {
  Wrapper,
  Header,
  HeaderChainType,
  StyledSvg,
  AssetsContainer,
  InputContainer,
  StyledButton as Button,
} from "./styled";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../app/hooks";
import { clearAccounts } from "../../app/accountsSlice";
import { useHistory } from "react-router-dom";
import { clearInputs, setInput } from "../../app/inputSlice";
import { BridgeDirectionType } from "../../constant/types";

const ChangeArrow = (props: any) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M32 176h370.8l-57.38 57.38c-12.5 12.5-12.5 32.75 0 45.25C351.6 284.9 359.8 288 368 288s16.38-3.125 22.62-9.375l112-112c12.5-12.5 12.5-32.75 0-45.25l-112-112c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L402.8 112H32c-17.69 0-32 14.31-32 32S14.31 176 32 176zM480 336H109.3l57.38-57.38c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0l-112 112c-12.5 12.5-12.5 32.75 0 45.25l112 112C127.6 508.9 135.8 512 144 512s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L109.3 400H480c17.69 0 32-14.31 32-32S497.7 336 480 336z" />
  </StyledSvg>
);

const Home: React.FC = () => {
  const [bridgeDirection, setBridgeDirection] = useState<BridgeDirectionType>({
    from: WalletType.KEPLR,
    to: WalletType.METAMASK,
  });
  const [amount, setAmount] = useState();
  const [fee, setFee] = useState();

  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearAccounts());
    dispatch(clearInputs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const redirectToNext = () => {
    dispatch(
      setInput({ asset: "asset", amount, fee, direction: bridgeDirection })
    );
    history.push("/connect");
  };

  const handleChangeBridgeDirection = () => {
    setBridgeDirection({
      from: bridgeDirection.to,
      to: bridgeDirection.from,
    });
  };

  const handleClickConnectWallet = () => {
    if (!amount) {
      toast.error("Please input amount!");
      return;
    }
    if (!fee) {
      toast.error("Please input fee!");
      return;
    }
    redirectToNext();

    // if (bridgeDirection.from === WalletType.KEPLR) {
    //   connectKeplr();
    // } else if (bridgeDirection.from === WalletType.METAMASK) {
    //   connectMetamask();
    // }
  };

  const handleChangeInput = (field: "amount" | "fee", e: any) => {
    const {
      target: { value },
    } = e;
    if (field === "amount") {
      setAmount(value);
    } else if (field === "fee") {
      setFee(value);
    }
  };

  return (
    <Wrapper>
      <Header>
        <HeaderChainType walletType={WalletType[bridgeDirection.from]} />
        <ChangeArrow onClick={handleChangeBridgeDirection} />
        <HeaderChainType walletType={WalletType[bridgeDirection.to]} />
      </Header>
      <AssetsContainer>Assets</AssetsContainer>
      <InputContainer>
        <Input
          onChange={(e) => handleChangeInput("amount", e)}
          placeholder="Amount"
        />
      </InputContainer>
      <InputContainer>
        <Input
          onChange={(e) => handleChangeInput("fee", e)}
          placeholder="Transfer detail(Fee)"
        />
      </InputContainer>
      <Button onClick={handleClickConnectWallet}>Connect Wallets</Button>
    </Wrapper>
  );
};

export default Home;
