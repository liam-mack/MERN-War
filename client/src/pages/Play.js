import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import API from "../utils/API";
import Deck from "../components/Play/Deck";
import Card from "../components/Play/Card";
import Graveyard from "../components/Play/Graveyard";
import Scoreboard from "../components/Play/Scoreboard";

function Play() {
  const session = useParams();
  const history = useHistory();
  const [game, setGame] = useState();

  useEffect(async () => {
    const res = await API.getGame(session);
    if (!res) {
      history.push("/");
    }
    setGame(res.data);
  }, []);

  async function deckClick(e) {
    e.preventDefault();
    const res = await API.playGame(game._id, "deckClick");
    if (!res) {
      history.push("/");
    }
    setGame(res.data);
  }

  async function statClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.className += " active";
    e.currentTarget.className = "disableCard";

    const check = await API.playGame(game._id, "oppHand");
    if (!check) {
      history.push("/");
    }
    setGame(check.data);
    setTimeout(async () => {
      const res = await API.playGame(game._id, "statClick", e.target.id);
      setGame(res.data);
    }, 3000);
  }

  return (
    <>
      {game && (
        <div>
          {game.player1.grave.length > 0 && <Graveyard className="player1" />}
          {game.player2.grave.length > 0 && <Graveyard className="player2" />}

          {game.turn
            ? (
              <>
                <Deck deckClick={(game.player1.hand.length === 0) ? deckClick : undefined} id="player1" className={`active player1Deck ${game.player1.team}`} />
                <Deck id="player2" className={`player2Deck ${game.player2.team}`} />
                {(game.player1.hand.length > 0 && <Card onClick={statClick} player="player1" team={game.player1.team} {...game.player1.hand[0]} />)}
                {(game.player2.hand.length > 0 && <Card player="player2" team={game.player2.team} {...game.player2.hand[0]} />)}
              </>
            )
            : (
              <>
                <Deck id="player1" className={`player1Deck ${game.player1.team}`} />
                <Deck deckClick={(game.player2.hand.length === 0) ? deckClick : undefined} id="player2" className={`active player2Deck ${game.player2.team}`} />
                {(game.player1.hand.length > 0 && <Card player="player1" team={game.player1.team} {...game.player1.hand[0]} />)}
                {(game.player2.hand.length > 0 && <Card onClick={statClick} player="player2" team={game.player2.team} {...game.player2.hand[0]} />)}
              </>
            )}
        </div>
      )}
      {game && <Scoreboard gameState={game} />}
    </>
  );
}

export default Play;
