import { Request, Response } from "express";
import { deleteEmployeeService } from "../services/deleteEmployeeService";

export async function deleteEmployeeController(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const deletedEmployee = await deleteEmployeeService(id);
    return res.status(200).json({ message: "Employee removed", employee: deletedEmployee });
  } catch (error: any) {
    if (error.message === "Employee not found") {
      return res.status(404).json({ error: error.message });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
}
