import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { business } from '@/lib/site-config'

export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <header className="bg-dark text-dark-foreground">
        <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-4 md:h-20">
          <Link href="/" aria-label={`${business.name} - voltar ao início`}>
            <Image
              src="/images/logo-guaratiba-auto-center.jpg"
              alt={`Logo ${business.name}`}
              width={180}
              height={180}
              className="h-12 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-12 items-center gap-2 font-medium text-dark-muted hover:text-dark-foreground"
          >
            <ArrowLeft className="size-5" aria-hidden="true" />
            Voltar ao site
          </Link>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-12 leading-relaxed">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
        {children}
      </main>
    </>
  )
}
