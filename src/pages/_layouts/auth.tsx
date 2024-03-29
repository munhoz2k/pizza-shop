import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

import pizzaSvg from '@/assets/pizza-maker.svg'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="flex h-full flex-col justify-between border-r-2 border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <Pizza className="h-5 w-5" />
          <span className="font-sans font-semibold">pizza.shop</span>
        </div>

        <img src={pizzaSvg} className="mx-auto size-[90%]" alt="Pizzaiolo" />

        <footer className="text-sm">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
