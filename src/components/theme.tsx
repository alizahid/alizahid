'use client'

import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { twMerge } from 'tailwind-merge'

export function Theme() {
  const { setTheme, theme, themes } = useTheme()

  return (
    <div className="flex gap-2">
      {themes.map((item) => (
        <button
          className={twMerge('rounded-full p-2', item === theme && 'bg-gray-3')}
          key={item}
          onClick={() => {
            setTheme(item)
          }}
        >
          {item === 'light' ? (
            <SunIcon className="size-4" />
          ) : item === 'dark' ? (
            <MoonIcon className="size-4" />
          ) : (
            <DesktopIcon className="size-4" />
          )}
        </button>
      ))}
    </div>
  )
}
