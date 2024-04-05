'use client'

import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { twMerge } from 'tailwind-merge'

export function Theme() {
  const { setTheme, theme, themes } = useTheme()

  return (
    <div className="flex gap-4">
      {themes.map((item) => (
        <button
          className={twMerge(
            'text-gray-11 transition-colors hover:text-gray-12',
            item === theme && 'text-gray-12',
          )}
          key={item}
          onClick={() => {
            setTheme(item)
          }}
        >
          {item === 'light' ? (
            <SunIcon className="size-5" />
          ) : item === 'dark' ? (
            <MoonIcon className="size-5" />
          ) : (
            <DesktopIcon className="size-5" />
          )}
        </button>
      ))}
    </div>
  )
}
