import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import DrSarna from "@/pages/DrSarna";
import Technology from "@/pages/Technology";
import ServicePage from "@/pages/services/ServicePage";
import TechPage from "@/pages/technology/TechPage";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dr-sarna" element={<DrSarna />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          {/* Technology pages live at root-level slugs to preserve the existing URL structure. */}
          <Route path="/:slug" element={<TechPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" richColors closeButton />
    </div>
  );
}

export default App;
