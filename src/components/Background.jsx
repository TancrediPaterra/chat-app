import React from 'react';
import styled from 'styled-components';

const Background = () => {
  return (
    <Wrapper>
      <FirstShape/>
      <SecondShape/>
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

const BaseShape = styled.div`
  position: absolute;
  width: 510px;
  height: 1018px;
  background: linear-gradient(225deg, #e844ff 0%, #8739ff 100%);
  border-radius: 255px;
`;

const FirstShape = styled(BaseShape)`
  top: 0;
  left: 0;
  margin-left: -90px;
  margin-top: -320px;
`;

const SecondShape = styled(BaseShape)`
  right: 0;
  bottom: 0;
  margin-right: -90px;
  margin-bottom: -320px;
  opacity: 0.03;
`;
