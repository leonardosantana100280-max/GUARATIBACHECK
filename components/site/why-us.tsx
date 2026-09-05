import { Check } from 'lucide-react'
import { reasons } from '@/lib/site-config'
import { SectionHeading } from './section-heading'

export function WhyUs() {
  return (
    <section id="por-que" className="scroll-mt-20 bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-14 md:px-6 md:py-20">
        <SectionHeading title="Por que escolher a Guaratiba Auto Center" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <li key={reason.title} className="flex gap-3">
              <span
                className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
                aria-hidden="true"
              >
                <Check className="size-4" strokeWidth={3} />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold leading-snug">{reason.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{reason.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
