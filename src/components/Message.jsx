import styled from 'styled-components';
import { COLORS } from '../constants';
import Icon from './Icon';

const Message = ({ children, messageType }) => {
  if (messageType === 'received') {
    return <ReceivedMessageWrapper data-message-type="received">{children}</ReceivedMessageWrapper>;
  }
  else if (messageType === 'sent') {
    return <SentMessageWrapper data-message-type="sent">  {children} </SentMessageWrapper>;
  }
  else {
    throw new Error(`Invalido messageType: ${messageType}`);
  }
};



const MessagePrice = ({ children, price}) => {
  return (
    <MessagePriceWrapper data-message-type="received">
      <Icon name="oval" size={12} strokeWidth={1}/>
      {children}
      <Price>{price}$</Price>
    </MessagePriceWrapper>
  );
}
export { Message, MessagePrice };

const BaseMessage = styled.div`
  width: fit-content;
  max-width: 128px;
  padding: 6px 8px;
  font-size: calc(8 / 16 * 1rem);
`;

const ReceivedMessageWrapper = styled(BaseMessage)`
  background-color: ${COLORS.paleViolet};
  color: ${COLORS.moderateViolet};
  border-radius: 10px 10px 10px 4px;
  margin-right: auto;
  text-align: left;

  /* Aggiungi margine quando un messaggio ricevuto segue un messaggio inviato; proprietà contenuta all'interno del componente  SentMessageWrapper */
  [data-message-type="received"] + & {
    margin-top: 8px;
  }

  [data-message-type="sent"] + & {
    margin-top: 16px;
  }
`;

const SentMessageWrapper = styled(BaseMessage)`
  background-color: ${COLORS.white};
  color: ${COLORS.desaturatedDarkViolet};
  border-radius: 10px 10px 4px 10px;
  margin-left: auto;
  text-align: right;

  /* Aggiungi margine quando un messaggio inviato segue un messaggio ricevuto; proprietà contenuta all'interno del componente  ReceivedMessageWrapper */
  [data-message-type="sent"] + & {
    margin-top: 8px;
  }

  [data-message-type="received"] + & {
    margin-top: 16px;
  }
`;

const MessagePriceWrapper = styled(ReceivedMessageWrapper)`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 380px;
  background: linear-gradient(225deg, #e844ff 0%, #8739ff 100%);
  color: white;
`;

const Price = styled.span`
  font-weight: 700;
  font-size: calc(12 / 16 * 1rem);
  color: white;
  margin-left: auto;
`;



