import styled from "styled-components";

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const CardHeader = styled.header`
  padding: ${({ theme }) => theme.padding.large};
`;

const CardContent = styled.div`
  display: flex;
  align-items: flex-start;
  padding: ${({ theme }) => theme.padding.medium};
`;

// const CardFooter = styled.footer`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 10px;
//   padding: ${({ theme }) => theme.padding.medium};
// `;

const CardContentLeft = styled.div`
  padding: ${({ theme }) => theme.padding.medium};
  height: 100%;
  width: 50%;
`;

const CardContentRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.padding.medium};
  width: 50%;
`;

const CardContainerImage = styled.div`
  padding: ${({ theme }) => theme.padding.xsmall}
    ${({ theme }) => theme.padding.xsmall}
    ${({ theme }) => theme.padding.xlarge} ${({ theme }) => theme.padding.xsmall};
  background-color: white;
  filter: grayscale(100%);
  transition: filter 0.5s ease;

  img {
    height: 190px;
  }

  &:hover {
    filter: grayscale(0%);
  }
`;

const CardContainerSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.small};
  /* margin-top: ${({ theme }) => theme.spacing.medium};
  flex-grow: 1; */
`;

export {
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
  CardContentLeft,
  CardContentRight,
  CardContainerImage,
  CardContainerSkills,
};
