import { getAllEmployeesController } from "../controllers/getAllEmployeesController";
import { getAllEmployeesService } from "../services/getAllEmployeesService";

jest.mock("../services/getAllEmployeesService");

describe("getAllEmployeesController", () => {
  let req: any;
  let res: any;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it("should return employees with 200 status", async () => {
    const mockEmployees = [
      { id: "1", firstName: "Erik", lastName: "Sturesson", email: "erik@example.com" },
      { id: "2", firstName: "Anna", lastName: "Andersson", email: "anna@example.com" },
    ];

    (getAllEmployeesService as jest.Mock).mockResolvedValue(mockEmployees);

    await getAllEmployeesController(req, res);

    expect(getAllEmployeesService).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ employees: mockEmployees });
  });

  it("should return 500 on error", async () => {
    (getAllEmployeesService as jest.Mock).mockRejectedValue(new Error("Some error"));

    await getAllEmployeesController(req, res);

    expect(getAllEmployeesService).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Internal server error" });
  });
});
