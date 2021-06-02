import { combineReducers, createStore } from "redux";
import { HelloComponent } from "./app/components/hello.component";
import { appReducers } from "./app/store/reducers";

function main() {
  const reducers = combineReducers(appReducers);
  const store = createStore(reducers);
  const helloComponent = new HelloComponent(store);

  console.log(store);

  function render() {
    document.body.innerHTML = "";
    document.body.appendChild(helloComponent.render());
  }

  store.subscribe(render);

  render();
}

main();
