import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import {
  getManagedRestaurant,
  GetManagedRestaurantRes,
} from '@/api/get-managed-restaurant'
import { updateProfile } from '@/api/update-profile'
import { Button } from '@/components/ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const restaurantProfileSchema = z.object({
  name: z.string(),
  description: z.string().nullable(),
})

type RestaurantProfileSchema = z.infer<typeof restaurantProfileSchema>

export function StoreProfileDialog() {
  const queryClient = useQueryClient()

  const { data: restaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,
  })

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onMutate: updateProfileCache,
    onError(_, __, context) {
      if (context?.name) {
        updateProfileCache({
          name: context.name,
          description: context.description,
        })
      }
    },
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RestaurantProfileSchema>({
    resolver: zodResolver(restaurantProfileSchema),
    values: {
      name: restaurant?.name ?? '',
      description: restaurant?.description ?? '',
    },
  })

  function updateProfileCache({ name, description }: RestaurantProfileSchema) {
    const cached = queryClient.getQueryData<GetManagedRestaurantRes>([
      'managed-restaurant',
    ])

    if (cached) {
      queryClient.setQueryData(['managed-restaurant'], {
        ...cached,
        name,
        description,
      })
    }

    return cached
  }

  async function handleProfileUpdate(data: RestaurantProfileSchema) {
    try {
      await updateProfileFn({
        name: data.name,
        description: data.description,
      })

      toast.success('Perfil atualizado com sucesso.')
    } catch (error) {
      toast.error('Falha ao atualizar o perfil, porfav')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visíveis ao seu cliente
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleProfileUpdate)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Name
            </Label>

            <Input className="col-span-3" id="name" {...register('name')} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>

            <Textarea
              className="col-span-3 resize-none"
              id="description"
              {...register('description')}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline" disabled={isSubmitting}>
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit" variant="default" disabled={isSubmitting}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
