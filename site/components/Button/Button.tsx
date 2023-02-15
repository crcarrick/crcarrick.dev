import { cx } from '~/utils/cva'

const button = cx(
  'p-md',
  'text-body',
  'bg-text',
  'gap-md',
  'pseudo:text-text',
  'pseudo:bg-primary',
  'flex',
  'cursor-pointer',
  'content-center',
  'items-center',
  'border-none',
  'text-xs',
  'uppercase',
  'leading-[1]'
)

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return <button className={button} {...props} />
}
