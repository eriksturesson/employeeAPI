import { isValidEmail } from "./emailValidation";

export function validateEmployeeData(data: { firstName: string; lastName: string; email: string }): {
  valid: boolean;
  errors?: string[];
} {
  const errors = [];

  if (!data.firstName || data.firstName.trim().length < 2) {
    errors.push("First name must be at least 2 characters");
  }
  if (!data.lastName || data.lastName.trim().length < 2) {
    errors.push("Last name must be at least 2 characters");
  }
  if (!data.email || !isValidEmail(data.email)) {
    errors.push("Email is not valid");
  }

  return {
    valid: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined,
  };
}
