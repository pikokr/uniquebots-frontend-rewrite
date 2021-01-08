import clsx from 'clsx'
import React from 'react'
import { components, SingleValueProps } from 'react-select'

const SelectSingleValue = (props: SingleValueProps<any>) => {
  const { className } = props
  return (
    <components.SingleValue
      {...props}
      className={clsx(className, {
        'text-white': true,
        'placeholder-white': true,
      })}
    />
  )
}

export default SelectSingleValue
