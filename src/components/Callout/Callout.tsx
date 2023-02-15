import { cva, type VariantProps } from '~/utils/cva'

const callout = cva(
  [
    'py-lg',
    'px-xl',
    'mb-xl',
    'text-md',
    'w-full',
    'border-solid',
    'border-l-4',
  ],
  {
    defaultVariants: {
      variant: 'success',
    },
    variants: {
      variant: {
        info: ['bg-info', 'border-info'],
        danger: ['bg-danger', 'border-danger'],
        warning: ['bg-warning', 'border-warning'],
        success: ['bg-success', 'border-success'],
      },
    },
  }
)

type CalloutProps = React.PropsWithChildren<VariantProps<typeof callout>>

export default function Callout({ children, variant }: CalloutProps) {
  return <aside className={callout({ variant })}>{children}</aside>
}
