import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidations } from './user.validation';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post(
  '/create-admin',
  // auth(USER_ROLE.admin),
  validateRequest(UserValidations.createAdminValidations),
  UserControllers.createAdmin,
);

export const UserRoutes = router;