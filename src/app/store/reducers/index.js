import * as fromHello from "./hello.reducer";
import * as fromTable from "./table.reducer";

export const appReducers = {
  hello: fromHello.reducer,
  table: fromTable.reducer,
};
