import * as Bear from '@panelbear/panelbear-js'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const usePanelbear = (
  site: string,
  config?: Bear.PanelbearConfig
): void => {
  const router = useRouter()

  useEffect(() => {
    Bear.load(site, config)

    Bear.trackPageview()

    const handleRouteChange = () => Bear.trackPageview()

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [site, config, router.events])
}
