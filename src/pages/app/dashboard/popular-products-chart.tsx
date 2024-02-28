/* eslint-disable @typescript-eslint/no-explicit-any */
import { BarChart } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const dataList = [
  { product: 'Mussarela', amount: 42 },
  { product: 'Pepperoni', amount: 30 },
  { product: 'Marguerita', amount: 50 },
  { product: '4 Queijos', amount: 16 },
  { product: 'Lombo', amount: 39 },
]

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
]

export function PopularProductsChart() {
  const customizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
    index,
  }: any) => {
    const RADIAN = Math.PI / 180
    const radius = 12 + innerRadius + (outerRadius - innerRadius)
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        className="fill-muted-foreground text-xs"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {dataList[index].product.length > 12
          ? dataList[index].product.substring(0, 12).concat('...')
          : dataList[index].product}{' '}
        ({value})
      </text>
    )
  }

  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>

          <BarChart className="size-4 text-muted-foreground" />
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              data={dataList}
              dataKey="amount"
              nameKey="product"
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={50}
              strokeWidth={2}
              label={customizedLabel}
              labelLine={false}
            >
              {dataList.map((_, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    className="stroke-background hover:opacity-60"
                  />
                )
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
