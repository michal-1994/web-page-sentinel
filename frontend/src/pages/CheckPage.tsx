import { useState } from "react";
import { checkUrl } from "../api/checkApi";
import { type CheckResponse } from "../types/check";

import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  CircularProgress
} from "@mui/material";

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
    <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Check URL
        </Typography>

        <TextField
          fullWidth
          label="Website URL"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button
          variant="contained"
          onClick={handleCheck}
          disabled={loading || !url}
        >
          {loading ? <CircularProgress size={24} /> : "Check"}
        </Button>

        {result && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1">Result</Typography>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default CheckPage;
