import styled from 'styled-components';

export default styled.button`
  width: 100%;
  height: 52px;
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
`;
