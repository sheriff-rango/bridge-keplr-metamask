import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { ConfirmStatus, WalletType } from "../../constant/enums";
import {
  Wrapper,
  ConfirmStatusContainer,
  ConfirmStatusItem,
  ConfirmStatusTitle,
  WalletConnectProgress,
  ConfirmStatusContent,
  Loading,
} from "./styled";

const ConfirmTransaction: React.FC = () => {
  const [confirmStatus, setConfirmStatus] = useState<{
    from: ConfirmStatus;
    to: ConfirmStatus;
  }>({
    from: ConfirmStatus.WAITING_CONFIRM,
    to: ConfirmStatus.BEFORE_CONFIRM,
  });
  const history = useHistory();
  const inputsConfig = useAppSelector((state) => state.inputs);
  const direction = inputsConfig.direction;

  useEffect(() => {
    if (!direction) {
      history.push("/home");
      return;
    }
    setTimeout(() => {
      setConfirmStatus({
        from: ConfirmStatus.CONFIRMED,
        to: ConfirmStatus.WAITING_CONFIRM,
      });
      setTimeout(() => {
        history.push("/submission");
      }, 3000);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fromWalletName = WalletType[direction?.from || WalletType.KEPLR];

  return (
    <Wrapper>
      <ConfirmStatusContainer>
        <ConfirmStatusItem>
          <ConfirmStatusTitle>
            {`1 Approve in ${fromWalletName}`}
          </ConfirmStatusTitle>
          <WalletConnectProgress status={confirmStatus.from} />
        </ConfirmStatusItem>
        <ConfirmStatusItem>
          <ConfirmStatusTitle>
            {`2 Send in ${fromWalletName}`}
          </ConfirmStatusTitle>
          <WalletConnectProgress status={confirmStatus.to} />
        </ConfirmStatusItem>
      </ConfirmStatusContainer>
      <ConfirmStatusContent>{`${
        confirmStatus.from === ConfirmStatus.WAITING_CONFIRM
          ? "Approve"
          : "Send"
      } transaction in ${fromWalletName}`}</ConfirmStatusContent>
      <Loading type="spokes" color="#000" />
    </Wrapper>
  );
};

export default ConfirmTransaction;
