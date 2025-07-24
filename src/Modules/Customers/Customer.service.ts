import { Tcustomer } from "./Customer.interface";
import { CustomerModel } from "./Customer.model";

const createCustomer = async (data: Tcustomer) => {
  return await CustomerModel.create(data);
};

const getCustomers = async()=>{
return await CustomerModel.find().select("--v").sort({createdAt:-1})


}


export const customerServices = {
    createCustomer,getCustomers
}