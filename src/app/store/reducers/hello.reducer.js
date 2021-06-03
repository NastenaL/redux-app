import { HelloActions } from "../actions/hello.actions";

const initialState = {
  text: "Hello World",
};

function helloReducer(state = initialState, action) {
  switch (action.type) {
    case HelloActions.updateText.type: {
      return { ...state, text: `Hello World ${new Date().toJSON()}` };
    }
    case HelloActions.deleteText.type: {
      return { ...state, text: `There is no title` };
    }
    default: {
      return state;
    }
  }
}

export function reducer(state, action) {
  return helloReducer(state, action);
}
