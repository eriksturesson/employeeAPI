import { Request, Response } from "express";
import { getAllEmployeesService } from "../services/getAllEmployeesService";

export async function getAllEmployeesController(req: Request, res: Response) {
  try {
    const employees = await getAllEmployeesService();
    return res.status(200).json({ employees });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
}
