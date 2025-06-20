import express from "express";
import projectsRouter from "./routes/projects";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(
  cors({
    origin: "https://kanban-app-sage-eta.vercel.app",
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/projects", projectsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
