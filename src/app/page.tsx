import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartPulse, Stethoscope, Video } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center bg-background text-foreground">
      <div className="container mx-auto px-4 py-16 text-center">
        <HeartPulse className="w-24 h-24 mx-auto text-primary" />
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight font-headline">
          Welcome to HealthSync
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Your All-in-One Health Companion.
        </p>
        <p className="mt-2 max-w-2xl mx-auto text-lg">
          Track your vitals, manage medications, and connect with top specialists, all from one secure platform. Take control of your health journey today.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/specialists">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#">Learn More</Link>
          </Button>
        </div>
      </div>

      <div className="w-full bg-secondary py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <Card>
            <CardHeader>
                <Stethoscope className="w-12 h-12 mx-auto text-primary" />
                <CardTitle className="mt-4 text-2xl font-bold">Find Specialists</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    Easily find and book consultations with a wide range of healthcare professionals.
                </p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
                <Video className="w-12 h-12 mx-auto text-primary" />
                <CardTitle className="mt-4 text-2xl font-bold">Telehealth</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    Connect with your doctors through secure video calls from the comfort of your home.
                </p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
                <HeartPulse className="w-12 h-12 mx-auto text-primary" />
                <CardTitle className="mt-4 text-2xl font-bold">Health Tracking</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    Monitor your vitals, symptoms, and lifestyle to get personalized AI-powered insights.
                </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
