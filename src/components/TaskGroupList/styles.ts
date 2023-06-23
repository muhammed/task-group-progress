import { styled } from 'styled-components'

export const StyledWrapper = styled.div`
  width: 820px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
`

export const StyledHeader = styled.div`
  display: flex;
  padding: 32px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`

export const StyledTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 24px;
  color: #333;
`

export const StyledProgressBarWrapper = styled.div`
  background-color: #f2fbfa;
  border-radius: 24px;
  height: 20px;
  width: 100%;
`

export const StyledProgressBar = styled.div`
  background-color: #00b797;
  height: 100%;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  text-align: right;
  line-height: 1.3;
  padding: 0 16px;
  transition: width 0.4s ease-in-out;
`

export const StyledList = styled.div`
  border-radius: 8px;
  border: 1px solid #ccc;
`
