import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import { Header, Home, GamePage } from "components";

function App() {
  return (
    <Flex flexDirection="column" background="#000000" height="100%">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<GamePage />} />
        </Routes>
      </Router>
    </Flex>
  );
}

export default App;
