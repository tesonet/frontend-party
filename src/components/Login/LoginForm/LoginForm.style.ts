import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  width: 22.5rem;
`
export const StyledInput = styled.input<{ error: boolean }>`
  padding: 1.5rem 1.5rem 1.5rem 2.5rem;
  border: ${({ error, theme }) => (error ? `2px solid ${theme.colors.pinkGlamour}` : '0')};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.dustyGray};
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: inset 0 0 2px 3px ${({ theme }) => theme.colors.atlantis};
  }
`

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const IconContainer = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
`

export const Button = styled.button`
  margin-top: 1rem;
  border: 0;
  padding: 1.5rem 1.5rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.atlantis};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
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
export const ErrorContainer = styled.div<{ error: boolean }>`
  height: 1rem;
  width: 90%;
  font-size: 0.7rem;
  margin: 0 auto 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, error }) => (error ? theme.colors.pinkGlamour : 'transparent')};
`
