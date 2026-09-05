export type TrackingEvent =
  | 'clique_whatsapp'
  | 'clique_ligar'
  | 'clique_google_maps'
  | 'clique_waze'
  | 'envio_formulario'
  | 'clique_instagram'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

// Envia o evento para GTM (dataLayer), GA4/Ads (gtag) e Meta Pixel (fbq) quando estiverem instalados.
export function trackEvent(event: TrackingEvent, params: Record<string, string> = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer?.push({ event, ...params })
  window.gtag?.('event', event, params)
  window.fbq?.('trackCustom', event, params)
}
