import { zodResolver } from '@hookform/resolvers/zod'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const signInSchema = z.object({
  email: z.string().email(),
})

type signInProps = z.infer<typeof signInSchema>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<signInProps>({
    resolver: zodResolver(signInSchema),
  })

  async function handleSignIn({ email }: signInProps) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    toast.success('Enviamos um link de autenticação para o seu e-mail!', {
      action: {
        label: 'Reenviar',
        onClick: () => handleSignIn({ email }),
      },
    })
  }

  return (
    <div>
      <Helmet title="Login" />

      <div className="p-8">
        <div className="flex max-w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar Painel
            </h1>

            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="border-foreground placeholder-muted-foreground
                placeholder:text-base focus-visible:ring-1 focus-visible:ring-offset-0"
                {...register('email')}
              />
            </div>

            <div className="space-y-1">
              <Button
                disabled={isSubmitting}
                type="submit"
                className="w-full hover:bg-green-500"
              >
                Acessar painel
              </Button>

              <Button
                variant="outline"
                className="w-full border-2 text-muted-foreground hover:bg-zinc-200"
                asChild
                type="button"
              >
                <Link to="/sign-up">Não tem conta? Cadastre-se aqui</Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
