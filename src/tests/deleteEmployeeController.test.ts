import { deleteEmployeeController } from "../controllers/deleteEmployeeController";
import { deleteEmployeeService } from "../services/deleteEmployeeService";

jest.mock("../services/deleteEmployeeService");

describe("deleteEmployeeController", () => {
  let req: any;
  let res: any;

  beforeEach(() => {
    req = { params: { id: "123" } };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it("should delete employee and return 200 with message", async () => {
    (deleteEmployeeService as jest.Mock).mockResolvedValue({ id: "123", firstName: "Test" });

    await deleteEmployeeController(req, res);

    expect(deleteEmployeeService).toHaveBeenCalledWith("123");
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "Employee removed",
      employee: { id: "123", firstName: "Test" },
    });
  });

  it("should return 404 if employee not found", async () => {
    (deleteEmployeeService as jest.Mock).mockRejectedValue(new Error("Employee not found"));

    await deleteEmployeeController(req, res);

    expect(deleteEmployeeService).toHaveBeenCalledWith("123");
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: "Employee not found" });
  });

  it("should return 500 on other errors", async () => {
    (deleteEmployeeService as jest.Mock).mockRejectedValue(new Error("Some other error"));

    await deleteEmployeeController(req, res);

    expect(deleteEmployeeService).toHaveBeenCalledWith("123");
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Internal server error" });
  });
});
