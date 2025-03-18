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


function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <>
              <Intro />
              <Contact />
            </>
          } />
          <Route path="/about" element={<> <Skills/></>} />
          <Route path="/portfolio" element={<> <Works/> </>} />
        </Routes> 
        <Contact/>
      </Router>

  )
}

export default App;