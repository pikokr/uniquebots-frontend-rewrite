import React from 'react'
import { ContainerProps, components } from 'react-select'

const SelectValueContainer = (props: ContainerProps<any, any>) => {
  const { children } = props
  return (
    <components.SelectContainer {...props}>
      {children}
    </components.SelectContainer>
  )
}

export default SelectValueContainer
