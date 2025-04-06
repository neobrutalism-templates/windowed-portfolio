'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeSwitcher } from './theme-switcher'

export default function Nav() {
  const path = usePathname()

  return (
    <nav className="border-b-border rounded-tr-base w600:text-lg w400:h-10 w400:text-base grid h-[50px] grid-cols-[1fr_1fr_50px] border-b-4 bg-black text-xl portrait:rounded-none">
      <Link
        className={clsx(
          'flex h-full items-center justify-center uppercase',
          path === '/' ? 'bg-black text-white' : 'text-main-foreground bg-main',
        )}
        href="/"
      >
        Home
      </Link>
      <Link
        className={clsx(
          'flex h-full items-center justify-center uppercase',
          path === '/work'
            ? 'bg-black text-white'
            : 'text-main-foreground bg-main',
        )}
        href="/work"
      >
        Projects
      </Link>
      <ThemeSwitcher />
    </nav>
  )
}
