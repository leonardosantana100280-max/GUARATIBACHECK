import { cn } from '@/lib/utils'

type Props = {
  title: string
  description?: string
  light?: boolean
  align?: 'left' | 'center'
}

export function SectionHeading({ title, description, light, align = 'left' }: Props) {
  return (
    <div className={cn('flex flex-col gap-3', align === 'center' && 'items-center text-center')}>
      <span className="h-1.5 w-12 rounded-full bg-primary" aria-hidden="true" />
      <h2
        className={cn(
          'text-balance text-3xl font-bold tracking-tight md:text-4xl',
          light ? 'text-dark-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-2xl text-pretty text-lg leading-relaxed',
            light ? 'text-dark-muted' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
