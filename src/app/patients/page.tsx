
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
import PageHeader from '@/components/page-header';
import { patientConsultations } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { MoreVertical } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function PatientsPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Patient Consultations"
        description="Review and manage upcoming and past patient appointments."
      />

      <Card>
        <CardHeader>
          <CardTitle>Incoming Requests</CardTitle>
          <CardDescription>
            A list of patients who have requested a consultation.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient Name</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Symptoms</TableHead>
                <TableHead>Requested Date</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patientConsultations.map((consultation) => (
                <TableRow key={consultation.id}>
                  <TableCell className="font-medium">
                    {consultation.patientName}
                  </TableCell>
                  <TableCell>{consultation.age}</TableCell>
                  <TableCell className="max-w-xs truncate">
                    {consultation.symptoms}
                  </TableCell>
                  <TableCell>{consultation.consultationDate}</TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant={
                        consultation.status === 'Confirmed'
                          ? 'default'
                          : consultation.status === 'Completed'
                          ? 'secondary'
                          : 'outline'
                      }
                      className={
                        consultation.status === 'Confirmed' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        : consultation.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : ''
                      }
                    >
                      {consultation.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Confirm Appointment</DropdownMenuItem>
                        <DropdownMenuItem>Reschedule</DropdownMenuItem>
                         <DropdownMenuItem className="text-destructive">Decline</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
