import { RequestHandler } from "express";
import { customerSchema } from "./Customer.validation";
import { customerServices } from "./Customer.service";
import { statusCodes } from "../../Configs/StatusCode";
import { success } from "../../Utils/response";

const createCustomer: RequestHandler = async (req, res, next) => {
  try {
    const validatedData = customerSchema.parse(req.body);
    const result = await customerServices.createCustomer(validatedData);
    success(res, result, "Customer");
  } catch (err: any) {
    next(err);
  }
};

const getCustomer: RequestHandler = async (req, res, next) => {
  try {
    const customers = await customerServices.getCustomers();
  } catch (err) {
    next(err);
  }
};

export const customerController = {
  createCustomer,
};
