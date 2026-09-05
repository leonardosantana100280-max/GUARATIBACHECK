'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { InstagramIcon as Instagram } from './instagram-icon'
import { business, links } from '@/lib/site-config'
import { trackEvent } from '@/lib/tracking'

export function Footer() {
  return (
    <footer className="bg-dark text-dark-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="flex flex-col gap-4">
          <Image
            src="/images/logo-guaratiba-auto-center.jpg"
            alt={`Logo ${business.name}`}
            width={180}
            height={180}
            className="h-16 w-auto"
          />
          <p className="leading-relaxed text-dark-muted">{business.legalDescription}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-bold">Endereço e contato</h2>
          <address className="not-italic leading-relaxed text-dark-muted">
            {business.address.street}
            <br />
            {business.address.neighborhood}
            <br />
            {business.address.city} - {business.address.state}
          </address>
          <p className="text-dark-muted">
            WhatsApp:{' '}
            <a
              href={links.whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('clique_whatsapp', { local: 'rodape' })}
              className="font-semibold text-dark-foreground underline-offset-4 hover:underline"
            >
              {business.phoneDisplay}
            </a>
            <br />
            Telefone:{' '}
            <a
              href={links.phone}
              onClick={() => trackEvent('clique_ligar', { local: 'rodape' })}
              className="font-semibold text-dark-foreground underline-offset-4 hover:underline"
            >
              {business.phoneDisplay}
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-bold">Horários</h2>
          <dl className="flex flex-col gap-1 text-dark-muted">
            {business.hours.map((h) => (
              <div key={h.label} className="flex justify-between gap-4">
                <dt>{h.label}</dt>
                <dd className="font-semibold text-dark-foreground">{h.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('clique_instagram', { local: 'rodape' })}
              className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-dark-foreground/40 px-4 font-medium hover:bg-dark-foreground/10"
            >
              <Instagram className="size-5" aria-hidden="true" />
              Instagram
            </a>
            <a
              href={links.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('clique_google_maps', { local: 'rodape' })}
              className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-dark-foreground/40 px-4 font-medium hover:bg-dark-foreground/10"
            >
              <MapPin className="size-5" aria-hidden="true" />
              Google Maps
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-dark-foreground/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-5 text-sm text-dark-muted md:flex-row md:items-center md:justify-between md:px-6">
          <p>
            © {new Date().getFullYear()} {business.name}. Todos os direitos reservados.
          </p>
          <nav aria-label="Links legais" className="flex gap-4">
            <Link href="/politica-de-privacidade" className="underline-offset-4 hover:underline">
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" className="underline-offset-4 hover:underline">
              Termos de Uso
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
