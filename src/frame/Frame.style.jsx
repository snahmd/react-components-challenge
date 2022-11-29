import { Container } from "react-bootstrap";
import styled from "styled-components";

export const FrameContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top:20px;
`;

export const FrameWrapper = styled(Container)`
  border-top-left-radius: 37px 140px;
  font-family: monospace;
  border-top-right-radius: 23px 130px;
  border-bottom-left-radius: 110px 19px;
  border-bottom-right-radius: 120px 24px;
  border: solid 3px #6e7491;
  box-shadow: 3px 15px 8px -10px rgba(0, 0, 0, 0.3);
  transition: all 0.13s ease-in;
  transform: rotate(-0.5deg);
  &:hover {
    transform: translateY(-1px) rotate(0.1deg) scale(1.01);
  }
  .ftitle {
    margin: 0;
    padding: 10px 0 10px 25px;
    font-size: 20px;
    line-height: 28px;
  }
  .ftext {
    padding: 0px 0 5px 35px;
    font-size: 12px;
    line-height: 14px;
    margin: 0 0 20px 0;
  }
`;
