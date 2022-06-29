import styled from "styled-components";
import ReactLoading from "react-loading";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-size: 20px;
`;

export const SubmissionItem = styled.div`
  margin: 30px;
`;

export const SubmissionItemTitle = styled.div<{ color?: string }>`
  margin-top: 20px;
  text-align: left;
  font-size: 18px;
  color: ${({ color }) => color ?? "#139bfe"};
`;

export const SubmissionItemContent = styled.div`
  margin-top: 10px;
  text-align: left;
  font-weight: bold;
`;

export const Loading = styled(ReactLoading)`
  margin: 40px auto;
`;
