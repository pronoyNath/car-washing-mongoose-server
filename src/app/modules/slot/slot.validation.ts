import { z } from "zod";
import { SLOT_BookedType } from "./slot.constant";


const slotValidationSchema = z.object({
  body: z.object({
    service: z.string(),
    date: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    role: z.nativeEnum(SLOT_BookedType).default(SLOT_BookedType.available),
  }),
});
const slotUpdateValidationSchema = z.object({
  body: z.object({
    date: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    duration: z.number().optional(),
  }),
});

export const SlotValidation = {
    slotValidationSchema,
    slotUpdateValidationSchema,
};
