import { CheckRequest, CheckResponse } from "../types/check.js";
import crypto from "crypto";

export async function checkPage(req: CheckRequest): Promise<CheckResponse> {
  const start = Date.now();

  const response = await fetch(req.url, {
    headers: {
      // User-Agent to simulate a real browser
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
      // Accept header tells the server which content types we can handle
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
      // Accept-Language header indicates preferred language for the response
      "Accept-Language": "pl,pl-PL;q=0.9,en-US;q=0.8,en;q=0.7"
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
