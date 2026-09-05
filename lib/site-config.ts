// Dados oficiais da empresa. Edite aqui e todo o site é atualizado.

export const business = {
  name: 'Guaratiba Auto Center',
  legalDescription: 'Centro automotivo, oficina mecânica e autopeças em Pedra de Guaratiba.',
  address: {
    street: 'Estrada da Matriz, 536',
    neighborhood: 'Pedra de Guaratiba',
    city: 'Rio de Janeiro',
    state: 'RJ',
    country: 'BR',
  },
  phoneDisplay: '(21) 99639-1963',
  phoneE164: '+5521996391963',
  whatsappNumber: '5521996391963',
  hours: [
    { label: 'Segunda a sexta', value: '08:00 às 17:00' },
    { label: 'Sábado', value: '08:00 às 13:00' },
    { label: 'Domingo', value: 'Fechado' },
  ],
  // Link oficial do Instagram (perfil visível na fachada da oficina).
  instagramUrl: 'https://www.instagram.com/guaratiba.autocenter',
  instagramHandle: '@guaratiba.autocenter',
  // URL final do site publicado (usada em canonical, Open Graph e sitemap).
  siteUrl: 'https://guaratibaautocenter.com.br',
}

export const fullAddress = `${business.address.street}, ${business.address.neighborhood}, ${business.address.city} - ${business.address.state}`

const mapsQuery = encodeURIComponent(`${business.name}, ${fullAddress}`)

export const links = {
  whatsapp: (message?: string) =>
    `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
      message ?? defaultWhatsappMessage,
    )}`,
  phone: `tel:${business.phoneE164}`,
  googleMaps: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
  googleMapsEmbed: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
  googleReviews: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  waze: `https://waze.com/ul?q=${encodeURIComponent(fullAddress)}&navigate=yes`,
  instagram: business.instagramUrl,
}

export const defaultWhatsappMessage =
  'Olá! Vim pelo site da Guaratiba Auto Center e gostaria de solicitar um orçamento. Meu carro é: ______. O serviço que preciso é: ______. Podem me orientar?'

export const navItems = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre nós' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#localizacao', label: 'Localização' },
  { href: '#contato', label: 'Contato' },
]

export const services = [
  { title: 'Mecânica em geral', description: 'Manutenção preventiva e corretiva do seu veículo.' },
  { title: 'Suspensão', description: 'Amortecedores, kits, buchas, bandejas, pivôs e componentes.' },
  { title: 'Freios', description: 'Pastilhas, discos, revisão e manutenção do sistema de freios.' },
  { title: 'Alinhamento', description: 'Alinhamento da direção para o carro andar reto e sem puxar.' },
  { title: 'Balanceamento', description: 'Balanceamento das rodas para evitar vibração no volante.' },
  { title: 'Troca de óleo e filtros', description: 'Óleo do motor, filtro de óleo, ar, combustível e cabine.' },
  { title: 'Injeção eletrônica', description: 'Limpeza de bicos, sensores e regulagem da injeção.' },
  { title: 'Diagnóstico automotivo', description: 'Scanner e diagnóstico para identificar falhas no veículo.' },
  { title: 'Elétrica automotiva', description: 'Parte elétrica, luzes, chicotes, alternador e motor de partida.' },
  { title: 'Ar-condicionado', description: 'Carga de gás, higienização e reparo do ar-condicionado.' },
  { title: 'Escapamento', description: 'Canos, silenciosos, catalisador e reparo do escapamento.' },
  { title: 'Embreagem', description: 'Kit de embreagem, platô, disco, rolamento e atuador.' },
  { title: 'Motor', description: 'Reparo, retífica e manutenção do motor.' },
  { title: 'Câmbio', description: 'Manutenção de câmbio manual e automático.' },
  { title: 'Correias', description: 'Correia dentada, alternador e tensores.' },
  { title: 'Direção', description: 'Caixa de direção, terminais, barras e direção hidráulica.' },
  { title: 'Bateria', description: 'Teste, troca e instalação de bateria.' },
  { title: 'Autopeças', description: 'Peças para o seu carro no mesmo lugar do serviço.' },
]

export const reasons = [
  { title: '+30 anos no mercado', description: 'Uma oficina de verdade, conhecida na região.' },
  { title: 'Mesmo endereço há mais de 30 anos', description: 'Sempre na Estrada da Matriz, 536.' },
  { title: 'Peças e serviços no mesmo lugar', description: 'Você não precisa correr atrás de peça em outro lugar.' },
  { title: 'Atendimento direto', description: 'Fala com quem vai cuidar do seu carro.' },
  { title: 'Orçamento antes do serviço', description: 'Você aprova primeiro, depois a gente executa.' },
  { title: 'Fácil de chegar', description: 'Na Estrada da Matriz, em Pedra de Guaratiba.' },
]

// AVALIAÇÕES REAIS DO GOOGLE.
// Deixe a lista vazia até receber as avaliações reais. Nunca invente nomes ou textos.
// Exemplo de preenchimento:
// { author: '[NOME REAL DO CLIENTE]', text: '[TRECHO REAL DA AVALIAÇÃO]', url: '[LINK DA AVALIAÇÃO NO GOOGLE]' }
export type Review = { author: string; text: string; url?: string }
export const reviews: Review[] = []

// TRACKING E MARKETING.
// Preencha com os IDs reais quando forem criados. Vazio = desativado.
export const tracking = {
  gtmId: '', // Google Tag Manager, ex.: GTM-XXXXXXX
  ga4Id: '', // Google Analytics 4, ex.: G-XXXXXXXXXX
  googleAdsId: '', // Google Ads, ex.: AW-XXXXXXXXXX
  metaPixelId: '', // Meta Pixel, ex.: 000000000000000
}
