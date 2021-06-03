import { FormActions } from "../actions/form.actions";

const initialState = {
  text: "",
};

function formReducer(state = initialState, action) {
  switch (action.type) {
    case FormActions.createItem.type: {
      return { ...state, text: FormActions.createItem.type };
    }
    
    default: {
      return state;
    }
  }
}

export function reducer(state, action) {
  return formReducer(state, action);
}
