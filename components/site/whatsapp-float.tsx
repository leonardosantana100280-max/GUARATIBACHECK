'use client'

import { MessageCircle } from 'lucide-react'
import { links } from '@/lib/site-config'
import { trackEvent } from '@/lib/tracking'

export function WhatsappFloat() {
  return (
    <a
      href={links.whatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('clique_whatsapp', { local: 'flutuante' })}
      aria-label="Falar no WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:bottom-6 md:right-6"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  )
}
