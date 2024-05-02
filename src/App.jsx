import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutMe from "./pages/about-me";
import Contact from "./pages/contact";
import DefaultLayout from "./layouts/default";

function App() {
  return (
    <main>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/contact-me" element={<Contact />} />
          </Route>
        </Routes>
        </BrowserRouter>
    </main>
  );
}

export default App;
