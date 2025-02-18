import React from "react";
import styled from "styled-components";
import Arrow from "../assets/Arrow.svg?react";
import ThreeDots from "../assets/ThreeDots.svg?react";

const icons = {
  arrow: Arrow,
  three_dots: ThreeDots,
};

const Icon = ({ name, size, strokeWidth = 1, ...delegated }) => {
  const SvgIcon = icons[name];
  if (!SvgIcon) {
    throw new Error(`No icon found for name: ${name}`);
  }

  return (
    <Wrapper size={size} strokeWidth={strokeWidth} {...delegated}>
      <SvgIcon width={size} height={size} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  & > svg {
    display: block;
    stroke-width: ${({ strokeWidth }) => strokeWidth}px;
  }
`;

export default Icon;
