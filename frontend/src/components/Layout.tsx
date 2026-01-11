import { type ReactNode } from "react";
import Navigation from "./Navigation";
import Box from "@mui/material/Box";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f6fa" }}>
      <Navigation />
      <Box component="main" sx={{ p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
