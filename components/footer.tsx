import { SocialIcons } from './social-icons'
import { ThemeToggle } from './theme-toggle'

export function Footer() {
  return (
    <>
      <hr className="my-12 h-px border-0 bg-text-light/20 dark:bg-text-dark/20" />
      <footer className="mb-8 flex items-center justify-between md:mb-12">
        <SocialIcons />
        <ThemeToggle />
      </footer>
    </>
  )
}
