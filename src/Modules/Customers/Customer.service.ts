import { Tcustomer } from "./Customer.interface";
import { CustomerModel } from "./Customer.model";

const createCustomer = async (data: Tcustomer) => {
  return await CustomerModel.create(data);
};



export const customerServices = {
    createCustomer,
}