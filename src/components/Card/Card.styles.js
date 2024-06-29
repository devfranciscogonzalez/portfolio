import styled from "styled-components";

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

const CardHeader = styled.header`
  padding: 0 ${({ theme }) => theme.padding.medium};
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export { CardContainer, CardHeader, CardContent, CardFooter };
