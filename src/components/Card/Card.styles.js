import styled from "styled-components";

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const CardHeader = styled.header`
  padding: ${({ theme }) => theme.padding.medium};
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.padding.medium};
`;

const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: ${({ theme }) => theme.padding.medium};
`;

const CardContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.padding.medium};
  width: 50%;
`;

const CardContentRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.padding.medium};
  width: 50%;
`;

export {
  CardContainer,
  CardHeader,
  CardContent,
  CardFooter,
  CardContentLeft,
  CardContentRight,
};
