import { Bell, PlusCircle, RefreshCw } from 'lucide-react';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { medications } from '@/lib/data';
import { Separator } from '@/components/ui/separator';

export default function MedicationsPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Medication Management"
        description="Keep track of your medications, schedules, and refills."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Your Medications</CardTitle>
                <CardDescription>
                  A list of your current and past prescriptions.
                </CardDescription>
              </div>
              <Button size="sm">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Medication
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Medication</TableHead>
                    <TableHead>Dosage</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {medications.map((med) => (
                    <TableRow key={med.id}>
                      <TableCell className="font-medium">{med.name}</TableCell>
                      <TableCell>{med.dosage}</TableCell>
                      <TableCell>{med.frequency}</TableCell>
                      <TableCell className="text-right">
                        <Badge variant={med.status === 'Active' ? 'default' : 'secondary'} className={med.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}>{med.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Reminders
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-medium">Lisinopril</p>
                        <p className="text-sm text-muted-foreground">Due: 8:00 AM</p>
                    </div>
                    <Badge variant="outline">Today</Badge>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                    <div>
                        <p className="font-medium">Metformin</p>
                        <p className="text-sm text-muted-foreground">Due: 9:00 AM</p>
                    </div>
                    <Badge variant="outline">Today</Badge>
                </div>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <RefreshCw className="h-5 w-5" />
                    Upcoming Refills
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                    <p className="font-medium">Atorvastatin</p>
                    <p className="text-sm text-muted-foreground">in 5 days</p>
                </div>
                 <div className="flex items-center justify-between">
                    <p className="font-medium">Lisinopril</p>
                    <p className="text-sm text-muted-foreground">in 12 days</p>
                </div>
            </CardContent>
        </Card>
        </div>
      </div>
    </div>
  );
}
