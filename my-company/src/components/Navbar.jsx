import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "20px",
        justifyContent: "space-around",
        backgroundColor: "#f0f0f0",
        display: "flex",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
