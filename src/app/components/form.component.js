import { FormActions } from "../store/actions/form.actions";

export class FormComponent {
  #store = null;
  items =[];

  constructor(store) {
    this.#store = store;
  }

  renderForm() {
    const form = document.createElement("form");

    const input = document.createElement("input");
    input.id = "newItem";
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "new item");
  
    const button = document.createElement("button");

    button.innerText = "Add item";
    button.addEventListener("click", () => {
        this.items.push(document.getElementById("newItem").value);
        this.#store.dispatch(FormActions.createItem);
        console.log(this.items);
    });

    form.appendChild(input);
    form.appendChild(button);
    return form;
  }

  render() {
    const fragment = document.createDocumentFragment();
    const form = this.renderForm();

    fragment.appendChild(form);
    return fragment;
  }
}
