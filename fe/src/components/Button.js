import styled, { css } from 'styled-components';

export default styled.button`
  height: 52px;
  padding: 0 16px;
  border-radius: 4px;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  transition: background all 0.2s ease-in;

  &:hover{
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active{
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled]{
    background: #ccc;
    cursor: not-allowed;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};

    &:hover{
    background: ${theme.colors.danger.light};
  }

  &:active{
    background: ${theme.colors.danger.dark};
  }
  `}
`;
