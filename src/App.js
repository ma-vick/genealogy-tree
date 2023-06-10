import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import People from "./components/pages/People";
import NewTree from "./components/pages/NewTree";
import Trees from "./components/pages/Trees";
import Tree from "./components/pages/Tree";

import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
      <Header />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trees" element={<Trees />} />
          <Route path="/people" element={<People />} />
          <Route path="/newtree" element={<NewTree />} />
          <Route path="/tree/:id" element={<Tree />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
