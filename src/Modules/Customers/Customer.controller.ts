import { RequestHandler } from "express";
import { customerSchema } from "./Customer.validation";
import { customerServices } from "./Customer.service";
import { emptyResponse, notUpdated, success } from "../../Utils/response";

// Create a new customer
const createCustomer: RequestHandler = async (req, res, next) => {
  try {
    const validatedData = customerSchema.parse(req.body);
    const result = await customerServices.createCustomer(validatedData);
    success(res, result, "Customer created");
  } catch (err: any) {
    next(err);
  }
};

// Get all customers (with optional isActive filter)
const getCustomer: RequestHandler = async (req, res, next) => {
  try {
    const query = req.query;
    const customers = await customerServices.getCustomers(query);
    if (customers.length === 0) {
      emptyResponse(res, customers);
      return;
    }
    success(res, customers, "Customers retrieved", customers.length);
  } catch (err) {
    next(err);
  }
};

// Get a single customer by ID
const getSingleCustomer: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const customer = await customerServices.getCustomerById(id);
    if (!customer) {
      notUpdated(res, id, null);
      return;
    }
    success(res, customer, "Customer retrieved");
  } catch (err) {
    next(err);
  }
};

// Update a customer
const updateCustomer: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const validatedData = customerSchema.partial().parse(req.body); // allow partial updates
    const updatedCustomer = await customerServices.updateCustomer(id, validatedData);
    if (!updatedCustomer) {
      emptyResponse(res, null);
      return;
    }
    success(res, updatedCustomer, "Customer updated");
  } catch (err) {
    next(err);
  }
};

// Soft delete a customer
const deleteCustomer: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    // if(!id){
    //   return
    // }
    const deletedCustomer = await customerServices.deleteCustomer(id);
    if (!deletedCustomer) {
      notUpdated(res, id, null);
      return;
    }
    success(res, deletedCustomer, "Customer deleted");
  } catch (err) {
    next(err);
  }
};

export const customerController = {
  createCustomer,
  getCustomer,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
};
