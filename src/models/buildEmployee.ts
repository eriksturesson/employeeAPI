import { v4 as uuidv4 } from "uuid";
import { Employee } from "../interfaces/Employee";

export function buildEmployee(data: { firstName: string; lastName: string; email: string }): Employee {
  return {
    id: uuidv4(),
    firstName: data.firstName.trim(),
    lastName: data.lastName.trim(),
    email: data.email.toLowerCase().trim(),
  };
}
