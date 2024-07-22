import styled from "styled-components";

const EducationButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xsmall};
  padding: ${({ theme }) => theme.padding.xsmall};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  text-align: center;
  text-decoration: none;

  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;

  color: ${({ theme }) => theme.colors.text.primary};
  background-color: ${({ theme }) => theme.colors.tertiary};
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text.secondary};
    path {
      fill: ${({ theme }) => theme.colors.text.secondary};
    }
  }
`;

const EducationButtonPrimary = styled(EducationButton)`
  &:hover {
    background-color: #2f4697;
  }
`;

const EducationButtonSecondary = styled(EducationButton)`
  &:hover {
    background-color: #e11113;
  }
`;

export { EducationButtonPrimary, EducationButtonSecondary };
