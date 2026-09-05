import { ExternalLink, Star } from 'lucide-react'
import { links, reviews } from '@/lib/site-config'
import { SectionHeading } from './section-heading'
import { ActionLink } from './action-buttons'

function Stars() {
  return (
    <div className="flex gap-0.5 text-primary" aria-label="5 estrelas" role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-5 fill-current" aria-hidden="true" />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="avaliacoes" className="scroll-mt-20 bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-14 md:px-6 md:py-20">
        <SectionHeading
          title="O que nossos clientes dizem"
          description="Avaliações públicas de clientes no Google."
        />

        {reviews.length > 0 ? (
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <li
                key={review.author}
                className="flex flex-col gap-3 rounded-lg border border-border bg-card p-5 text-card-foreground"
              >
                <Stars />
                <blockquote className="flex-1 text-pretty leading-relaxed">“{review.text}”</blockquote>
                <footer className="flex items-center justify-between gap-2">
                  <cite className="font-semibold not-italic">{review.author}</cite>
                  {review.url && (
                    <a
                      href={review.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-brand-blue underline-offset-4 hover:underline"
                    >
                      Ver no Google
                      <ExternalLink className="size-4" aria-hidden="true" />
                    </a>
                  )}
                </footer>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-start gap-4 rounded-lg border border-border bg-muted p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-lg leading-relaxed">
              Veja as avaliações reais da Guaratiba Auto Center direto no Google.
            </p>
            <ActionLink href={links.googleReviews} external variant="dark" className="w-full sm:w-auto">
              Ver avaliações no Google
              <ExternalLink className="size-5" aria-hidden="true" />
            </ActionLink>
          </div>
        )}
      </div>
    </section>
  )
}
