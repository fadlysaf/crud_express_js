import express from "express";
import userRoutes from "./routes/userRoutes";
import errorHandler from "./middlewares/errorHandler";

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

// Must be registered after all routes
app.use(errorHandler);

export default app;
