import swaggerJSDoc from "swagger-jsdoc";
import { BASE_URL } from "../config";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Employee API",
      version: "1.0.0",
      description: "API for creating, removing an employee as well as fetching all employees",
    },
    servers: [
      {
        url: BASE_URL,
      },
    ],
    components: {
      schemas: {
        Employee: {
          type: "object",
          properties: {
            id: { type: "string", example: "abc123" },
            firstName: { type: "string", example: "Erik" },
            lastName: { type: "string", example: "Sturesson" },
            email: { type: "string", example: "erik@example.com" },
          },
          required: ["id", "firstName", "lastName", "email"],
        },
        EmployeeInput: {
          type: "object",
          properties: {
            firstName: { type: "string", example: "Erik" },
            lastName: { type: "string", example: "Sturesson" },
            email: { type: "string", example: "erik@example.com" },
          },
          required: ["firstName", "lastName", "email"],
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"], // All documentation are fetched from routes
};

export const swaggerSpec = swaggerJSDoc(options);
