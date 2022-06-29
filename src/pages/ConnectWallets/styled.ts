import styled from "styled-components";
import { WalletConnectStatus } from "../../constant/enums";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 20px;
`;

export const WalletConnectStatusContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const WalletConnectStatusItem = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const WalletConnectStatusTitle = styled.div``;

const WalletConnectStatusColors = {
  [WalletConnectStatus.BEFORE_CONNECT]: "#b3b3b3",
  [WalletConnectStatus.CONNECTED]: "#aff4c7",
  [WalletConnectStatus.WAITING_CONNECT]: "#15ae5c",
};

export const ConnectWalletTitle = styled.div`
  margin-top: 20px;
  font-size: 26px;
`;

export const ConnectWalletSubTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CurrentWalletImage = styled.div<{ walletType: string }>`
  background: url(${({ walletType }) => `/images/wallets/${walletType}.png`});
  background-size: cover;
  width: 100px;
  height: 100px;
  margin: 20px auto;
`;

export const WalletConnectProgress = styled.div<{
  status: WalletConnectStatus;
}>`
  width: 100%;
  height: 10px;
  background-color: ${({ status }) => WalletConnectStatusColors[status]};
`;
