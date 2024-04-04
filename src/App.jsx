import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  return (
    <Router>
      <div className="nav">
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href="/library">Library</a>
        </div>
        <div>
          <a href="/login">Log in</a>
        </div>
        {/* <div>
          <a href="/gallery">Gallery</a>
        </div>
        <div>
          <a href="/biodyssey">BiOdyssey</a>
        </div>
        <div>
          <a href="/kitchen">Kitchen</a>
        </div>
        <div>
          <a href="/rhythm">Rhythm</a>
        </div>
        <div>
          <a href="/words">Words</a>
        </div>
        <div>
          <a href="/grind">Grind</a>
        </div>
        <div>
          <a href="/ethos">Ethos</a>
        </div> */}
      </div>
      <Routes classNam>
        <Route path="/library" element={<Library />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/gallery" element={<Gallery />} />
        <Route path="/biodyssey" element={<BiOdyssey />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/rhythm" element={<Rhythm />} />
        <Route path="/words" element={<Words />} />
        <Route path="/grind" element={<Grind />} />
        <Route path="/ethos" element={<Ethos />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}


export default App
