export function Tag({
  active,
  children,
  onClick,
}: {
  active?: boolean
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <button
      className={`rounded-full px-3 py-1 font-code text-xs transition-colors ${
        active
          ? 'bg-primary-light text-white dark:bg-primary-dark'
          : 'bg-accent-light/10 text-text-light/70 hover:bg-accent-light/20 dark:bg-accent-dark/10 dark:text-text-dark/70 dark:hover:bg-accent-dark/20'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
