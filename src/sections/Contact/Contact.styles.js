import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.medium};
    align-items: center;
  }
  @media (width <= ${({ theme }) => theme.breakpoints.laptop}) {
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

const ContactContent = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  width: 50%;

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    order: -1;
    & svg {
      display: none;
    }
  }
`;

const ContactHeader = styled.header`
  width: 100%;
`;

const ContactFormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  gap: ${({ theme }) => theme.spacing.medium};

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export { ContactHeader, ContactFormWrapper, ContactContainer, ContactContent };
