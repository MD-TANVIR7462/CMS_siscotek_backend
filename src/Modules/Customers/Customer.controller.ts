import { RequestHandler } from "express";
import { customerSchema } from "./Customer.validation";
import { customerServices } from "./Customer.service";
import { statusCodes } from "../../Configs/StatusCode";

const createCustomer: RequestHandler = async (req, res, next) => {
  try {
    const validatedData = customerSchema.parse(req.body);
    const result = customerServices.createCustomer(validatedData);
    res.status(statusCodes.create).json({
      success: true,
      message: "Customer created successfully",
      data: result,
    });
  } catch (err: any) {
    next(err);
  }
};

export const customerController = {
  createCustomer,
};
