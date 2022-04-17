

import React, { useEffect, useState } from 'react';

import { GamesTable } from '../Components/GamesTable';
import { GenericTable } from '../Components/PlayersTable';
import { getLast10, getTopPlayers } from '../services/redisData';



const refreshTime = 10000;

export const Redis = () => {

  const [games, setGames] = useState({
    loading: false,
    data: []
  });
  const [players, setPlayers] = useState({
    loading: false,
    data: []
  });


  const getGames = async () => {
    setGames({
      ...games,
      loading: true,
    });
    const gamesData = await getLast10();
    setGames({
      ...games,
      loading: false,
      data: gamesData,
    });
  }

  const getPlayers = async () => {
    setPlayers({
      ...players,
      laoding: true,
    });
    const playersData = await getTopPlayers();
    console.log('playersData', playersData)
    setPlayers({
      ...players,
      loading: false,
      data: playersData,
    });
  }

  const getAllData = async () => {
    await getGames();
    await getPlayers();
  }

  useEffect(() => {
    getAllData();
    const intervalID = setInterval(getAllData, refreshTime);
    return () => clearInterval(intervalID);
  }, [])


  return (
    <div >
      <br></br>
      <h1>Redis Info</h1>
      <hr></hr>
      <br></br>
      <section>
        <h2>Últimos 10 juegos</h2>
        <GamesTable header={['id', 'Game Name', 'Winner', 'Broker', 'Date', 'Players']} rows={games} />
      </section>

      <section>
        <h2>Top 10 jugadores</h2>
        <GenericTable header={['name', 'wins']} rows={players} />
      </section>
    </div>


  )
}
