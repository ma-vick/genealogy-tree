import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/pages/Home";
import Tree from "./components/pages/Tree";
import People from "./components/pages/People";
import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
      <Header />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/tree" element={<Tree />} />
          <Route path="/people" element={<People />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
