import { HTMLProps } from 'react'

export type OrderStatus =
  | 'pending'
  | 'processing'
  | 'delivering'
  | 'delivered'
  | 'canceled'

interface OrderStatusProps {
  status: OrderStatus
}

export const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  processing: 'Em preparo',
  canceled: 'Cancelado',
}

export const badgeColorMap: Record<OrderStatus, string> = {
  pending: 'bg-slate-500',
  processing: 'bg-amber-500',
  delivering: 'bg-amber-500',
  delivered: 'bg-emerald-500',
  canceled: 'bg-rose-500',
} as const

export function OrderStatus({ status }: OrderStatusProps) {
  const Badge = ({ className, ...props }: HTMLProps<HTMLSpanElement>) => {
    return (
      <span
        data-testid="badge"
        className={`size-2 rounded-full ` + className}
        {...props}
      />
    )
  }

  return (
    <div className="flex items-center gap-2">
      <Badge className={badgeColorMap[status]} />

      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
