import { business, links } from '@/lib/site-config'

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['AutoRepair', 'LocalBusiness'],
    '@id': `${business.siteUrl}/#negocio`,
    name: business.name,
    description: business.legalDescription,
    url: business.siteUrl,
    telephone: business.phoneE164,
    image: `${business.siteUrl}/images/fachada-guaratiba-auto-center.jpg`,
    logo: `${business.siteUrl}/images/logo-guaratiba-auto-center.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      addressCountry: business.address.country,
    },
    areaServed: [
      { '@type': 'Place', name: 'Pedra de Guaratiba' },
      { '@type': 'Place', name: 'Guaratiba' },
      { '@type': 'City', name: 'Rio de Janeiro' },
    ],
    hasMap: links.googleMaps,
    sameAs: [business.instagramUrl],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '13:00',
      },
    ],
    priceRange: '$$',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
