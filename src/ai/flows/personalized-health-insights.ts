'use server';

/**
 * @fileOverview Personalized health insights flow that analyzes user data and provides recommendations.
 *
 * - personalizedHealthInsights - A function to generate personalized health insights.
 * - PersonalizedHealthInsightsInput - The input type for the personalizedHealthInsights function.
 * - PersonalizedHealthInsightsOutput - The return type for the personalizedHealthInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedHealthInsightsInputSchema = z.object({
  symptoms: z.string().describe('A description of the user\'s symptoms.'),
  vitals: z.string().describe('The user\'s vital signs data (e.g., heart rate, blood pressure).'),
  activity: z.string().describe('The user\'s activity data (e.g., steps, exercise).'),
  sleep: z.string().describe('The user\'s sleep data (e.g., hours slept, sleep quality).'),
});
export type PersonalizedHealthInsightsInput = z.infer<typeof PersonalizedHealthInsightsInputSchema>;

const PersonalizedHealthInsightsOutputSchema = z.object({
  insights: z.string().describe('Personalized health insights based on the user\'s data.'),
  recommendations: z.string().describe('Personalized health recommendations for the user.'),
});
export type PersonalizedHealthInsightsOutput = z.infer<
  typeof PersonalizedHealthInsightsOutputSchema
>;

export async function personalizedHealthInsights(
  input: PersonalizedHealthInsightsInput
): Promise<PersonalizedHealthInsightsOutput> {
  return personalizedHealthInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedHealthInsightsPrompt',
  input: {schema: PersonalizedHealthInsightsInputSchema},
  output: {schema: PersonalizedHealthInsightsOutputSchema},
  prompt: `You are an AI health assistant that provides personalized health insights and recommendations based on the user's tracked data.

Analyze the following data and provide insights and recommendations:

Symptoms: {{{symptoms}}}
Vitals: {{{vitals}}}
Activity: {{{activity}}}
Sleep: {{{sleep}}}

Insights:
Recommendations: `,
});

const personalizedHealthInsightsFlow = ai.defineFlow(
  {
    name: 'personalizedHealthInsightsFlow',
    inputSchema: PersonalizedHealthInsightsInputSchema,
    outputSchema: PersonalizedHealthInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
