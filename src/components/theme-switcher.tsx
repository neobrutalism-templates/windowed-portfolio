'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import * as React from 'react'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <>
      <button
        className="m500:h-9 border-l-border dark:border-l-darkBorder m500:w-9 w-[50px] rounded-tr-base border-l-2 bg-main p-0 portrait:rounded-none"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <Sun className="m500:h-4 m500:w-4 stroke-text hidden h-6 w-6 dark:inline" />
        <Moon className="m500:h-4 m500:w-4 stroke-text inline h-6 w-6 dark:hidden" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </>
  )
}
