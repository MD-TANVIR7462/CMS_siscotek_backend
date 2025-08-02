import { Tcustomer } from "./Customer.interface";
import { CustomerModel } from "./Customer.model";

const createCustomer = async (data: Tcustomer) => {
  return await CustomerModel.create(data);
};

const getCustomers = async (query: any) => {
  const queryData: Record<string, any> = {
    isDeleted: false,
  };
  if (query.isActive !== undefined && query.isActive === "true") {
    queryData.isActive = true;
  }
  if (query.isActive !== undefined && query.isActive === "false") {
    queryData.isActive = false;
  }
  return await CustomerModel.find(queryData).select("--v").sort({ createdAt: -1 });
};

// Get a single customer by ID
const getCustomerById = async (id: string) => {
  return await CustomerModel.findOne({ _id: id, isDeleted: false }).select("-__v");
};

// Update a customer
const updateCustomer = async (id: string, data: Partial<Tcustomer>) => {
  return await CustomerModel.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

// Soft-delete a customer
const deleteCustomer = async (id: string) => {
  return await CustomerModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};

// // Update customer status (active/inactive)
// const updateCustomerStatus = async (id: string, status: { isActive?: boolean; isDeleted?: boolean }) => {
//   return await CustomerModel.findByIdAndUpdate(id, status, { new: true });
// };

export const customerServices = {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
