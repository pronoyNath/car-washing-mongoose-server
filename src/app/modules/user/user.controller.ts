import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';

const createAdmin = catchAsync(async(req,res)=>{
    const result = await UserServices.createAdminIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Admin is created succesfully',
        data: result,
      });
})
export const UserControllers = {
    createAdmin,
};