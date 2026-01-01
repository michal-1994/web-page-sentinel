import { type ReactNode } from "react";
import Navigation from "./Navigation";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Navigation />
      <main style={{ padding: 24, flex: 1 }}>
        <h1>Web Sentinel</h1>
        {children}
      </main>
    </div>
  );
}

export default Layout;
