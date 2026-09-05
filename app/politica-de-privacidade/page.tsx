import type { Metadata } from 'next'
import { LegalPage } from '@/components/site/legal-page'
import { business } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Política de Privacidade | ${business.name}`,
  description: `Como a ${business.name} trata as informações enviadas pelo site.`,
  alternates: { canonical: '/politica-de-privacidade' },
}

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalPage title="Política de Privacidade">
      <p>
        Esta página explica, de forma simples, como a {business.name} trata as informações de quem
        acessa este site.
      </p>
      <h2 className="text-xl font-bold">Informações que você envia</h2>
      <p>
        O formulário de orçamento não armazena dados neste site. As informações preenchidas (nome,
        WhatsApp, veículo, ano, placa e descrição do serviço) são usadas apenas para montar uma
        mensagem que é enviada por você, diretamente, para o nosso WhatsApp {business.phoneDisplay}.
      </p>
      <h2 className="text-xl font-bold">Dados de navegação</h2>
      <p>
        Podemos utilizar ferramentas de medição de audiência e de anúncios (como Google Analytics,
        Google Ads e Meta) para entender como o site é usado e melhorar o atendimento. Esses serviços
        podem usar cookies. Você pode gerenciar cookies nas configurações do seu navegador.
      </p>
      <h2 className="text-xl font-bold">Compartilhamento</h2>
      <p>
        Não vendemos nem compartilhamos suas informações com terceiros, exceto quando necessário para
        o funcionamento das ferramentas citadas acima ou por exigência legal.
      </p>
      <h2 className="text-xl font-bold">Contato</h2>
      <p>
        Em caso de dúvidas, fale com a gente pelo WhatsApp {business.phoneDisplay} ou na oficina, na{' '}
        {business.address.street}, {business.address.neighborhood}, {business.address.city} -{' '}
        {business.address.state}.
      </p>
    </LegalPage>
  )
}
