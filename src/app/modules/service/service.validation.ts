import { z } from "zod";

const serviceValidationSchema = z.object({
    body: z.object({
      name: z.string(),
      description: z.string(),
      price: z.number(),
      duration: z.number(),
    }),
  });
  

  export const ServiceValidation = {
    serviceValidationSchema
  };