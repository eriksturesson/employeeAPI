import { Router } from "express";
import { addEmployeeController } from "../controllers/addEmployeeController";

const router = Router();

/**
 * @openapi
 * /employees:
 *   post:
 *     summary: Add a new employee
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/EmployeeInput'
 *     responses:
 *       201:
 *         description: Employee created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 */

router.post("/", addEmployeeController);

export default router;
