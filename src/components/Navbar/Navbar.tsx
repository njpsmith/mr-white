import { Link } from "react-router-dom";
import logo from "../../assets/images/detective.svg";

const Navbar = () => {
  return (
    <div className="navbar p-5 sticky top-0 z-50 bg-canvas/85 backdrop-blur border-b border-hairline">
      <div className="wrapper flex items-center justify-between">
        <Link to="/">
          <div className="logo flex items-center gap-3">
            <img src={logo} alt="Mr White Logo" width="40" />
            Mr. White
          </div>
        </Link>
        <nav className="flex gap-8 items-center">
          <Link to="/" className="text-sm">
            Home
          </Link>
          <Link to="/play" className="text-sm">
            Play
          </Link>
          <Link to="/about" className="text-sm">
            About
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
