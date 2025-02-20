import styled from 'styled-components';
import Icon from './Icon';

import PropTypes from 'prop-types';
import CardHeader from './CardHeader';

const Card = ({children, ...props}) => {
  return (
    <Wrapper>
      <Notch/>
      <CardHeader {...props}/>

      <MessagesWrapper>
          {children}
      </MessagesWrapper>

      <InputWrapper>
        <Input placeholder='Type a message...'/>
        <IconWrapper>
          <Icon name='right_arrow' size={16} strokeWidth={1} />
        </IconWrapper>
      </InputWrapper>
    </Wrapper>
  );
};
export default Card;

Card.propTypes = {
  children: PropTypes.node,
};

const Wrapper = styled.div`
  position: absolute;
  width: 247px;
  height: min-content;
  left: 363px;
  top: 0px;
  bottom: 0px;
  margin: auto 0px;
  padding: 1px;
  background: #F5F3F7;
  border-width: 11px 9px; /* vertical horizontal */
  border-style: solid;
  border-color: #FFFFFF;
  box-shadow: 0 30px 60px rgba(62, 39, 83, 0.2512);
  border-radius: 30px;
  overflow: hidden;
`;

const Notch = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 18px;
  background: #FFFFFF;
  border-radius: 0px 0px 14px 14px;
`;

const MessagesWrapper = styled.div`
  padding: 11px 7.5px 60px 7.5px;
`;

const InputWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 10px;
  width: 213px;
  margin: 10px auto;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding: 13px 0 10px 20px;
  font-size: 9px;
  color: rgba(197, 201, 204, 1);
  border-radius: 17px;
  &:focus {
    outline-offset: 1px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

