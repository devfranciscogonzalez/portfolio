import styled from "styled-components";

const ContactHeader = styled.header`
  padding-bottom: ${({ theme }) => theme.padding.large};
  width: 100%;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ContactFormWrapper = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export { ContactHeader, ContactFormWrapper };
