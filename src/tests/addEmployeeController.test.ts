import { addEmployeeController } from "../controllers/addEmployeeController";
import { addEmployeeService } from "../services/addEmployeeService";

jest.mock("../services/addEmployeeService");

describe("addEmployeeController", () => {
  let req: any;
  let res: any;

  beforeEach(() => {
    req = { body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it("should return 400 if required fields are missing", async () => {
    req.body = { firstName: "Erik" }; // missing email and lastName
    await addEmployeeController(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "All fields are required" });
  });

  it("should return 201 and created employee on success", async () => {
    const mockEmployee = { id: "1", firstName: "Erik", lastName: "Sturesson", email: "erik@example.com" };
    (addEmployeeService as jest.Mock).mockResolvedValue(mockEmployee);

    req.body = { firstName: "Erik", lastName: "Sturesson", email: "erik@example.com" };

    await addEmployeeController(req, res);

    expect(addEmployeeService).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockEmployee);
  });

  it("should return 500 on service error", async () => {
    (addEmployeeService as jest.Mock).mockRejectedValue(new Error("Service failure"));

    req.body = { firstName: "Erik", lastName: "Sturesson", email: "erik@example.com" };

    await addEmployeeController(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Internal server error" });
  });
});
