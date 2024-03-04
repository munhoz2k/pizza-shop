import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-extrabold text-primary-foreground">
        Página não encontrada
      </h1>

      <p className="text-muted-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-500 dark:text-sky-400">
          Dashboard
        </Link>{' '}
      </p>
    </div>
  )
}
