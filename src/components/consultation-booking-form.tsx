
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { specialists, upcomingAppointments } from '@/lib/data';
import { useRouter } from 'next/navigation';

type Specialist = (typeof specialists)[0];

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  age: z.coerce.number().min(0, 'Age must be a positive number.').max(120, 'Please enter a valid age.'),
  symptoms: z.string().min(10, 'Please describe your symptoms in at least 10 characters.'),
});

interface ConsultationBookingFormProps {
  specialist: Specialist;
}

export function ConsultationBookingForm({ specialist }: ConsultationBookingFormProps) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      age: undefined,
      symptoms: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const now = new Date();
    
    const newAppointment = {
        id: `apt${upcomingAppointments.length + 1}`,
        doctor: specialist.name,
        specialty: specialist.specialty,
        date: now.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' }),
        time: now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' }),
        avatarId: specialist.avatarId,
    };
    upcomingAppointments.push(newAppointment);
    
    toast({
      title: 'Booking Request Sent!',
      description: `Your request to see ${specialist.name} has been submitted.`,
    });
    setOpen(false);
    form.reset();
    router.push('/consultations');
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Book a Consultation</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book a Consultation with {specialist.name}</DialogTitle>
          <DialogDescription>
            Please fill out your details below to request an appointment.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="35" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="symptoms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason for Consultation / Symptoms</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., I've been experiencing persistent headaches for the last week."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Submit Request</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
