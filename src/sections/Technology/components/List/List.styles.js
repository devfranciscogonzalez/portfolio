import styled from "styled-components";

const List = styled.ul`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: ${({ theme }) => theme.spacing.medium};
  width: 100%;
  list-style: none;

  & > :first-child {
    grid-column: span 2;
    justify-content: flex-start;
  }

  @media (width <= ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.small};
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  height: 180px;
  width: 100%;
  color: ${({ theme }) => theme.colors.text.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  svg + svg {
    filter: blur(16px);
    opacity: 0.2;
    position: absolute;
    width: 120px;
    height: 120px;
  }

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    height: 150px;
  }
`;

const ItemSpan = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.large};
  height: 180px;
  width: 100%;

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    height: 150px;
  }
`;

export { List, Item, ItemSpan };
