'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { links } from '@/lib/site-config'
import { trackEvent } from '@/lib/tracking'
import { SectionHeading } from './section-heading'

const inputClass =
  'min-h-12 w-full rounded-lg border border-input bg-background px-4 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'

type Field = {
  name: string
  label: string
  placeholder: string
  required?: boolean
  type?: string
  autoComplete?: string
  inputMode?: 'text' | 'tel' | 'numeric'
}

const fields: Field[] = [
  { name: 'nome', label: 'Nome', placeholder: 'Seu nome', required: true, autoComplete: 'name' },
  { name: 'whatsapp', label: 'WhatsApp', placeholder: '(21) 90000-0000', required: true, type: 'tel', inputMode: 'tel', autoComplete: 'tel' },
  { name: 'veiculo', label: 'Veículo', placeholder: 'Ex.: Honda Civic', required: true },
  { name: 'ano', label: 'Ano', placeholder: 'Ex.: 2015', inputMode: 'numeric' },
  { name: 'placa', label: 'Placa (opcional)', placeholder: 'Ex.: ABC1D23' },
]

export function QuoteForm() {
  const [values, setValues] = useState<Record<string, string>>({})

  function update(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const lines = [
      'Olá! Vim pelo site da Guaratiba Auto Center.',
      '',
      `Nome: ${values.nome ?? ''}`,
      `WhatsApp: ${values.whatsapp ?? ''}`,
      `Veículo: ${values.veiculo ?? ''}`,
      values.ano ? `Ano: ${values.ano}` : null,
      values.placa ? `Placa: ${values.placa}` : null,
      `Serviço/problema: ${values.servico ?? ''}`,
      values.mensagem ? `Mensagem: ${values.mensagem}` : null,
      '',
      'Gostaria de solicitar um orçamento.',
    ].filter((line) => line !== null)

    trackEvent('envio_formulario', { local: 'orcamento' })
    window.open(links.whatsapp(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="orcamento" className="scroll-mt-20 bg-muted">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-[2fr_3fr] lg:gap-12">
        <div className="flex flex-col gap-4">
          <SectionHeading
            title="Quer adiantar seu atendimento?"
            description="Envie algumas informações do veículo e fale com nossa equipe pelo WhatsApp. Não precisa de cadastro."
          />
          <p className="leading-relaxed text-muted-foreground">
            Ao enviar, o WhatsApp abre com a mensagem pronta. Você confere e é só mandar.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5 text-card-foreground md:p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {fields.map((field) => (
              <div key={field.name} className="flex flex-col gap-1.5">
                <label htmlFor={field.name} className="font-medium">
                  {field.label}
                  {field.required && <span aria-hidden="true"> *</span>}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type ?? 'text'}
                  inputMode={field.inputMode}
                  autoComplete={field.autoComplete}
                  placeholder={field.placeholder}
                  required={field.required}
                  value={values[field.name] ?? ''}
                  onChange={(e) => update(field.name, e.target.value)}
                  className={inputClass}
                />
              </div>
            ))}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="servico" className="font-medium">
                Serviço ou problema apresentado <span aria-hidden="true">*</span>
              </label>
              <input
                id="servico"
                name="servico"
                required
                placeholder="Ex.: barulho na suspensão, troca de óleo, revisão"
                value={values.servico ?? ''}
                onChange={(e) => update('servico', e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label htmlFor="mensagem" className="font-medium">
                Mensagem adicional (opcional)
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={3}
                placeholder="Alguma informação a mais que ajude a gente a entender o problema."
                value={values.mensagem ?? ''}
                onChange={(e) => update('mensagem', e.target.value)}
                className={`${inputClass} min-h-24 py-3`}
              />
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-6 text-lg font-semibold text-whatsapp-foreground transition-colors hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Enviar pelo WhatsApp
          </button>
          <p className="text-sm text-muted-foreground">* Campos obrigatórios.</p>
        </form>
      </div>
    </section>
  )
}
