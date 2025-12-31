import { CheckRequest, CheckResponse } from "../types/check.js";
import crypto from "crypto";

export async function checkPage(req: CheckRequest): Promise<CheckResponse> {
  const start = Date.now();

  const response = await fetch(req.url, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
    }
  });
  const text = await response.text();

  const end = Date.now();
  const hash = crypto.createHash("md5").update(text).digest("hex");

  return {
    status: response.status,
    responseTime: end - start,
    length: text.length,
    hash,
  };
}
