import { Router } from "express";
import { customerController } from "./Customer.controller";

const router = Router();

router.post("/create-customer", customerController.createCustomer);

export const customerRouter = router;
