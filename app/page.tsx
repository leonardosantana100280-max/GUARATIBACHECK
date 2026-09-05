import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { Services } from '@/components/site/services'
import { WhyUs } from '@/components/site/why-us'
import { History } from '@/components/site/history'
import { Reviews } from '@/components/site/reviews'
import { QuoteForm } from '@/components/site/quote-form'
import { Location } from '@/components/site/location'
import { Contact } from '@/components/site/contact'
import { FinalCta } from '@/components/site/final-cta'
import { Footer } from '@/components/site/footer'
import { WhatsappFloat } from '@/components/site/whatsapp-float'
import { LocalBusinessSchema } from '@/components/site/local-business-schema'

export default function Page() {
  return (
    <>
      <LocalBusinessSchema />
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <Services />
        <WhyUs />
        <History />
        <Reviews />
        <QuoteForm />
        <Location />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  )
}
