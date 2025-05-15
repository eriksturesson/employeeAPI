import request from "supertest";
import app from "../server";

describe("Employee API", () => {
  it("GET /employees - should return all employees with 200 status", async () => {
    const res = await request(app).get("/employees");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.employees)).toBe(true);
  });

  it("POST /employees - should create a new employee and return 201", async () => {
    const newEmployee = {
      firstName: "Test",
      lastName: "User",
      email: "testuser@example.com",
    };

    const res = await request(app).post("/employees").send(newEmployee).set("Accept", "application/json");

    expect(res.status).toBe(201);
    expect(res.body).toMatchObject(newEmployee);
    expect(res.body).toHaveProperty("id");
  });

  it("DELETE /employees/:id - should delete employee and return 200", async () => {
    // För att testa DELETE måste du ha ett existerande id, så skapa en först
    const newEmployee = {
      firstName: "Delete",
      lastName: "Me",
      email: "deleteme@example.com",
    };

    // First create an employee
    const postRes = await request(app).post("/employees").send(newEmployee).set("Accept", "application/json");

    const idToDelete = postRes.body.id;

    // Radera that created employee
    const deleteRes = await request(app).delete(`/employees/${idToDelete}`);

    expect(deleteRes.status).toBe(200);
    expect(deleteRes.body).toHaveProperty("message", "Employee removed");
    expect(deleteRes.body).toHaveProperty("employee", idToDelete);
  });
});
