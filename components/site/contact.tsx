'use client'

import { Clock, MessageCircle, Phone } from 'lucide-react'
import { InstagramIcon as Instagram } from './instagram-icon'
import { business, links } from '@/lib/site-config'
import { trackEvent } from '@/lib/tracking'
import { SectionHeading } from './section-heading'

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-20 bg-muted">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-14 md:px-6 md:py-20">
        <SectionHeading title="Horários e contato" />

        <div className="grid gap-4 md:grid-cols-3">
          <a
            href={links.whatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('clique_whatsapp', { local: 'contato' })}
            className="flex flex-col gap-2 rounded-lg border border-border bg-card p-5 text-card-foreground transition-colors hover:border-whatsapp"
          >
            <span className="flex items-center gap-2 font-semibold text-muted-foreground">
              <MessageCircle className="size-5 text-whatsapp" aria-hidden="true" />
              WhatsApp
            </span>
            <span className="text-2xl font-bold">{business.phoneDisplay}</span>
            <span className="text-sm text-muted-foreground">Toque para abrir a conversa</span>
          </a>

          <a
            href={links.phone}
            onClick={() => trackEvent('clique_ligar', { local: 'contato' })}
            className="flex flex-col gap-2 rounded-lg border border-border bg-card p-5 text-card-foreground transition-colors hover:border-foreground"
          >
            <span className="flex items-center gap-2 font-semibold text-muted-foreground">
              <Phone className="size-5" aria-hidden="true" />
              Telefone
            </span>
            <span className="text-2xl font-bold">{business.phoneDisplay}</span>
            <span className="text-sm text-muted-foreground">Toque para ligar</span>
          </a>

          <div className="flex flex-col gap-2 rounded-lg border border-border bg-card p-5 text-card-foreground">
            <span className="flex items-center gap-2 font-semibold text-muted-foreground">
              <Clock className="size-5" aria-hidden="true" />
              Horário de funcionamento
            </span>
            <dl className="flex flex-col gap-1">
              {business.hours.map((h) => (
                <div key={h.label} className="flex justify-between gap-4">
                  <dt>{h.label}</dt>
                  <dd className="font-bold">{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <a
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('clique_instagram', { local: 'contato' })}
          className="inline-flex w-fit items-center gap-2 text-lg font-medium text-brand-blue underline-offset-4 hover:underline"
        >
          <Instagram className="size-5" aria-hidden="true" />
          {business.instagramHandle}
        </a>
      </div>
    </section>
  )
}
