import { Card, CardContent, Typography } from "@mui/material";
import PageTitle from "../components/PageTitle";

const SettingsPage = () => {
  return (
    <>
      <PageTitle title="Settings" />

      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            Configuration options will be available here in the future.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default SettingsPage;
