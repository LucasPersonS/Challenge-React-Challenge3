import styled from 'styled-components';

export const ChatContainer = styled.div`
  flex: 1;
  width:100%;
  max-width: 400px;
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 20px;
  margin-left: 20px; 

  @media (max-width: 1280px) {
    margin-left: 0;
    max-width: 400px;
  }

  @media (max-width: 780px) {
    margin-left: 0;
    max-width: 300px;
  }
  
  @media (max-width: 480px) {
    margin-left: 0;
    max-width: 2px;
  }
`;

export const MessageWindow = styled.div`
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
  background: white;
  border-radius: 8px;
  max-height: 40vh;
  min-height: 30vh;

  @media (max-width: 768px) {
    max-height: 50vh;
    min-height: 25vh;
  }

  @media (max-width: 480px) {
    max-height: 40vh;
    min-height: 20vh;
  }
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 10px;
  align-items: center;
  width: 100%;

  input {
    flex-grow: 1;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid black;
    box-sizing: border-box;
    max-width: calc(100% - 80px);

    ::placeholder {
      color: #999;
    }

    @media (max-width: 768px) {
      padding: 8px;
    }

    @media (max-width: 480px) {
      padding: 6px;
    }
  }

  button {
    padding: 10px;
    background-color: #0044cc;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    box-sizing: border-box;
    min-width: 70px;
    flex-shrink: 0;

    @media (max-width: 768px) {
      padding: 8px 15px;
    }

    @media (max-width: 480px) {
      padding: 6px 10px;
    }
  }
`;

export const MessageBubble = styled.div`
  background-color: #0044cc;
  color: white;
  padding: 10px 15px;
  word-wrap: break-word;
  word-break: break-word;
  margin-bottom: 10px;
  border-radius: 15px;
  align-self: flex-end;

  @media (max-width: 768px) {
    padding: 8px 12px;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
  }
`;
