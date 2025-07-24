import { Router } from "express";
import { customerRouter } from "../Modules/Customers/Customer.route";

const router = Router();

router.use("/customer", customerRouter);

export default router;
