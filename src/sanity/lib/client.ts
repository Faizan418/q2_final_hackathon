import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "xj5y6jbe",  
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-01-01",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, 
});
