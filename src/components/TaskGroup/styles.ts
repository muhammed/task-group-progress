import { styled } from 'styled-components'

export const StyledWrapper = styled.div`
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`

export const StyledHeader = styled.div`
  cursor: pointer;
  display: flex;
  padding: 24px;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  justify-content: space-between;
`

export const StyledHeaderTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 22px;
  color: #333;
`

export const StyledCount = styled.div`
  font-size: 16px;
  color: #999;
  margin-left: 8px;
`

export const StyledHeaderIcon = styled.div`
  margin-right: 16px;
`

export const StyledHeaderAction = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const StyledHeaderActionTitle = styled.div`
  font-size: 16px;
  color: #999;
`

export const StyledHeaderActionIcon = styled.div<{ active: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out;

  ${({ active }) =>
    active &&
    `
      transform: scaleY(-1);
    `}
`

export const StyledContent = styled.div`
  overflow: hidden;
`

export const StyledContentContainer = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`
