import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills"
import Works from "./components/Works/works"
import Contact from "./components/Contact/contact"
import Resume from "./components/Resume/resume"


function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Intro />} />
          <Route path="/about" element={<Skills/>} />
          <Route path="/projects" element={<Works/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes> 
        <Contact/>
      </Router>

  )
}

export default App;