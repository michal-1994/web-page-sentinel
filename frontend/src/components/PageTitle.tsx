import { Box, Typography } from "@mui/material";

type PageTitleProps = {
  title: string;
  subtitle?: string;
};

const PageTitle = ({ title, subtitle }: PageTitleProps) => {
  return (
    <Box mb={3}>
      <Typography variant="h5" component="h2" gutterBottom>
        {title}
      </Typography>

      {subtitle && (
        <Typography color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default PageTitle;
