import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  gap: ${({ theme }) => theme.spacing.xlarge};

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.medium};
    align-items: center;
  }
`;

const ContactHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  width: 50%;

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 50%;
  gap: ${({ theme }) => theme.spacing.medium};
  
  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export { ContactHeader, ContactFormWrapper, ContactContainer };
