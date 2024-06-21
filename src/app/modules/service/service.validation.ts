import { z } from "zod";

const serviceValidationSchema = z.object({
    body: z.object({
      name: z.string(),
      description: z.string(),
      price: z.string(),
      duration: z.string(),
    }),
  });
  

  export const ServiceValidation = {
    serviceValidationSchema
  };