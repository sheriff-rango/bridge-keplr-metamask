import styled from "styled-components";
import Button from "../../components/Button";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 20px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderChainType = styled.div<{ walletType: string }>`
  background: url(${({ walletType }) => `/images/wallets/${walletType}.png`});
  background-size: cover;
  width: 100px;
  height: 100px;
`;

export const StyledSvg = styled.svg`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

export const AssetsContainer = styled.div`
  width: calc(100% - 40px);
  border: 1px solid #999;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
`;

export const InputContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  margin-top: 20px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
`;
