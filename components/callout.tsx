const variantStyles = {
  danger: 'border-red bg-red/10',
  info: 'border-blue bg-blue/10',
  success: 'border-green bg-green/10',
  warning: 'border-yellow bg-yellow/10',
} as const

type Variant = keyof typeof variantStyles

export function Callout({
  children,
  variant = 'info',
}: {
  children: React.ReactNode
  variant?: Variant
}) {
  return (
    <aside
      className={`my-6 rounded-r-md border-l-4 px-6 py-4 ${variantStyles[variant]}`}
    >
      <div className="prose-sm dark:prose-invert [&>p:last-child]:mb-0 [&>p:first-child]:mt-0">
        {children}
      </div>
    </aside>
  )
}
