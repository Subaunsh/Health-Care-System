import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Activity, BedDouble, Footprints, HeartPulse } from 'lucide-react';
import VitalsChart from '@/components/dashboard/vitals-chart';
import ActivityChart from '@/components/dashboard/activity-chart';
import SleepChart from '@/components/dashboard/sleep-chart';
import PageHeader from '@/components/page-header';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Welcome Back, Alex"
        description="Here’s a snapshot of your health today."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Heart Rate</CardTitle>
            <HeartPulse className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72 BPM</div>
            <p className="text-xs text-muted-foreground">Normal</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Steps Today</CardTitle>
            <Footprints className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,234</div>
            <p className="text-xs text-muted-foreground">+1,204 from yesterday</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Sleep</CardTitle>
            <BedDouble className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7h 45m</div>
            <p className="text-xs text-muted-foreground">Good quality</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Vitals Overview
            </CardTitle>
            <CardDescription>
              Your heart rate and blood pressure over the last week.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <VitalsChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ActivityChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sleep Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            <SleepChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Symptom Logger</CardTitle>
          <CardDescription>
            Feeling unwell? Log your symptoms here for your record.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex w-full items-center space-x-2">
            <Input
              type="text"
              placeholder="e.g., Headache, mild fever..."
            />
            <Button type="submit">Log Symptom</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
