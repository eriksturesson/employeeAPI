import { Employee } from "../interfaces/Employee";
import { employeesFromDB } from "./employeeTestDB";

export async function writeEmployee(newEmployee: Employee): Promise<void> {
  // Pretending to write data to db

  employeesFromDB.push(newEmployee); //Not really needed but just to show.
  console.log(`Added employee: ${newEmployee.firstName} ${newEmployee.lastName} to fake DB`);

  return Promise.resolve();
}
