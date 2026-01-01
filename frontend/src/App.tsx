import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import CheckPage from "./pages/CheckPage";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/check" replace />} />
          <Route path="/check" element={<CheckPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
