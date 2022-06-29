import styled from "styled-components";
import ReactLoading from "react-loading";
import { ConfirmStatus } from "../../constant/enums";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 20px;
`;

export const ConfirmStatusContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const ConfirmStatusItem = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ConfirmStatusTitle = styled.div``;

export const ConfirmStatusContent = styled.div`
  font-weight: bold;
  margin: 30px auto;
`;

export const Loading = styled(ReactLoading)`
  margin: 40px auto;
`;

const ConfirmStatusColors = {
  [ConfirmStatus.BEFORE_CONFIRM]: "#b3b3b3",
  [ConfirmStatus.CONFIRMED]: "#aff4c7",
  [ConfirmStatus.WAITING_CONFIRM]: "#15ae5c",
};

export const WalletConnectProgress = styled.div<{
  status: ConfirmStatus;
}>`
  width: 100%;
  height: 10px;
  background-color: ${({ status }) => ConfirmStatusColors[status]};
`;
