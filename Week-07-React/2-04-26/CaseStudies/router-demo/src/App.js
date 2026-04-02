import {BrowserRouter , Routes, Route, NavLink} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
function App(){
  return(
    <BrowserRouter>
      <nav style={styles.nav}>
        <NavLink to="/" style={styles.link} end>Home</NavLink>
        <NavLink to="/about" style={styles.link} end  >About</NavLink>
        <NavLink to="/contact" style={styles.link} end >Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
const styles={
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px"
  },
  link: {
    textDecoration: "none",

    fontSize: "18px"
  }
};
export default App;