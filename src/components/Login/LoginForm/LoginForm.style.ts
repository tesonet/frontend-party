import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`
export const Input = styled.input`
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border: 0;
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.dustyGray};
`

export const Button = styled.button`
  margin-top: 1rem;
  border: 0;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.atlantis};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.limeade};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.dustyGray};
    color: ${({ theme }) => theme.colors.textGray};
    cursor: not-allowed;
  }
`
export const ErrorContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
`
