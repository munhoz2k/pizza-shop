/* eslint-disable @typescript-eslint/ban-types */
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const dataList = [
  { date: '11/12', revenue: 1000 },
  { date: '12/12', revenue: 285 },
  { date: '13/12', revenue: 1790 },
  { date: '14/12', revenue: 950 },
  { date: '15/12', revenue: 790 },
  { date: '16/12', revenue: 920 },
  { date: '17/12', revenue: 485 },
  { date: '18/12', revenue: 1670 },
  { date: '19/12', revenue: 1320 },
  { date: '20/12', revenue: 1705 },
]

export function RevenueChart() {
  function formatTickValue(value: number) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomToolTip = ({ active, payload, label }: any) => {
    console.log(active, payload, label)
    if (active && payload && payload.length) {
      return (
        <div className="space-y-2 rounded-md bg-muted/90 p-2">
          <div className="space-x-1">
            <span className="text-sm font-medium">Data:</span>
            <span className="text-xs text-muted-foreground">{label}</span>
          </div>

          <div className="space-x-1">
            <span className="text-sm font-medium">Total:</span>
            <span className="text-xs text-muted-foreground">
              {payload[0].value.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </div>
        </div>
      )
    }
  }

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={dataList} style={{ fontSize: 12 }}>
            <CartesianGrid
              className="stroke-muted-foreground/30"
              vertical={false}
            />

            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={100}
              dx={-20}
              tickFormatter={formatTickValue}
            />

            <XAxis axisLine={false} tickLine={false} dataKey="date" dy={10} />

            <Tooltip isAnimationActive={false} content={<CustomToolTip />} />

            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.orange[500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
