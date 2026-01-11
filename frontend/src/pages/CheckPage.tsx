import CheckForm from "../components/CheckForm";
import { checkUrl } from "../api/checkApi";
import PageTitle from "../components/PageTitle";
import { Card, CardContent } from "@mui/material";

const CheckPage = () => {
  return (
    <>
      <PageTitle title="Check URL" />

      <Card sx={{ maxWidth: 600, mb: 3, pt: 1 }}>
        <CardContent>
          <CheckForm
            showAddButton
            onCheck={checkUrl}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default CheckPage;
