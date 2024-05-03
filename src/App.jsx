// import { useState, useEffect } from "react";
import Routing from "./components/Routing";
import { AuthProvider } from "./AuthProvider";

// import Gallery from './components/Gallery';
// import BiOdyssey from './components/BiOdyssey';
// import Kitchen from './components/Kitchen';
// import Rhythm from './components/Rhythm';
// import Words from './components/Words';
// import Grind from './components/Grind';
// import Ethos from './components/Ethos';

function App() {
  return (
    <AuthProvider>
      <Routing />
    </AuthProvider>
  );
}

export default App;
