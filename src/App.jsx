import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Library from './components/Library';
import Home from './components/Home';
import Login from './components/Login';
// import Gallery from './components/Gallery';
// import BiOdyssey from './components/BiOdyssey';
// import Kitchen from './components/Kitchen';
// import Rhythm from './components/Rhythm';
// import Words from './components/Words';
// import Grind from './components/Grind';
// import Ethos from './components/Ethos';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setIsLoggedIn(true);
    }
  }, []);

  function login(username) {
    localStorage.setItem("username", username);
    setIsLoggedIn(true);
  }

  function logout() {
    localStorage.removeItem("username");
    setIsLoggedIn(false);
  }

  return (
    <Router>
      <div className="nav">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/library">Library</Link>
        </div>
        {!isLoggedIn &&

        <div>
          <Link to="/login">Log in</Link>
        </div>
        }
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
        <Route path="/login" element={<Login login={login} />} />
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


export default App
