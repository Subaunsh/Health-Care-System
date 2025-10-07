'use client';

import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { sleepData } from '@/lib/data';

export default function SleepChart() {
  return (
    <div className="h-[250px] w-full">
      <ResponsiveContainer>
        <LineChart
          data={sleepData}
          margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
        >
          <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} unit="h" />
          <Tooltip
             contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              borderColor: 'hsl(var(--border))',
              borderRadius: 'var(--radius)',
            }}
          />
          <Line type="monotone" dataKey="Hours" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4, fill: 'hsl(var(--primary))' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
