import { deleteEmployee } from "../data/deleteEmployee";

export async function deleteEmployeeService(id: string): Promise<string> {
  // Kontrollera att id är giltigt (enkel kontroll)
  if (!id || id.trim().length === 0) {
    throw new Error("Invalid employee ID");
  }

  // Försök ta bort anställd
  const isDeleted = await deleteEmployee(id);
  if (!isDeleted) {
    throw new Error("Failed to delete employee");
  }

  return id;
}
