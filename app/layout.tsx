import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { business } from '@/lib/site-config'
import { TrackingScripts } from '@/components/site/tracking-scripts'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const title = 'Guaratiba Auto Center | Oficina Mecânica e Autopeças em Pedra de Guaratiba'
const description =
  'Oficina mecânica em Pedra de Guaratiba há mais de 30 anos. Mecânica em geral, suspensão, freios, alinhamento, balanceamento, troca de óleo, ar-condicionado e autopeças. Estrada da Matriz, 536. WhatsApp (21) 99639-1963.'

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title,
  description,
  alternates: { canonical: '/' },
  keywords: [
    'oficina em Pedra de Guaratiba',
    'oficina mecânica Pedra de Guaratiba',
    'mecânico Pedra de Guaratiba',
    'centro automotivo Pedra de Guaratiba',
    'autopeças Pedra de Guaratiba',
    'alinhamento Pedra de Guaratiba',
    'troca de óleo Pedra de Guaratiba',
    'suspensão Pedra de Guaratiba',
    'freios Pedra de Guaratiba',
    'ar condicionado automotivo Pedra de Guaratiba',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: business.name,
    title,
    description,
    images: [
      {
        url: '/images/fachada-guaratiba-auto-center.jpg',
        width: 1200,
        height: 1600,
        alt: `Fachada da ${business.name} em Pedra de Guaratiba`,
      },
    ],
  },
  twitter: { card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
  icons: {
    icon: '/images/logo-guaratiba-auto-center.jpg',
    apple: '/images/logo-guaratiba-auto-center.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: '#171717',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.className} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <TrackingScripts />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
