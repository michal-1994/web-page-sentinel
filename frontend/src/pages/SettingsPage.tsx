import { Card, CardContent, Typography } from "@mui/material";

const SettingsPage = () => {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <Typography variant="h5">
          Settings
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Configuration options will be available here in the future.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SettingsPage;
