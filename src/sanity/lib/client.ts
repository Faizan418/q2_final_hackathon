import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: "xj5y6jbe",
  dataset: "production",
  apiVersion: "2025-01-18",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});
