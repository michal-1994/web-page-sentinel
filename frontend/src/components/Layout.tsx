import { type ReactNode } from "react";
import Navigation from "./Navigation";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navigation />
      <main style={{ padding: 24, flex: 1 }}>
        {children}
      </main>
    </div>
  );
}

export default Layout;
