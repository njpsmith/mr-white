import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-between p-5  sticky top-0 z-50 bg-canvas/85 backdrop-blur border-b border-hairline">
      <div className="logo">
        <img src="" alt="Mr White Logo" />
        Mr. White
      </div>
      <nav className="flex gap-2 items-center">
        <Link to="/">Home</Link>
        <Link to="/play">Play</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Navbar;
