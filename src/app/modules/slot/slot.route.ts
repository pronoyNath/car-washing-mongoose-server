import express from "express";
import { auth } from "../../middlewares/auth";
import { USER_Role } from "../user/user.constant";
import validateRequest from "../../middlewares/validateRequest";
import { SlotValidation } from "./slot.validation";
import { SlotControllers } from "./slot.controller";

const router = express.Router();

router.post(
  "/",
  auth(USER_Role.admin),
  validateRequest(SlotValidation.slotValidationSchema),
  SlotControllers.createSlot
);

export const SlotRoutes = router;
