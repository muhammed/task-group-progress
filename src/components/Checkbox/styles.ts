import { styled } from 'styled-components'

export const StyledCheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
`

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  background: ${(props) => (props.checked ? '#00B797' : 'transparent')};
  border: 1px solid #999;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
`

export const StyledCheckboxIcon = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  opacity: 0;
  transform: scale(0);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
`

export const StyledInput = styled.input`
  &:checked + ${StyledCheckbox} {
    background: #00b797;
    border-color: #00b797;
  }

  &:checked + ${StyledCheckbox} ${StyledCheckboxIcon} {
    opacity: 1;
    transform: scale(1);
  }
`
