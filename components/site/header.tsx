'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, MessageCircle, Phone, X } from 'lucide-react'
import { business, links, navItems } from '@/lib/site-config'
import { trackEvent } from '@/lib/tracking'
import { ActionLink } from './action-buttons'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-dark-foreground/10 bg-dark text-dark-foreground">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-4 px-4 md:h-24 md:px-6">
        <a
          href="#inicio"
          className="relative block h-16 w-40 shrink-0 overflow-hidden md:h-20 md:w-52"
          aria-label={`${business.name} - início`}
        >
          <Image
            src="/images/logo-guaratiba-auto-center.jpg"
            alt={`Logo ${business.name}`}
            fill
            priority
            sizes="(min-width: 768px) 208px, 160px"
            className="object-cover object-[center_46%] scale-[1.12]"
          />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-base font-medium text-dark-muted transition-colors hover:text-dark-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ActionLink
            href={links.phone}
            variant="outline-light"
            size="md"
            className="hidden px-3 sm:inline-flex lg:hidden"
            onClick={() => trackEvent('clique_ligar', { local: 'header' })}
          >
            <Phone className="size-5" aria-hidden="true" />
            <span className="sr-only">Ligar agora</span>
          </ActionLink>
          <ActionLink
            href={links.whatsapp()}
            external
            variant="whatsapp"
            size="md"
            className="px-3 sm:px-5"
            onClick={() => trackEvent('clique_whatsapp', { local: 'header' })}
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </ActionLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="flex size-12 items-center justify-center rounded-lg text-dark-foreground hover:bg-dark-foreground/10 lg:hidden"
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Navegação principal"
          className="border-t border-dark-foreground/10 bg-dark lg:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-dark-foreground/10 py-4 text-lg font-medium text-dark-foreground last:border-0"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
