import { useState } from "react";
import CheckForm from "../components/CheckForm";
import { checkUrl } from "../api/checkApi";
import { Box, Card, CardContent, Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";

const MonitoringPage = () => {
  const [monitored, setMonitored] = useState<string[]>([]);

  function handleAdd(url: string) {
    if (!monitored.includes(url)) {
      setMonitored((prev) => [...prev, url]);
    }
  }

  return (
    <>
      <PageTitle title="Monitoring" />

      <Box>
        <Card sx={{ maxWidth: 600, mb: 3, pt: 1 }}>
          <CardContent>
            <CheckForm
              showAddButton
              onCheck={checkUrl}
              onAdd={handleAdd}
            />
          </CardContent>
        </Card>

        <Box mt={4}>
          {monitored.length === 0 ? (
            <Typography color="text.secondary">
              No URLs added yet
            </Typography>
          ) : (
            <ul>
              {monitored.map((url) => (
                <li key={url}>{url}</li>
              ))}
            </ul>
          )}
        </Box>
      </Box>
    </>
  );
};

export default MonitoringPage;
