'use client'
import { cx } from 'app/utils/cx'
import type { InputHTMLAttributes } from 'react'

type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
  onChange?: (checked: boolean) => void
}

export const Switch = ({ className, onChange, ...props }: SwitchProps) => {
  return (
    <input
      type="checkbox"
      className={cx(
        'relative flex h-7 w-12 cursor-pointer appearance-none items-center rounded-full bg-gray-500 transition-colors duration-500 ease-out before:absolute before:left-1 before:h-5 before:w-5 before:rounded-full before:bg-white before:transition-transform before:duration-500 before:ease-out before:content-[""] checked:bg-green-500 checked:before:translate-x-[1.125rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-light-blue-300',
        className,
      )}
      onChange={(e) => {
        onChange?.(e.target.checked)
      }}
      {...props}
    />
  )
}
