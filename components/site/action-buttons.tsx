'use client'

import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { links } from '@/lib/site-config'
import { trackEvent } from '@/lib/tracking'

type Variant = 'whatsapp' | 'yellow' | 'dark' | 'outline' | 'outline-light'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'

const variants: Record<Variant, string> = {
  whatsapp: 'bg-whatsapp text-whatsapp-foreground hover:brightness-95',
  yellow: 'bg-primary text-primary-foreground hover:brightness-95',
  dark: 'bg-dark text-dark-foreground hover:bg-dark/90',
  outline: 'border-2 border-foreground/80 bg-background text-foreground hover:bg-muted',
  'outline-light': 'border-2 border-dark-foreground/70 text-dark-foreground hover:bg-dark-foreground/10',
}

const sizes: Record<Size, string> = {
  md: 'min-h-12 px-5 text-base',
  lg: 'min-h-14 px-6 text-lg',
}

type ActionLinkProps = {
  href: string
  variant?: Variant
  size?: Size
  className?: string
  external?: boolean
  onClick?: () => void
  children: React.ReactNode
}

export function ActionLink({
  href,
  variant = 'yellow',
  size = 'md',
  className,
  external,
  onClick,
  children,
}: ActionLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </a>
  )
}

type CtaProps = { size?: Size; className?: string; location: string; variant?: Variant }

export function WhatsappButton({ size = 'lg', className, location, variant = 'whatsapp' }: CtaProps) {
  return (
    <ActionLink
      href={links.whatsapp()}
      external
      variant={variant}
      size={size}
      className={className}
      onClick={() => trackEvent('clique_whatsapp', { local: location })}
    >
      <MessageCircle className="size-5 shrink-0" aria-hidden="true" />
      Falar no WhatsApp
    </ActionLink>
  )
}

export function CallButton({ size = 'lg', className, location, variant = 'dark' }: CtaProps) {
  return (
    <ActionLink
      href={links.phone}
      variant={variant}
      size={size}
      className={className}
      onClick={() => trackEvent('clique_ligar', { local: location })}
    >
      <Phone className="size-5 shrink-0" aria-hidden="true" />
      Ligar agora
    </ActionLink>
  )
}

export function DirectionsButton({ size = 'lg', className, location, variant = 'outline' }: CtaProps) {
  return (
    <ActionLink
      href={links.googleMaps}
      external
      variant={variant}
      size={size}
      className={className}
      onClick={() => trackEvent('clique_google_maps', { local: location })}
    >
      <MapPin className="size-5 shrink-0" aria-hidden="true" />
      Como chegar
    </ActionLink>
  )
}
