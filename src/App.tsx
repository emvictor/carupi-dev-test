import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

import { getGames } from "services/getGames";
import { Header, Home } from "components";
import { getGamesByID } from "services/getGamesByID";

function App() {
  const [games, setGames] = useState([]);
  const [gameID, setGameID] = useState(undefined);
  const [gameInfo, setGameInfo] = useState(undefined);

  console.log({ gameID });

  useEffect(() => {
    getGames().then((data) => {
      setGames(data.results);
    });
    if (gameID !== undefined) {
      getGamesByID(gameID).then((data) => {
        setGameInfo(data.results);
      });
    }
  }, [gameID]);

  return (
    <Flex flexDirection="column" backgroundColor="#000000" height="100%">
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home games={games} setGameID={setGameID} />}
          />
          <Route path="/game" element={<p>Batata</p>} />
        </Routes>
      </Router>
    </Flex>
  );
}

export default App;
