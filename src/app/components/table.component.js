import { TableActions } from "../store/actions/table.actions";

export class TableComponent {
  #store = null;

  constructor(store, items) {
    this.#store = store;
    this.items = items;
  }

  renderTable() {
    let tbl = document.createElement("table");
    tbl.id = "mainTable";
    tbl.style.width = "100%";
    tbl.setAttribute("border", "1");
    let tbdy = document.createElement("tbody");

    this.items.forEach((item) => {
      let row = this.createRow(item);
      tbl.appendChild(row);
    });

    return tbl;
  }

  createRow(item) {
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    let textNode = document.createTextNode(item);
    cell.appendChild(textNode);
    row.appendChild(cell);
    
    return row;
  };

  renderHideButton() {
    const button = document.createElement("button");

    button.innerText = "Hide";
    button.addEventListener("click", () => {
      document.getElementById("mainTable").setAttribute("display", "none");
      console.log(document.getElementById("mainTable"));
      this.#store.dispatch(TableActions.hideTable);
    });

    return button;
  }

  renderButton() {
    const button = document.createElement("button");

    button.innerText = "Show";
    button.addEventListener("click", () => {
      document.getElementById("mainTable").setAttribute("display", "table");
      console.log(document.getElementById("mainTable"));
      this.#store.dispatch(TableActions.showTable);
    });

    return button;
  }

  render() {
    const fragment = document.createDocumentFragment();
    const table = this.renderTable();
    const button = this.renderButton();
    const hideButton = this.renderHideButton();

    fragment.appendChild(hideButton);
    fragment.appendChild(button);
    fragment.appendChild(table);

    return fragment;
  }
}
