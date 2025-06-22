import express from "express";
import projectsRouter from "./routes/projects";
import cors from "cors";

const app = express();

const allowedOrigins = [
  "https://kanban-app-sage-eta.vercel.app", // frontend produkcyjny
  "http://localhost:3000", // frontend lokalny
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
