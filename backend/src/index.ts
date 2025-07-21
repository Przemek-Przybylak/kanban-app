import express from "express";
import projectsRouter from "./routes/projects";
import cors from "cors";
import tasksRouter from "./routes/tasks";
import dotenv from "dotenv";
console.log("DATABASE_URL:", process.env.DATABASE_URL);

dotenv.config();
const app = express();

const allowedOrigins = [
  "https://kanban-app-sage-eta.vercel.app", // frontend production
  "http://localhost:3000", // frontend local
];

const corsOptions = {
  origin: function (origin: string | undefined, callback: Function) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/projects", projectsRouter);
app.use("/api/tasks", tasksRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
