'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import * as React from 'react'

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme()

  return (
    <>
      <button
        className="m500:h-9 border-l-border m500:w-9 rounded-tr-base bg-main w-[50px] border-l-2 p-0 portrait:rounded-none"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <Sun className="m500:size-4 stroke-main-foreground hidden size-6 dark:inline" />
        <Moon className="m500:size-4 stroke-main-foreground inline size-6 dark:hidden" />
        <span className="sr-only">Toggle theme</span>
      </button>
    </>
  )
}
