import { type CheckResponse } from "../types/check";

export const checkUrl = async (url: string): Promise<CheckResponse> => {
  const res = await fetch("http://localhost:4000/api/v1/check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url })
  });

  if (!res.ok) {
    throw new Error("Check failed");
  }

  return res.json();
}
