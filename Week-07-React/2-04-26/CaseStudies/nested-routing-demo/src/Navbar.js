import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <nav style={styles.navbar}>
            <h2>MYapp</h2>
            <div>
                <NavLink to="/" style={styles.link} end>Home</NavLink>
                <NavLink to="/about" style={styles.link} >About</NavLink>
                <NavLink to="/services" style={styles.link} >Services</NavLink>
                <NavLink to="/contact" style={styles.link} >Contact</NavLink>
            </div>
        </nav>
    );
}
const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#333",
    },
    link: {
        color: "white",
        textDecoration: "none",
        margin: "0 10px",
    }
};
export default Navbar;