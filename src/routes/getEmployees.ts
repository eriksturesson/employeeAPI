import { Router } from "express";
import { getAllEmployeesController } from "../controllers/getAllEmployeesController";

const router = Router();

/**
 * @openapi
 * /employees:
 *   get:
 *     summary: Get all employees
 *     responses:
 *       200:
 *         description: List of employees
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Employee'
 */
router.get("/", getAllEmployeesController);

export default router;
