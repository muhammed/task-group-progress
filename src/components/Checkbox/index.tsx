import CheckIcon from '../icons/Check'
import {
  StyledCheckbox,
  StyledCheckboxIcon,
  StyledCheckboxWrapper,
  StyledInput,
} from './styles'

interface CheckboxProps {
  checked: boolean
  onChange: () => void
  label: string
}

const Checkbox = ({ checked, onChange, label }: CheckboxProps) => {
  return (
    <StyledCheckboxWrapper>
      <StyledInput
        type="checkbox"
        hidden
        checked={checked}
        onChange={onChange}
      />
      <StyledCheckbox checked={checked}>
        <StyledCheckboxIcon>
          <CheckIcon />
        </StyledCheckboxIcon>
      </StyledCheckbox>
      <span>{label}</span>
    </StyledCheckboxWrapper>
  )
}

export default Checkbox
