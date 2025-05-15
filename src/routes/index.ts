import { Router } from "express";
import deleteEmployeesRoutes from "./deleteEmployee";
import getEmployeesRoutes from "./getEmployees";
import postEmployeesRoutes from "./postEmployees";

const router = Router();

router.use("/", getEmployeesRoutes);
router.use("/", postEmployeesRoutes);
router.use("/", deleteEmployeesRoutes);

export default router;
