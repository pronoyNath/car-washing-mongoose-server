import express from "express";
import { ServiceValidation } from "./service.validation";
import validateRequest from "../../middlewares/validateRequest";
import { ServiceControllers } from "./service.controller";
import { auth } from "../../middlewares/auth";
import { USER_Role } from "../user/user.constant";

const router = express.Router();

router.post(
  "/",
  auth(USER_Role.admin),
  validateRequest(ServiceValidation.serviceValidationSchema),
  ServiceControllers.createService
);
router.get("/:id", ServiceControllers.getSingleService);
router.get("/", ServiceControllers.getAllServices);
router.put("/:id", ServiceControllers.updateSevice);

export const ServiceRoutes = router;
