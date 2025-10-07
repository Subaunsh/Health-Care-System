'use server';

import {
  personalizedHealthInsights,
  type PersonalizedHealthInsightsInput,
} from '@/ai/flows/personalized-health-insights';

export async function getHealthInsights(
  input: PersonalizedHealthInsightsInput
) {
  try {
    const result = await personalizedHealthInsights(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('AI Flow Error:', error);
    return { success: false, error: 'Failed to generate health insights. Please try again later.' };
  }
}
