import { Employee } from "../interfaces/Employee";
import { employeesFromDB } from "./employeeTestDB";

export async function readEmployees(): Promise<Employee[]> {
  //Pretending to fetch data drom db
  return employeesFromDB;
}
