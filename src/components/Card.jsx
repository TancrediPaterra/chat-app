import styled from 'styled-components';
import Icon from './Icon';

const Card = ({name, description, avataSrc}) => {
  return (
    <Wrapper>
      <CameraPlaceholder/>
      <Header>
        <Icon name="arrow" size={10} strokeWidth={2} />
      </Header>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  position: absolute;
  width: 247px;
  height: 505px;
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

const CameraPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 30px;
  background: #FFFFFF;
  border-radius: 0px 0px 14px 14px;
`;

const Header = styled.div`
  width: 100%;
  height: 66px;
  background: linear-gradient(225deg, #e844ff 0%, #8739ff 100%);
  border-radius: 20px 20px 0px 0px;
  padding: 30px 16.5px 12px 16.5px;
  margin: 0;
  text-align: center;
  line-height: 66px; /* Vertically center the content */
`;
