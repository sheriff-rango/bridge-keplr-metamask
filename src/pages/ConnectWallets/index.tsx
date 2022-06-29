import React, { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { useWalletManager } from "@noahsaso/cosmodal";
import useMetamask from "../../hooks/useMetamask";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Button from "../../components/Button";
import { WalletConnectStatus, WalletType } from "../../constant/enums";

import {
  Wrapper,
  WalletConnectStatusContainer,
  WalletConnectStatusItem,
  WalletConnectStatusTitle,
  WalletConnectProgress,
  ConnectWalletTitle,
  ConnectWalletSubTitle,
  CurrentWalletImage,
} from "./styled";
import { setAccount } from "../../app/accountsSlice";

const ConnectWallets: React.FC = () => {
  const [walletConnectStatus, setWalletConnectStatus] = useState<{
    from: WalletConnectStatus;
    to: WalletConnectStatus;
  }>({
    from: WalletConnectStatus.WAITING_CONNECT,
    to: WalletConnectStatus.BEFORE_CONNECT,
  });
  const { connect: connectKeplr, connectedWallet: connectedKeplrWallet } =
    useWalletManager();
  const { connect: connectMetamask, connectedWallet: connectedMetamaskWallet } =
    useMetamask();
  const config = useAppSelector((state) => state.inputs);
  const connectedWallets = useAppSelector((state) => state.accounts);

  const [currentWalletType, setCurrentWalletType] = useState<WalletType>(
    config.direction?.from ?? WalletType.KEPLR
  );
  const history = useHistory();
  const dispatch = useAppDispatch();

  const isFromWallet = useMemo(
    () => currentWalletType === config.direction?.from,
    [config, currentWalletType]
  );

  useEffect(() => {
    if (!config.direction) {
      history.push("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentWalletType === WalletType.KEPLR && connectedKeplrWallet) {
      dispatch(setAccount(["keplr", connectedKeplrWallet]));
      if (!connectedWallets.metamask) {
        setCurrentWalletType(WalletType.METAMASK);
        setWalletConnectStatus({
          from: WalletConnectStatus.CONNECTED,
          to: WalletConnectStatus.WAITING_CONNECT,
        });
      }
    } else if (
      currentWalletType === WalletType.METAMASK &&
      connectedMetamaskWallet
    ) {
      dispatch(setAccount(["metamask", connectedMetamaskWallet]));
      if (!connectedWallets.keplr) {
        setCurrentWalletType(WalletType.KEPLR);
        setWalletConnectStatus({
          from: WalletConnectStatus.CONNECTED,
          to: WalletConnectStatus.WAITING_CONNECT,
        });
      }
    }
    if (connectedWallets.keplr && connectedWallets.metamask) {
      history.push("/review");
    }
  }, [
    dispatch,
    connectedKeplrWallet,
    connectedMetamaskWallet,
    currentWalletType,
    connectedWallets,
    history,
  ]);

  const handleOpenWallet = () => {
    if (currentWalletType === WalletType.KEPLR) {
      connectKeplr();
    } else if (currentWalletType === WalletType.METAMASK) {
      connectMetamask();
    }
  };

  return (
    <Wrapper>
      <WalletConnectStatusContainer>
        <WalletConnectStatusItem>
          <WalletConnectStatusTitle>
            1 Connect source wallet
          </WalletConnectStatusTitle>
          <WalletConnectProgress status={walletConnectStatus.from} />
        </WalletConnectStatusItem>
        <WalletConnectStatusItem>
          <WalletConnectStatusTitle>
            2 Connect destination wallet
          </WalletConnectStatusTitle>
          <WalletConnectProgress status={walletConnectStatus.to} />
        </WalletConnectStatusItem>
      </WalletConnectStatusContainer>
      <ConnectWalletTitle>{`Connect ${
        isFromWallet ? "source" : "destination"
      } wallet`}</ConnectWalletTitle>
      <CurrentWalletImage walletType={WalletType[currentWalletType]} />
      <ConnectWalletSubTitle>{`${
        isFromWallet ? "From" : "To"
      } funds`}</ConnectWalletSubTitle>
      <Button
        onClick={handleOpenWallet}
      >{`Open ${WalletType[currentWalletType]}`}</Button>
    </Wrapper>
  );
};

export default ConnectWallets;
