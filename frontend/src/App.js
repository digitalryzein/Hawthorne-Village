import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import DrSarna from "@/pages/DrSarna";
import Technology from "@/pages/Technology";
import OurTeam from "@/pages/OurTeam";
import PatientForms from "@/pages/PatientForms";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import ServicePage from "@/pages/services/ServicePage";
import RootSlug from "@/pages/RootSlug";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dr-sarna" element={<DrSarna />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/patient-forms" element={<PatientForms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          {/* Technology pages and blog posts live at root-level slugs, matching the live site. */}
          <Route path="/:slug" element={<RootSlug />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" richColors closeButton />
    </div>
  );
}

export default App;
