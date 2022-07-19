import { Link } from "react-router-dom";


const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>The Customer Support Page</h1>
        <div className="links">
          <Link to="/">Issues</Link>
        </div>
      </nav>
    );
  }
   
  export default Navbar;