import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./SwaggerConfig";

export function setupSwaggerDocs(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
