
'use client';

import Image from 'next/image';
import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Video } from 'lucide-react';
import { pastAppointments, upcomingAppointments } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ConsultationsPage() {
  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Telehealth Consultations"
        description="Connect with your healthcare providers securely and conveniently."
      />

      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <div>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>
              Your scheduled video and chat consultations.
            </CardDescription>
          </div>
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            Schedule New
          </Button>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          {upcomingAppointments.map((apt) => {
            const avatar = PlaceHolderImages.find(p => p.id === apt.avatarId);
            return (
            <Card key={apt.id}>
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-12 w-12">
                  {avatar && <Image src={avatar.imageUrl} alt={avatar.description} width={48} height={48} data-ai-hint={avatar.imageHint} />}
                  <AvatarFallback>{apt.doctor.charAt(3)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-bold">{apt.doctor}</p>
                  <p className="text-sm text-muted-foreground">{apt.specialty}</p>
                </div>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <div>
                  <p className="text-sm">
                    <span className="font-medium">Date:</span> {apt.date}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Time:</span> {apt.time}
                  </p>
                </div>
                <Button>
                  <Video className="mr-2 h-4 w-4" /> Join Call
                </Button>
              </CardContent>
            </Card>
          )})}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Past Consultations</CardTitle>
          <CardDescription>Review notes from your previous appointments.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            {pastAppointments.map((apt) => (
                <div key={apt.id} className="rounded-lg border bg-card p-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="font-bold">{apt.doctor}</p>
                            <p className="text-sm text-muted-foreground">{apt.specialty}</p>
                            <p className="text-sm text-muted-foreground">{apt.date}</p>
                        </div>
                        <Button variant="outline" size="sm">View Details</Button>
                    </div>
                    <p className="mt-2 text-sm text-foreground/80 italic">"{apt.notes}"</p>
                </div>
            ))}
        </CardContent>
      </Card>
    </div>
  );
}
