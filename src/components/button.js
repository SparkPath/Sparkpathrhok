import React from 'react'
import styled from 'styled-components'
import {
  fontWeight,
  borderColor,
  borderRadius,
  buttonStyle,
  fontSize,
  lineHeight,
  letterSpacing,
} from 'styled-system'
import Box from './box'

const StyledButton = styled(Box)`
  appearance: none;
  text-align:  center;
  text-decoration:  none;
  border-style: none;
  
  &:hover {
    cursor: pointer
  }
  &:disabled {
    background: #ccc;
  }

  ${fontWeight}
  ${borderColor}
  ${borderRadius}
  ${buttonStyle}
  ${fontSize}
  ${letterSpacing}
  ${lineHeight}
`

const Button = ({ type = 'button', onClick, ...rest }) => {
  const handleOnClick = e => {
    e.preventDefault()
    if (onClick) {
      onClick()
    }
  }

  return <StyledButton type={type} onClick={handleOnClick} {...rest} />
}

Button.defaultProps = {
  as: 'button',
  display: 'inline-block',
}

export default Button
