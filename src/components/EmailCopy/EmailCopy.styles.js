import styled from 'styled-components';

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: fit-content;
`;

const EmailText = styled.span`
  font-size: 16px;
  color: #333;
`;

const CopyButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004494;
  }
`;

export { EmailContainer, EmailText, CopyButton };