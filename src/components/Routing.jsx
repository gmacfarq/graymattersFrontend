import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import Library from "./Library";
import Home from "./Home";
import Login from "./Login";

function Routing() {
  // const { isLoggedIn, logout } = useAuth();
  const { isLoggedIn, logout } = useContext(AuthContext);
  return (
    <Router>
      <div className="nav">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/library">Library</Link>
        </div>
        {!isLoggedIn && (
          <div>
            <Link to="/login">Log in</Link>
          </div>
        )}
        {/* <div>
          <Link to="/gallery">Gallery</Link>
        </div>
        <div>
          <Link to="/biodyssey">BiOdyssey</Link>
        </div>
        <div>
          <Link to="/kitchen">Kitchen</Link>
        </div>
        <div>
          <Link to="/rhythm">Rhythm</Link>
        </div>
        <div>
          <Link to="/ethos">Ethos</Link>
        </div> */}
      </div>
      <Routes>
        <Route path="/library" element={<Library />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/gallery" element={<Gallery />} />
        <Route path="/biodyssey" element={<BiOdyssey />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/rhythms" element={<Rhythm />} />
        <Route path="/ethos" element={<Ethos />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
      {isLoggedIn && <button onClick={logout}>Logout</button>}
    </Router>
  );
}

export default Routing;
