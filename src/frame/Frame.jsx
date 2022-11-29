import React from "react";
import { FrameContainer, FrameWrapper } from "./Frame.style";

const Frame = ({ children, title, text }) => {
  return (
    <FrameContainer>
      <FrameWrapper>
        <div className="ftitle">{title}</div>
        <p className="ftext">{text}</p>
        {children}
      </FrameWrapper>
    </FrameContainer>
  );
};

export default Frame;
