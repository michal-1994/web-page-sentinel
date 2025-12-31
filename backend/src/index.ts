import express, { Request, Response } from "express";
import cors from "cors";
import checkRouter from "./routes/check.js";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.use("/api/v1", checkRouter);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
