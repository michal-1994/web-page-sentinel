import { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
} from "@mui/material";
import { type CheckResponse } from "../types/check";

type CheckFormProps = {
  showAddButton?: boolean;
  onCheck: (url: string) => Promise<CheckResponse>;
  onAdd?: (url: string) => void;
};

const CheckForm = ({
  showAddButton = false,
  onCheck,
  onAdd,
}: CheckFormProps) => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<CheckResponse | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleCheck() {
    setLoading(true);
    setResult(null);
    try {
      const data = await onCheck(url);
      setResult(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box>
      <Stack spacing={2} maxWidth={500}>
        <TextField
          label="URL"
          placeholder="https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          fullWidth
        />

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            onClick={handleCheck}
            disabled={loading || !url}
          >
            {loading ? "Checking..." : "Check now"}
          </Button>

          {showAddButton && onAdd && (
            <Button
              variant="outlined"
              onClick={() => onAdd(url)}
              disabled={!url}
            >
              Add to monitoring
            </Button>
          )}
        </Stack>

        {result && (
          <Box
            component="pre"
            sx={{
              background: "#111",
              color: "#0f0",
              padding: 2,
              borderRadius: 1,
              fontSize: 13,
              overflow: "auto",
            }}
          >
            {JSON.stringify(result, null, 2)}
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default CheckForm;
