import { SocialLinks } from './social'

export function Footer() {
  return (
    <footer className="flex items-center justify-between">
      <div className="text-sm text-neutral-600 dark:text-neutral-400">
        &#169; {new Date().getFullYear()} &#215; Ali Zahid
      </div>

      <SocialLinks size={24} />
    </footer>
  )
}
