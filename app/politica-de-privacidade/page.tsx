import type { Metadata } from 'next'
import { LegalPage } from '@/components/site/legal-page'
import { business } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Política de Privacidade | ${business.name}`,
  description: `Como a ${business.name} trata as informações enviadas pelo site e pelo WhatsApp.`,
  alternates: { canonical: '/politica-de-privacidade' },
}

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalPage title="Política de Privacidade">
      <p>
        Esta página explica como a {business.name} trata as informações de quem acessa este site
        e de quem fala com a gente pelo nosso WhatsApp oficial {business.phoneDisplay}.
      </p>

      <h2 className="text-xl font-bold">Quem trata os seus dados</h2>
      <p>
        49.059.375 LEONARDO SANTANA DA SILVA (nome fantasia {business.name}), CNPJ
        49.059.375/0001-16, {business.address.street}, {business.address.neighborhood},{' '}
        {business.address.city} - {business.address.state}.
      </p>

      <h2 className="text-xl font-bold">Informações que você envia pelo site</h2>
      <p>
        O formulário de orçamento não armazena dados neste site. As informações preenchidas (nome,
        WhatsApp, veículo, ano, placa e descrição do serviço) são usadas apenas para montar uma
        mensagem que é enviada por você, diretamente, para o nosso WhatsApp {business.phoneDisplay}.
      </p>

      <h2 className="text-xl font-bold">Atendimento pelo WhatsApp oficial</h2>
      <p>
        Quando você fala com a gente pelo WhatsApp {business.phoneDisplay}, usamos o que você nos
        envia (nome, telefone, dados do veículo, fotos, áudios e mensagens) só para atender você,
        preparar orçamentos, agendar e prestar o serviço. Parte do atendimento pode contar com uma
        assistente virtual (LUNA), que sempre se identifica como tal e nunca finge ser uma pessoa;
        assuntos que exigem avaliação, negociação ou pagamento são sempre encaminhados à nossa
        equipe. Você pode pedir para falar com uma pessoa a qualquer momento.
      </p>

      <h2 className="text-xl font-bold">Fornecedores de tecnologia e transferência internacional</h2>
      <p>
        Para operar esse atendimento, as mensagens podem passar por fornecedores de tecnologia que
        armazenam dados fora do Brasil: a plataforma oficial de integração com o WhatsApp
        (YCloud, com servidores em Singapura), o serviço de inteligência artificial que dá suporte
        à assistente virtual (Anthropic) e a hospedagem do nosso sistema (Hostinger, nos Estados
        Unidos), além da própria Meta/WhatsApp. Essa transferência é necessária para atender ao seu
        próprio pedido de orçamento ou serviço. Não vendemos os seus dados.
      </p>

      <h2 className="text-xl font-bold">Por quanto tempo guardamos</h2>
      <p>
        No nosso próprio sistema: fotos e áudios recebidos pelo WhatsApp ficam até 90 dias (prazo
        que cobre a garantia da inspeção visual); mensagens e o histórico de atendimento ficam até
        2 anos. Depois desses prazos, os dados são apagados ou tornados anônimos.
      </p>
      <p>
        Isso é diferente do prazo de cada fornecedor: a YCloud, que apenas repassa as mensagens
        para o nosso sistema, mantém sua própria cópia por até 6 meses, segundo a política dela.
        A Meta/WhatsApp e a Anthropic têm suas próprias políticas de retenção, que não controlamos
        e podem ser diferentes das nossas.
      </p>

      <h2 className="text-xl font-bold">Dados de navegação no site</h2>
      <p>
        Podemos utilizar ferramentas de medição de audiência e de anúncios (como Google Analytics,
        Google Ads e Meta) para entender como o site é usado e melhorar o atendimento. Esses serviços
        podem usar cookies. Você pode gerenciar cookies nas configurações do seu navegador.
      </p>

      <h2 className="text-xl font-bold">Compartilhamento</h2>
      <p>
        Não vendemos nem compartilhamos suas informações com terceiros, exceto quando necessário
        para o funcionamento das ferramentas citadas acima ou por exigência legal.
      </p>

      <h2 className="text-xl font-bold">Seus direitos</h2>
      <p>
        Você pode pedir a qualquer momento acesso, correção, exclusão ou anonimização dos seus
        dados, saber com quem compartilhamos e revogar um consentimento. Para parar de receber
        mensagens de acompanhamento, basta responder &quot;PARAR&quot;. Para qualquer um desses
        pedidos, fale com a gente pelo WhatsApp {business.phoneDisplay}; respondemos em até 15 dias.
        Se não ficar satisfeito, você pode reclamar à Autoridade Nacional de Proteção de Dados
        (ANPD), em gov.br/anpd.
      </p>

      <h2 className="text-xl font-bold">Contato</h2>
      <p>
        Em caso de dúvidas sobre privacidade, fale com a gente pelo WhatsApp{' '}
        {business.phoneDisplay} ou na oficina, na {business.address.street},{' '}
        {business.address.neighborhood}, {business.address.city} - {business.address.state}.
      </p>
    </LegalPage>
  )
}
