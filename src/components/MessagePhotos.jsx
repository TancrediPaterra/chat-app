import styled from "styled-components";

const MessagePhotos = ({ children, messageType }) => {
  if (messageType === "sent") {
    return <SentPhotosMessageWrapper data-message-type="sent">{children}</SentPhotosMessageWrapper>;
  } else if (messageType === "received") {
    return <ReceivedPhotosMessageWrapper data-message-type="received">{children}</ReceivedPhotosMessageWrapper>;
  }
}

export default MessagePhotos;


const BasePhotosMessageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: fit-content;
  max-width: 140px;
  height: 40px;
`;

const ReceivedPhotosMessageWrapper = styled(BasePhotosMessageWrapper)`
  margin-right: auto;
  text-align: left;
  [data-message-type="received"] + & {
    margin-top: 8px;
  }

  [data-message-type="sent"] + & {
    margin-top: 16px;
  }

`;

const SentPhotosMessageWrapper = styled(BasePhotosMessageWrapper)`
  margin-left: auto;
  text-align: right;
  [data-message-type="sent"] + & {
    margin-top: 8px;
  }

  [data-message-type="received"] + & {
    margin-top: 16px;
  }
`;

