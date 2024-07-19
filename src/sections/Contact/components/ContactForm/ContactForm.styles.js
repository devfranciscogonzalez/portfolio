import styled from "styled-components";

const FormFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.padding.medium};
  padding: ${({ theme }) => theme.padding.medium};
`;
const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.padding.small};
`;



export { FormFieldset, FormLabel};
