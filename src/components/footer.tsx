import { SocialLinks } from './social'
import { Theme } from './theme'

export function Footer() {
  return (
    <footer className="flex flex-col gap-4 text-sm lg:flex-row lg:items-center lg:justify-between">
      <div className="text-gray-11">
        &#169; {new Date().getFullYear()} &#215; Ali Zahid
      </div>

      <SocialLinks />

      <Theme />
    </footer>
  )
}
