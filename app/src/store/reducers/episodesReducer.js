import { FETCH_EPISODES_START, FETCH_EPISODES_SUCCESS } from "../actions";

const initialState = {
  episodes: [],
  isLoading: false,
  error: "",
};

const episodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EPISODES_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_EPISODES_SUCCESS:
      return {
        ...state,
        episodes: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default episodeReducer;
