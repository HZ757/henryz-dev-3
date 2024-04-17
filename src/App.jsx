import React from 'react';

import NavBar from "./components/NavBar.jsx";
import Intro from "./components/Intro.jsx";

const App = () => {
  return (
    <main className="text-white bg-slate-950">
      <NavBar />
      <div className="pt-48 sm:py-8 min-h-screen snap-center" id="intro">
        <Intro />
      </div>
    </main>
  );
};

export default App;