import type { Metadata } from 'next'
import { LegalPage } from '@/components/site/legal-page'
import { business } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Termos de Uso | ${business.name}`,
  description: `Condições de uso do site da ${business.name}.`,
  alternates: { canonical: '/termos-de-uso' },
}

export default function TermosDeUsoPage() {
  return (
    <LegalPage title="Termos de Uso">
      <p>Ao usar este site, você concorda com as condições abaixo.</p>
      <h2 className="text-xl font-bold">Finalidade do site</h2>
      <p>
        Este site tem caráter informativo e serve para facilitar o contato com a {business.name}{' '}
        por WhatsApp, telefone e aplicativos de rota.
      </p>
      <h2 className="text-xl font-bold">Orçamentos</h2>
      <p>
        As informações enviadas pelo site ou pelo WhatsApp servem para um primeiro contato. O
        orçamento definitivo é feito após a avaliação do veículo na oficina e sempre antes da
        execução do serviço.
      </p>
      <h2 className="text-xl font-bold">Conteúdo</h2>
      <p>
        A logo, a foto da fachada e os textos deste site pertencem à {business.name} e não podem ser
        reproduzidos sem autorização.
      </p>
      <h2 className="text-xl font-bold">Links externos</h2>
      <p>
        O site contém links para serviços de terceiros, como WhatsApp, Google Maps, Waze e Instagram.
        Não nos responsabilizamos pelo conteúdo ou pelas políticas desses serviços.
      </p>
    </LegalPage>
  )
}
