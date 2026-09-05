import { Wrench } from 'lucide-react'
import { services } from '@/lib/site-config'
import { SectionHeading } from './section-heading'
import { WhatsappButton } from './action-buttons'

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-20 bg-muted">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-14 md:px-6 md:py-20">
        <SectionHeading
          title="O que fazemos"
          description="Mecânica, manutenção e peças para o seu carro, tudo no mesmo endereço."
        />

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="flex gap-3 rounded-lg border border-border bg-card p-4 text-card-foreground"
            >
              <span
                className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground"
                aria-hidden="true"
              >
                <Wrench className="size-5" />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold leading-snug">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-start gap-3 rounded-lg border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-medium">Não achou o serviço na lista? Pergunte pra gente.</p>
          <WhatsappButton location="servicos" size="md" className="w-full sm:w-auto" />
        </div>
      </div>
    </section>
  )
}
