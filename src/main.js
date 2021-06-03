import { combineReducers, createStore } from "redux";
import { HelloComponent } from "./app/components/hello.component";
import { TableComponent } from "./app/components/table.component";
import { appReducers } from "./app/store/reducers";

function main() {
  const reducers = combineReducers(appReducers);
  const store = createStore(reducers);
  const helloComponent = new HelloComponent(store);
  const tableComponent = new TableComponent(store);

  console.log(store);

  function render() {
    document.body.innerHTML = "";
    document.body.appendChild(helloComponent.render());
    document.body.appendChild(tableComponent.render());
  }

  store.subscribe(render);

  render();
}

main();
