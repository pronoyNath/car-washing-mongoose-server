import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidations } from './user.validation';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post(
  '/signup',
  // auth(USER_ROLE.admin),
  validateRequest(UserValidations.createUserValidations),
  UserControllers.createUser,
);

// router.post(
//   '/login',
//   // auth(USER_ROLE.admin),
//   validateRequest(UserValidations.createUserValidations),
//   UserControllers.createUser,
// );

export const UserRoutes = router;