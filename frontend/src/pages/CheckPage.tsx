import { useState } from "react";
import { checkUrl } from "../api/checkApi";
import { type CheckResponse } from "../types/check";
import TextField from '@mui/material/TextField';

const CheckPage = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<CheckResponse | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleCheck() {
    setLoading(true);
    setResult(null);

    try {
      const data = await checkUrl(url);
      setResult(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h2>Check URL</h2>

      <TextField
        label="Check URL"
        variant="outlined"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={handleCheck} disabled={loading}>
        {loading ? "Checking..." : "Check"}
      </button>

      {result && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </>
  );
}

export default CheckPage;
