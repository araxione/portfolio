// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Portfolio from "./Portfolio";
// import EcoPantry from "./EcoPantry";
// import ByteBroom from "./ByteBroom"; // Import your SCARP Newsletter component

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Portfolio />} />
//         <Route path="/ecopantry" element={<EcoPantry />} />
//         <Route path="/bytebroom" element={<ByteBroom />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes instead of Switch
import NavBar from "./NavBar";
import Portfolio from "./Portfolio";
import EcoPantry from "./EcoPantry";
import ByteBroom from "./ByteBroom";
import "./App.css"; // Import your CSS

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/ecopantry" element={<EcoPantry />} />
          <Route path="/bytebroom" element={<ByteBroom />} />
          <Route path="/resume" element={<Portfolio />} />{" "}
          {/* Adjust as necessary */}
          <Route path="/playground" element={<Portfolio />} />{" "}
          {/* Adjust as necessary */}
          <Route path="/about" element={<Portfolio />} />{" "}
          {/* Adjust as necessary */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
