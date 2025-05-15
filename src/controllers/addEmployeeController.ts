import { Request, Response } from "express";
import { addEmployeeService } from "../services/addEmployeeService";

export async function addEmployeeController(req: Request, res: Response) {
  const { firstName, lastName, email } = req.body;

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newEmployee = await addEmployeeService({ firstName, lastName, email });
    return res.status(201).json(newEmployee);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}
