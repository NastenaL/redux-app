import { TableActions } from "../store/actions/table.actions";

export class TableComponent {
  #store = null;

  constructor(store) {
    this.#store = store;
  }

  renderTable() {
    var tbl = document.createElement("table");
    tbl.id = "mainTable";
    tbl.style.width = "100%";
    tbl.setAttribute("border", "1");
    var tbdy = document.createElement("tbody");
    for (var i = 0; i < 3; i++) {
      var tr = document.createElement("tr");
      for (var j = 0; j < 2; j++) {
        if (i == 2 && j == 1) {
          break;
        } else {
          var td = document.createElement("td");
          td.appendChild(document.createTextNode("\u0020"));
          i == 1 && j == 1 ? td.setAttribute("rowSpan", "2") : null;
          tr.appendChild(td);
        }
      }
      tbdy.appendChild(tr);
    }

    tbl.appendChild(tbdy);

    return tbl;
  }

  renderHideButton() {
    const button = document.createElement("button");

    button.innerText = "Hide";
    button.addEventListener("click", () => {
      document.getElementById("mainTable").style.display = "none";
      console.log(document.getElementById("mainTable"));
      this.#store.dispatch(TableActions.hideTable);
    });

    return button;
  }

  renderButton() {
    const button = document.createElement("button");

    button.innerText = "Show";
    button.addEventListener("click", () => {
      document.getElementById("mainTable").style.display = "table";
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
