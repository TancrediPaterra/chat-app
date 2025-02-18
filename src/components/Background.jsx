import React from 'react';
import styled from 'styled-components';

const Background = () => {
  return (
    <Wrapper>
      <FirstShape/>
      {/* <SecondShape/> */}
    </Wrapper>
  );
};

export default Background;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const FirstShape = styled.div`
  position: absolute;
  width: 510px;
  height: 1018px;
  margin-left: -90px;
  margin-top: -320px;
  background: linear-gradient(to bottom, #E844FF, #8739FF);
`;
