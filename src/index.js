import React from 'react'
import styled from 'styled-components'
import { ButtonRaw } from '@alobato/button'

const Button = props => (
  <ButtonRaw {...props}>
    <svg height={32} viewBox='0 0 24 24' fill='currentColor'><path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' /></svg>
  </ButtonRaw>
)

export default styled(Button)`
  cursor: pointer;
  user-select: none;
  width: 56px; height: 56px;
  position: fixed;
  bottom: 24px;
  right: 24px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px, rgba(0, 0, 0, 0.2) 0px 3px 5px -1px;
  display: flex; justify-content: center; align-items: center;
  background-color: ${props => props.theme.colors.primary700};
  color: ${props => props.theme.colors.white};
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary200};
    border: 1px solid ${props => props.theme.colors.primary400};
  }
  & > i {
    display: block;
    line-height: 0;
    pointer-events: none;
  }
`
