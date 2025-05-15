import { readEmployees } from "../data/readEmployees";
import { Employee } from "../interfaces/Employee";

export async function getAllEmployeesService(): Promise<Employee[]> {
  // Här "läser" vi från vår fake DB
  let allEmployees = await readEmployees();
  return allEmployees;
}
