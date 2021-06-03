import * as fromHello from "./hello.reducer";
import * as fromTable from "./table.reducer";
import * as fromForm from "./form.reducer";

export const appReducers = {
  hello: fromHello.reducer,
  table: fromTable.reducer,
  form: fromForm.reducer
};
