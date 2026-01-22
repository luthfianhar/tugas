import "./Navbar.css";
import logo from "../../assets/logo-ANHAR.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><img src="../assets/logo-ANHAR.png/" alt="" /></div>

      <ul className="navbar-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}
