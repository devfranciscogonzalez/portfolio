import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.padding.medium};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  width: 100%;
`;

const FormFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.padding.medium};
  border: none;
`;
const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.padding.small};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.padding.small};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: none;
  background-color: ${({ theme }) => theme.colors.hover.secondary};
  color: ${({ theme }) => theme.colors.text.tertiary};

  &:focus {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const TextArea = styled.textarea`
  padding: ${({ theme }) => theme.padding.small};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: none;
  background-color: ${({ theme }) => theme.colors.hover.secondary};
  color: ${({ theme }) => theme.colors.text.tertiary};
  font-size: ${({ theme }) => theme.fontSizes.small};
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
  text-align: center;
  text-decoration: none;

  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;

  transition: background-color 0.3s ease;

  color: ${({ theme }) => theme.colors.text.secondary};
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.primary};
  }
`;

export { Form, FormFieldset, FormLabel, Input, TextArea, ButtonForm };
