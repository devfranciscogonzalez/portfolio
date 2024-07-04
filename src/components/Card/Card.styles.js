import styled from "styled-components";

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const CardHeader = styled.header`
  padding: ${({ theme }) => theme.padding.large}
    ${({ theme }) => theme.padding.xlarge};
`;

const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${({ theme }) => theme.padding.medium};
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
  padding: ${({ theme }) => theme.padding.small};
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// const CardContainerImage = styled.div`
//   padding: ${({ theme }) => theme.padding.xsmall};
//   background-color: white;
//   filter: grayscale(100%);
//   transition: filter 0.5s ease;
//   border-radius: 50%;

//   img {
//     height: 150px;
//     border-radius: 50%;
//   }

//   &:hover {
//     filter: grayscale(0%);
//   }
// `;

const CardContentRight = styled.div`
  padding: ${({ theme }) => theme.padding.small};
  width: 55%;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}){
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
  // CardContainerImage,
  CardContainerSkills,
};
