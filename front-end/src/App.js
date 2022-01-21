import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import Home from "./pages/Home.js";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />

        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="stores" element={<p>stores</p>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
