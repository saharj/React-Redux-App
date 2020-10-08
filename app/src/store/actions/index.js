import axios from "axios";

export const FETCH_EPISODES_START = "FETCH_EPISODES_START";
export const FETCH_EPISODES_SUCCESS = "FETCH_EPISODES_SUCCESS";
export const FETCH_EPISODES_FAILURE = "FETCH_EPISODES_FAILURE";
// action creator that is going to do some async stuff
export const fetchEpisodes = (url) => (dispatch) => {
  dispatch({ type: FETCH_EPISODES_START });
  axios
    .get(url)
    .then((res) => {
      dispatch({ type: FETCH_EPISODES_SUCCESS, payload: res.data.episodes });
    })
    .catch((err) => console.log(err));
};
