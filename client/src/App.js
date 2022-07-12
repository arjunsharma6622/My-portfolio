import {BrowserRouter, Routes, Route} from "react-router-dom"
import About from "./Pages/About/About"
import Skills from "./Pages/Skills/Skills"
import Work from "./Pages/Work/Work"
import Contact from "./Pages/Contact/Contact"
import Projects from "./Pages/Projects/Projects"
import Admin from "./Pages/Admin/Admin"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
