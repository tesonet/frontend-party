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
`

export const Button = styled.button`
  margin-top: 1rem;
  border: 0;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.limeade};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  cursor: pointer;
`
export const ErrorContainer = styled.div``
