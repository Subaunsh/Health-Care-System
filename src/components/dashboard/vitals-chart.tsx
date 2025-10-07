'use client';

import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';
import { vitalsData } from '@/lib/data';

export default function VitalsChart() {
  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer>
        <AreaChart
          data={vitalsData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorHeartRate" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorBloodPressure" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8} />
              <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              borderColor: 'hsl(var(--border))',
              borderRadius: 'var(--radius)',
            }}
          />
          <Legend />
          <Area type="monotone" dataKey="Heart Rate" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorHeartRate)" />
          <Area type="monotone" dataKey="Blood Pressure" stroke="hsl(var(--chart-2))" fillOpacity={1} fill="url(#colorBloodPressure)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
