import dotenv from "dotenv";

dotenv.config();
export type ENVIRONMENTS = "development" | "staging" | "production";

export const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3005;
export const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";

export const ENVIRONMENT: ENVIRONMENTS = (process.env.NODE_ENV as ENVIRONMENTS) || "development";

export const BASE_URL = ENVIRONMENT === "production" ? `https://api.yourdomain.com` : `http://localhost:${PORT}`;
