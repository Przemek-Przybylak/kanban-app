import express from "express";
import projectsRouter from "./routes/projects";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use("/api/projects", projectsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
