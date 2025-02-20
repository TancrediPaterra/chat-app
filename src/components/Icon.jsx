import styled from "styled-components";
import LeftArrow from "../assets/LeftArrow.svg?react";
import Oval from "../assets/Oval.svg?react";
import RightArrow from "../assets/RightArrow.svg?react";
import ThreeDots from "../assets/ThreeDots.svg?react";

const icons = {
  left_arrow: LeftArrow,
  right_arrow: RightArrow,
  three_dots: ThreeDots,
  oval: Oval
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
