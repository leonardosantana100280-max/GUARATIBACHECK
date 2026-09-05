import Image from 'next/image'
import { SectionHeading } from './section-heading'

export function History() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-dark text-dark-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="flex flex-col gap-6">
          <SectionHeading light title="Nossa história" />
          <div className="flex flex-col gap-4 text-lg leading-relaxed text-dark-muted">
            <p>
              A Guaratiba Auto Center faz parte de Pedra de Guaratiba há mais de 30 anos. Durante esse
              tempo, muitos veículos da região já passaram pela nossa oficina, sempre no mesmo endereço:
              Estrada da Matriz, 536.
            </p>
            <p>
              Trabalhamos com mecânica, manutenção e peças automotivas, com atendimento direto,
              orçamento antes do serviço e sem complicação.
            </p>
            <p>São mais de três décadas construindo confiança com quem mora e trabalha por aqui.</p>
          </div>
        </div>
        <Image
          src="/images/logo-guaratiba-auto-center.jpg"
          alt="Logo Guaratiba Auto Center"
          width={320}
          height={320}
          className="mx-auto w-56 rounded-xl lg:w-72"
        />
      </div>
    </section>
  )
}
