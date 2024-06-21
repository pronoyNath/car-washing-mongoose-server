import config from "../../config";
import catchAsync from "../../utils/catchAsync";
import { AuthServices } from "./auth.service";

const signup = catchAsync(async (req, res) => {
  const result = await AuthServices.signup(req.body);

  res.status(200).json({
    success: true,
    message: "User signuped successfully!",
    data: result,
  });
});

const login = catchAsync(async (req, res) => {
  const { accessToken, refreshToken } = await AuthServices.login(req.body);
  console.log("asche");
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: config.NODE_ENV === "production",
  });

  res.status(200).json({
    success: true,
    message: "User logged in successfully!",
    data: {
      accessToken,
    },
  });
});

export const authControllers = {
  signup,
  login,
};
