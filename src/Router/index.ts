import { Router } from "express";
import { customerRouter } from "../Modules/Customers/Customer.route";
import { RegistrationRoutes } from "../Modules/Customers/Auth/Registration/auth.routes";
import { LoginRoutes } from "../Modules/Customers/Auth/Login/login.routes";

const router = Router();

router.use("/customer", customerRouter);
router.use("/auth/register", RegistrationRoutes);
router.use("/auth/login", LoginRoutes);

export default router;
