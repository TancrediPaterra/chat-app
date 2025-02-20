import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS } from '../constants';
import Icon from './Icon';

const CardHeader = ({avatarSrc, name, description}) =>{
    return (
    <HeaderWrapper>
            <Header>
              <Icon name="left_arrow" size={10} strokeWidth={2} />
              <Avatar src={avatarSrc} alt="avatar"/>
              <TitleWrapper>
                <Name>{name}</Name>
                <Description>{description}</Description>
              </TitleWrapper>
              <Icon name="three_dots" size={10} strokeWidth={2} style={{"marginLeft":"auto"}}/>
            </Header>
    </HeaderWrapper>
    )
}

CardHeader.propTypes = {
  avatarSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardHeader;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 66px;
  background: linear-gradient(225deg, #e844ff 0%, #8739ff 100%);
  border-radius: 20px 20px 0px 0px;
  padding: 30px 16.5px 12px 16.5px;
  margin: 0;
`;

const Header = styled.div`
  height: 24px;
  display: flex;
  gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;

const Avatar = styled.img`
  display: inline;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #FFFFFF;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Name = styled.h2`
  font-size: calc(11/16 * 1rem);
  color: #FFFFFF;
`;

const Description = styled.p`
  font-size: calc(10/16 * 1rem);
  color: ${COLORS.paleViolet};
`;
