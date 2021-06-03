import { TableActions } from "../actions/table.actions";

const initialState = {
  text: "Hide",
};

function tableReducer(state = initialState, action) {
  switch (action.type) {
    case TableActions.hideTable.type: {
      return { ...state, text: `Hide` };
    }
    case TableActions.showTable.type: {
      return { ...state, text: `Show` };
    }
    default: {
      return state;
    }
  }
}

export function reducer(state, action) {
  return tableReducer(state, action);
}
