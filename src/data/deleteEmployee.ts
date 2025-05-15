import { employeesFromDB } from "./employeeTestDB";

export async function deleteEmployee(id: string): Promise<boolean> {
  //JUST PRETENDEING TO DELETE TO THE DB AND NOW MANIPULATING THE fake DB Array of employees
  const index = employeesFromDB.findIndex((e) => e.id === id);

  if (index === -1) return false;

  employeesFromDB.splice(index, 1);
  console.log(`Deleted employee with id: ${id}`);
  return true;
}
