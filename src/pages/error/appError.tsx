import { Link } from 'react-router-dom'

export function AppError() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-foreground">
        Ops, a aplicação falhou...
      </h1>

      <p className="mt-4 text-accent-foreground">
        Um erro inesperado aconteceu na aplicação...
      </p>

      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-500 dark:text-sky-400">
          Dashboard
        </Link>{' '}
      </p>
    </div>
  )
}
