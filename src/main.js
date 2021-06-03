import { combineReducers, createStore } from "redux";
import { HelloComponent } from "./app/components/hello.component";
import { TableComponent } from "./app/components/table.component";
import { FormComponent } from "./app/components/form.component";
import { appReducers } from "./app/store/reducers";

let items = [];

function main() {

  const reducers = combineReducers(appReducers);
  const store = createStore(reducers);
  const helloComponent = new HelloComponent(store);
  const formComponent = new FormComponent(store);
  const tableComponent = new TableComponent(store, formComponent.items);

  console.log(store);

  function render() {
    document.body.innerHTML = "";
    document.body.appendChild(helloComponent.render());
    document.body.appendChild(tableComponent.render());
    document.body.appendChild(formComponent.render());
  }

  store.subscribe(render);

  render();
}

main();
