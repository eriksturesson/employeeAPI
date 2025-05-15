import { v4 as uuidv4 } from "uuid";
import { Employee } from "../interfaces/Employee";
import { EmployeeInput } from "../interfaces/EmployeeInput";

export function buildEmployee(data: EmployeeInput): Employee {
  return {
    id: uuidv4(),
    firstName: data.firstName.trim(),
    lastName: data.lastName.trim(),
    email: data.email.toLowerCase().trim(),
  };
}
