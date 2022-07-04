import {
  CREATE_TUTORIAL,
  RETRIEVE_TUTORIALS,
  UPDATE_TUTORIAL,
  DELETE_TUTORIAL,
  DELETE_ALL_TUTORIALS,
} from "../actions/types";

const initialState = [];
function tutorialsReducer(tutorials = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TUTORIAL:
      return [...tutorials, payload];
    case RETRIEVE_TUTORIALS:
      return payload;
    case UPDATE_TUTORIAL:
      return tutorials.map((tutorial) =>
        tutorial._id === payload._id ? {...tutorial, ...payload} : tutorial
      );
    case DELETE_TUTORIAL:
      return tutorials.filter(({ id }) => id !== payload.id);
    case DELETE_ALL_TUTORIALS:
      return [];
    default:
      return tutorials;
  }
};

export default tutorialsReducer;
