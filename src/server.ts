import cors from "cors";
import express from "express";
import helmet from "helmet";
import { CORS_ORIGIN } from "./config";
import { setupSwaggerDocs } from "./docs/SwaggerSetup";
import limiter from "./middleware/rateLimit";
import employeeRoutes from "./routes/index";

const app = express();

//Automatically add security headers to the API
app.use(helmet());

//Protect the API from too many requests
app.use(limiter);

//I often use Google Cloud which creates a proxy in front of the API in production, uncomment to accept one (1) proxy in front of the API via cloud
//app.set("trust proxy", 1);

app.use(
  cors({
    origin: CORS_ORIGIN,
    methods: ["GET", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//Make sure the API can parse JSON
app.use(express.json());

// Swagger for documentation
setupSwaggerDocs(app);

// Possibility to add more routes along the way
app.use("/employees", employeeRoutes);

export default app;
