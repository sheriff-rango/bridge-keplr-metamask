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

export const ReviewItem = styled.div`
  margin: 40px 0;
  text-align: left;
`;

export const ReviewItemTitle = styled.div`
  font-size: 18px;
`;

export const ReviewItemContent = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const ReviewResultContainer = styled.div`
  padding: 10px;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
`;

export const ReviewResultItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const ReviewResultTitle = styled.div``;

export const ReviewResultContent = styled.div`
  font-weight: bold;
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;
`;
