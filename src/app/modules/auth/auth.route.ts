import express from "express";
import { authControllers } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { AuthValidation } from "./auth.validation";

const router = express.Router();


router.post(
  "/signup",
  validateRequest(AuthValidation.signupValidationSchema),
  authControllers.signup
);
router.post(
  "/login",
  // validateRequest(AuthValidation.loginValidationSchema),
  authControllers.login
);

export const AuthRoutes = router;
