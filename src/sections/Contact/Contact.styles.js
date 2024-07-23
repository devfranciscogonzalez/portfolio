import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  gap: ${({ theme }) => theme.spacing.xlarge};

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const ContactHeader = styled.header`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export { ContactHeader, ContactFormWrapper, ContactContainer };
