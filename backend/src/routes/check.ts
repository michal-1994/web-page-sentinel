import { Router } from "express";
import { checkPage } from "../services/pageCheck.service.js";
import { CheckRequest } from "../types/check.js";

const router = Router();

router.post("/check", async (req, res) => {
  try {
    const body: CheckRequest = req.body;
    if (!body.url) return res.status(400).json({ error: "URL is required" });

    const result = await checkPage(body);
    res.json(result);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
