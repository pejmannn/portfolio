import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import AboutMe from "./pages/about-me";
import Contact from "./pages/contact";
import DefaultLayout from "./layouts/default";
import { AnimatePresence } from "framer-motion"

function App() {
  const location = useLocation();
  return (
    <main>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/contact-me" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </main>
  );
}

export default App;
