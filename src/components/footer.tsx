import { SocialLinks } from './social'
import { Theme } from './theme'

export function Footer() {
  return (
    <footer className="flex flex-col gap-4 text-sm lg:flex-row">
      <div className="text-gray-11">
        &#169; {new Date().getFullYear()} &#215; Ali Zahid
      </div>

      <div className="flex flex-1 justify-between gap-8">
        <SocialLinks />

        <Theme />
      </div>
    </footer>
  )
}
