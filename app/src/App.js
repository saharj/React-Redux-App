import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";

import { fetchEpisodes } from "./store/actions";

function App(props) {
  const { fetchEpisodes, episodes } = props;
  useEffect(() => {
    if (episodes.length === 0) {
      fetchEpisodes();
    }
  }, [fetchEpisodes, episodes]);
  return (
    <div className="App">
      <h1>List of Anime Episodes</h1>
      <div className="wrapper">
        {props.episodes.map((episode, i) => {
          // console.log(episode);
          return (
            <div className="episode" key={i}>
              <h2>{episode.title}</h2>
              <h3>{episode["title_japanese"]}</h3>
              <a href={episode.video_url}>Watch the episode here</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    episodes: state.episodes,
  };
};

export default connect(mapStateToProps, { fetchEpisodes })(App);
