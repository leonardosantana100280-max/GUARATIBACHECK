import { CallButton, DirectionsButton, WhatsappButton } from './action-buttons'

export function FinalCta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center md:px-6 md:py-16">
        <div className="flex flex-col gap-2">
          <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Precisa cuidar do seu carro?
          </h2>
          <p className="text-pretty text-lg md:text-xl">Fale com a Guaratiba Auto Center.</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <WhatsappButton location="cta-final" className="w-full sm:w-auto" />
          <CallButton location="cta-final" className="w-full sm:w-auto" />
          <DirectionsButton
            location="cta-final"
            variant="outline"
            className="w-full border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
          />
        </div>
      </div>
    </section>
  )
}
