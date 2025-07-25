import { Router } from "express";
import { customerController } from "./Customer.controller";

const router = Router();

router.post("/create-customer", customerController.createCustomer);
router.get("/get-customer", customerController.getCustomer);
router.get("/get-customer/:id", customerController.getSingleCustomer);
router.patch("/update-customer/:id", customerController.updateCustomer);
router.delete("/delete-customer/:id", customerController.deleteCustomer);
// router.get("/get-customer", customerController.getCustomer);

export const customerRouter = router;
