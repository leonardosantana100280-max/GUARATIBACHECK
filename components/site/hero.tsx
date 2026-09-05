import Image from 'next/image'
import { Clock, MapPin } from 'lucide-react'
import { business } from '@/lib/site-config'
import { CallButton, DirectionsButton, WhatsappButton } from './action-buttons'

export function Hero() {
  return (
    <section id="inicio" className="bg-background">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-8 md:px-6 md:py-16 lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:items-center lg:gap-x-12 lg:gap-y-8">
        <div className="flex flex-col gap-4 lg:col-start-1 lg:row-start-1 lg:self-end">
          <p className="inline-flex w-fit items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground">
            <MapPin className="size-4" aria-hidden="true" />
            Estrada da Matriz, 536 · Pedra de Guaratiba
          </p>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Seu carro em boas mãos em Pedra de Guaratiba.
          </h1>

          <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Mecânica, peças e serviços automotivos no mesmo lugar. Há mais de 30 anos atendendo em
            Pedra de Guaratiba.
          </p>
        </div>

        <figure className="flex flex-col gap-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <div className="overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/fachada-guaratiba-auto-center.jpg"
              alt="Fachada real da Guaratiba Auto Center na Estrada da Matriz, 536, em Pedra de Guaratiba, com carros sendo atendidos"
              width={1200}
              height={1600}
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-video w-full object-cover object-[center_58%] lg:aspect-[4/3]"
            />
          </div>
          <figcaption className="text-sm text-muted-foreground">
            Nossa oficina na Estrada da Matriz, 536 — Pedra de Guaratiba.
          </figcaption>
        </figure>

        <div className="flex flex-col gap-6 lg:col-start-1 lg:row-start-2 lg:self-start">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <WhatsappButton location="hero" className="w-full sm:w-auto" />
            <DirectionsButton location="hero" className="w-full sm:w-auto" />
            <CallButton location="hero" className="w-full sm:w-auto" />
          </div>

          <dl className="grid grid-cols-2 gap-4 border-t border-border pt-6 text-sm md:text-base">
            <div>
              <dt className="text-muted-foreground">Tempo de mercado</dt>
              <dd className="font-bold">Mais de 30 anos</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Mesmo endereço</dt>
              <dd className="font-bold">Há mais de 30 anos</dd>
            </div>
            <div className="col-span-2 flex items-start gap-2">
              <Clock className="mt-0.5 size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
              <div>
                <dt className="sr-only">Horário</dt>
                <dd>
                  {business.hours[0].label}: <strong>{business.hours[0].value}</strong>
                  {' · '}
                  {business.hours[1].label}: <strong>{business.hours[1].value}</strong>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
