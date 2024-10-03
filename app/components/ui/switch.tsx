import { cx } from 'app/utils/cx'
import { InputHTMLAttributes } from 'react'

type SwitchProps = InputHTMLAttributes<HTMLInputElement>

export const Switch = ({ className, ...props }: SwitchProps) => {
  return (
    <input
      type="checkbox"
      className={cx(
        'focus-visible:ring-light-blue-300 relative flex h-7 w-12 cursor-pointer appearance-none items-center rounded-full border border-black bg-gray-500 transition-colors duration-500 ease-out before:absolute before:left-1 before:h-5 before:w-5 before:rounded-full before:bg-white before:transition-transform before:duration-500 before:ease-out before:content-[""] checked:bg-green-500 checked:before:translate-x-[1.125rem] focus:outline-none focus-visible:ring-2',
        className,
      )}
      {...props}
    />
  )
}
