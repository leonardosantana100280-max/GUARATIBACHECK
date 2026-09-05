'use client'

import { MapPin, Navigation } from 'lucide-react'
import { business, links } from '@/lib/site-config'
import { trackEvent } from '@/lib/tracking'
import { SectionHeading } from './section-heading'
import { ActionLink } from './action-buttons'

export function Location() {
  return (
    <section id="localizacao" className="scroll-mt-20 bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="flex flex-col gap-6">
          <SectionHeading title="Como chegar" />
          <address className="flex items-start gap-3 text-lg not-italic leading-relaxed">
            <MapPin className="mt-1 size-6 shrink-0 text-brand-blue" aria-hidden="true" />
            <div>
              <strong className="block text-xl">{business.name}</strong>
              {business.address.street}
              <br />
              {business.address.neighborhood}
              <br />
              {business.address.city} - {business.address.state}
            </div>
          </address>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ActionLink
              href={links.googleMaps}
              external
              variant="dark"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => trackEvent('clique_google_maps', { local: 'localizacao' })}
            >
              <MapPin className="size-5" aria-hidden="true" />
              Abrir no Google Maps
            </ActionLink>
            <ActionLink
              href={links.waze}
              external
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => trackEvent('clique_waze', { local: 'localizacao' })}
            >
              <Navigation className="size-5" aria-hidden="true" />
              Abrir no Waze
            </ActionLink>
          </div>
          <p className="text-muted-foreground">
            Os aplicativos usam a sua localização atual para traçar a rota até a oficina.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-border">
          <iframe
            title={`Mapa com a localização da ${business.name}`}
            src={links.googleMapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-72 w-full md:h-96"
          />
        </div>
      </div>
    </section>
  )
}
