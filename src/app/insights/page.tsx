'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Sparkles, Lightbulb, CheckCircle } from 'lucide-react';

import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { getHealthInsights } from './actions';
import type { PersonalizedHealthInsightsOutput } from '@/ai/flows/personalized-health-insights';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  symptoms: z.string().min(10, 'Please describe your symptoms in at least 10 characters.'),
  vitals: z.string().min(10, 'Please provide your vitals data (e.g., Heart Rate: 75bpm, BP: 120/80).'),
  activity: z.string().min(10, 'Please describe your recent activity (e.g., 8000 steps, 30min jog).'),
  sleep: z.string().min(10, 'Please describe your sleep last night (e.g., 7.5 hours, woke up once).'),
});

export default function InsightsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PersonalizedHealthInsightsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      symptoms: '',
      vitals: '',
      activity: '',
      sleep: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);

    const response = await getHealthInsights(values);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: response.error,
      });
    }

    setIsLoading(false);
  }

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Personalized Health Insights"
        description="Leverage AI to analyze your health data and get personalized recommendations."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Enter Your Data</CardTitle>
            <CardDescription>
              Provide your recent health metrics to generate insights.
            </CardDescription>
          </CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="symptoms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Symptoms</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g., Mild headache and fatigue..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="vitals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vitals</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g., Heart rate: 72bpm, BP: 120/80" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="activity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Activity</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g., Walked 8,000 steps, 30 min yoga" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="sleep"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sleep</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g., 7 hours, felt rested" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                  )}
                  Generate Insights
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>

        <div className="space-y-8">
          {isLoading && (
            <Card className="flex h-full min-h-96 flex-col items-center justify-center">
              <CardContent className="text-center">
                <Loader2 className="mx-auto mb-4 h-12 w-12 animate-spin text-primary" />
                <p className="text-lg font-medium">Generating your insights...</p>
                <p className="text-muted-foreground">
                  The AI is analyzing your data. This might take a moment.
                </p>
              </CardContent>
            </Card>
          )}

          {!isLoading && !result && (
            <Card className="flex h-full min-h-96 flex-col items-center justify-center bg-secondary/50">
              <CardContent className="text-center">
                <Sparkles className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <p className="text-lg font-medium text-muted-foreground">
                  Your insights will appear here.
                </p>
              </CardContent>
            </Card>
          )}

          {result && (
            <>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="text-yellow-500" />
                    AI-Powered Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap font-body text-foreground/90">
                    {result.insights}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="text-green-500" />
                    Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap font-body text-foreground/90">
                    {result.recommendations}
                  </p>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
