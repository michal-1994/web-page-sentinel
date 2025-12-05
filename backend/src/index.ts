import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello from Web Page Sentinel backend!" });
});

app.get("/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
