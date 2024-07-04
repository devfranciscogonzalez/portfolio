import styled from "styled-components";

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.padding.large};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.colors.text.secondary};

  & img {
    filter: grayscale(100%);
    transition: filter 0.3s ease;
  }

  &:hover img {
    filter: grayscale(0%);
  }

  & svg path {
    fill: ${({ theme }) => theme.colors.tertiary};
    transition: fill 0.3s ease;
  }

  &:hover svg path {
    fill: inherit;
  }
`;

const CardHeader = styled.header`
  padding-bottom: ${({ theme }) => theme.padding.large};
`;

const CardContent = styled.article`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.large};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// const CardFooter = styled.footer`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 10px;
//   padding: ${({ theme }) => theme.padding.medium};
// `;

const CardContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;


const CardContentRight = styled.div`
  width: 55%;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 100%;
    text-align: center;
  }
`;

const CardContainerSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.small};
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

export {
  CardContainer,
  CardHeader,
  CardContent,
  // CardFooter,
  CardContentLeft,
  CardContentRight,
  CardContainerSkills,
};
