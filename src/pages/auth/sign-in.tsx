import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { signIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const signInSchema = z.object({
  email: z.string().email(),
})

type signInProps = z.infer<typeof signInSchema>

export function SignIn() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<signInProps>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSignIn({ email }: signInProps) {
    try {
      await authenticate({ email })

      toast.success(
        'Login realizado com sucesso, clique no botão para acessar a página inicial!',
        {
          action: {
            label: 'Início',
            onClick: () => navigate('/', { replace: true }),
          },
        },
      )
    } catch (err) {
      toast.error('Credenciais inválidas')
    }
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
                className="placeholder-muted-foreground focus-visible:ring-2
                focus-visible:ring-offset-0"
                {...register('email')}
                data-testid="emailInput"
              />
            </div>

            <div className="space-y-1">
              <Button disabled={isSubmitting} type="submit" className="w-full">
                Acessar painel
              </Button>

              <Button
                variant="outline"
                className="w-full"
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
