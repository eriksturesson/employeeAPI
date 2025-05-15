import { readEmployees } from "../data/readEmployees";
import { writeEmployee } from "../data/writeEmployee";
import { Employee } from "../interfaces/Employee";
import { buildEmployee } from "../models/buildEmployee";
import { validateEmployeeData } from "../utils/validateEmployeeData";

export async function addEmployeeService(data: {
  firstName: string;
  lastName: string;
  email: string;
}): Promise<Employee> {
  // Validationmodel
  const validation = validateEmployeeData(data);
  if (!validation.valid) {
    throw new Error(`Validation failed: ${validation.errors?.join(", ")}`);
  }

  //Fake read from db
  const employees = await readEmployees();

  if (employees.find((e) => e.email === data.email)) {
    throw new Error("Employee with this email already exists");
  }

  //Make sure everything is trimmed and no other data slips though
  let newEmployee = buildEmployee(data);

  //Faking db now
  await writeEmployee(newEmployee);

  return newEmployee;
}
