import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@radix-ui/react-label'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const singUpSchema = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phoneNumber: z.string(),
  email: z.string().email(),
})

type SingUpProps = z.infer<typeof singUpSchema>

export function SingUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SingUpProps>({
    resolver: zodResolver(singUpSchema),
  })

  const navigate = useNavigate()

  useEffect(() => {
    if (errors.email?.message) {
      toast.error('E-mail inválido')
    }
  }, [errors])

  async function handleSingUp({ email }: SingUpProps) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      toast.success('Restaurante cadastrado com sucesso', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      })
    } catch (error) {
      toast.error('Erro ao cadastrar restaurante')
    }
  }

  return (
    <div>
      <Helmet title="Login" />

      <div className="p-8">
        <div className="flex max-w-[350px] flex-col justify-center gap-8">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Crie sua conta grátis
            </h1>

            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas com a nossa plataforma!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSingUp)}>
            <div className="space-y-2 [&>div]:space-y-0 [&_input]:border-2 [&_label]:font-semibold">
              <div>
                <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
                <Input
                  id="restaurantName"
                  type="text"
                  {...register('restaurantName')}
                />
              </div>

              <div>
                <Label htmlFor="managerName">Seu nome</Label>
                <Input
                  id="managerName"
                  type="text"
                  {...register('managerName')}
                />
              </div>

              <div>
                <Label htmlFor="phoneNumber">Seu celular</Label>
                <Input
                  id="phoneNumber"
                  type="number"
                  {...register('phoneNumber')}
                />
              </div>

              <div>
                <Label htmlFor="email">Seu email</Label>
                <Input id="email" {...register('email')} />
              </div>
            </div>

            <div className="space-y-1">
              <p
                className="px-7 py-6 text-center text-sm leading-relaxed text-muted-foreground [&>a]:underline
                [&>a]:underline-offset-4
                "
              >
                Ao continuar, você concorda com nossos{' '}
                <a href="">Termos de serviço</a> e{' '}
                <a href="">políticas de privacidade</a>
              </p>

              <Button
                disabled={isSubmitting}
                type="submit"
                className="w-full hover:bg-green-500"
              >
                Concluir cadastro
              </Button>

              <Button
                variant="outline"
                className="w-full border-2 text-muted-foreground hover:bg-zinc-200"
                asChild
                type="button"
              >
                <Link to="/sign-in">Já tem conta? Faça login</Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
