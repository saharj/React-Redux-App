import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";

import { fetchEpisodes } from "./store/actions";

function App(props) {
  const { fetchEpisodes, episodes } = props;
  useEffect(() => {
    if (episodes.length === 0) {
      fetchEpisodes("https://api.jikan.moe/v3/anime/1/episodes");
    }
  }, [fetchEpisodes, episodes]);
  return (
    <div className="App">
      {props.episodes.map((episode, i) => {
        console.log(episode);
        return <div key={i}>{episode.title}</div>;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    episodes: state.episodes,
  };
};

export default connect(mapStateToProps, { fetchEpisodes })(App);
