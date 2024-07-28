import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xlarge};

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.medium};
    align-items: center;
  }
  @media (width <= ${({ theme }) => theme.breakpoints.laptop}) {
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

const ContactHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  width: 50%;

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    order: -1;
    & svg {
      display: none;
    }
  }
`;

const ContactFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  gap: ${({ theme }) => theme.spacing.medium};

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export { ContactHeader, ContactFormWrapper, ContactContainer };
