import styled from "styled-components";

const Form = styled.form`
  width: 100%;
`;

const FormFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  border: none;
`;

const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.padding.small};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.hover.secondary};
  color: ${({ theme }) => theme.colors.text.primary};

  &:focus {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const TextArea = styled.textarea`
  min-height: 100px;
  padding: ${({ theme }) => theme.padding.small};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: none;
  background-color: ${({ theme }) => theme.colors.hover.secondary};
  resize: vertical;

  &:focus {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const ButtonForm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.padding.medium};
  border: none;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 400;

  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;

  transition: background-color 0.3s ease;

  color: ${({ theme }) => theme.colors.text.secondary};
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.primary};
  }

  @media (width <= ${({ theme }) => theme.breakpoints.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    padding: ${({ theme }) => theme.padding.smallMedium};

    & svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export { Form, FormFieldset, FormLabel, Input, TextArea, ButtonForm };
