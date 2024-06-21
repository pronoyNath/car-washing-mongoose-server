/* eslint-disable @typescript-eslint/no-explicit-any */
import { TSlot } from "./slot.interface";
import { Slot } from "./slot.model";

const createSlotIntoDB = async (payload: TSlot) => {

  const serviceDuration = 60; // Service duration in minutes
  const { service, date, startTime, endTime } = payload;

  // Helper function to convert "HH:MM" to minutes since midnight
  const timeToMinutes = (time: string): number => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const startMinutes = timeToMinutes(startTime);
  const endMinutes = timeToMinutes(endTime);
  const totalDuration = endMinutes - startMinutes;
  const numberOfSlots = totalDuration / serviceDuration;
  const createdSlots = [];

  for (let i = 0; i < numberOfSlots; i++) {
    const slotStartMinutes = startMinutes + i * serviceDuration;
    const slotEndMinutes = slotStartMinutes + serviceDuration;

    const slotStartTime = new Date();
    slotStartTime.setHours(Math.floor(slotStartMinutes / 60));
    slotStartTime.setMinutes(slotStartMinutes % 60);

    const slotEndTime = new Date();
    slotEndTime.setHours(Math.floor(slotEndMinutes / 60));
    slotEndTime.setMinutes(slotEndMinutes % 60);

    const slotPayload: TSlot = {
      service,
      date,
      startTime: slotStartTime.toTimeString().slice(0, 5),
      endTime: slotEndTime.toTimeString().slice(0, 5),
    };

    const slot = await Slot.create(slotPayload);
    createdSlots.push(slot);
  }

  return createdSlots;
}


// };

// const getSingleServiceFromDB = async (id: string) => {
//   const result = await Service.findById(id);

//   return result;
// };

// const getAllServicesFromDB = async () => {
//   const result = Service.find();
//   return result;
// };

// const updateServiceIntoDB = async (id: string, payload: Partial<TService>) => {
//   const result = await Service.findOneAndUpdate({ _id: id }, payload, {
//     new: true,
//   });
//   return result;
// };

// const deleteServiceFromDB = async (id: string) => {

//   const isExits = await Service.findById(id);

//   if(!isExits){
//     throw new AppError(httpStatus.BAD_REQUEST, "NO servive available!");
//   }

//   const result = await Service.findByIdAndUpdate(
//     id,
//     { isDeleted: true },
//     {
//       new: true,
//     }
//   );
//   return result;
// };

export const SlotServices = {
  createSlotIntoDB,
  //   getSingleServiceFromDB,
  //   getAllServicesFromDB,
  //   updateServiceIntoDB,
  //   deleteServiceFromDB,
};
