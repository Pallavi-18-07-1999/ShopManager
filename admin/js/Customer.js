class Customer {
  constructor() {
    this.username = "";
    this.name = "";
    this.password = "";
    this.address = "";
    this.mobileNumber = "";
  }
}
class AddCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "responseRecieved": 0, "username": "", "password": "", "name": "", "address": "", "mobileNumber": "", "cancelClicked": 0 };
    this.nameChangeEventHandler = this.nameChangeEventHandler.bind(this);
    this.usernameChangeEventHandler = this.usernameChangeEventHandler.bind(this);
    this.passwordChangeEventHandler = this.passwordChangeEventHandler.bind(this);
    this.mobileNumberChangeEventHandler = this.mobileNumberChangeEventHandler.bind(this);
    this.addressChangeEventHandler = this.addressChangeEventHandler.bind(this);
    this.cancel = this.cancel.bind(this);
    this.addCustomer = this.addCustomer.bind(this);
  }
  nameChangeEventHandler(ev) {
    this.setState({ "name": ev.target.value });
  }
  usernameChangeEventHandler(ev) {
    this.setState({ "username": ev.target.value });
  }
  passwordChangeEventHandler(ev) {
    this.setState({ "password": ev.target.value });
  }
  mobileNumberChangeEventHandler(ev) {
    this.setState({ "mobileNumber": ev.target.value });
  }
  addressChangeEventHandler(ev) {
    this.setState({ "address": ev.target.value });
  }
  cancel(ev) {
    this.setState({ "cancelClicked": 1 });
  }
  addCustomer(ev) {
    let cs = new CustomerService();
    let customer = new Customer();
    customer.name = this.state.name;
    customer.username = this.state.username;
    customer.password = this.state.password;
    customer.mobileNumber = this.state.mobileNumber;
    customer.address = this.state.address;
    let pro = cs.addCustomer(customer);
    pro.then(resp => {
      resp.json().then(data => {
        if (data.success) {
          this.setState({ "responseRecieved": 1 });
        }
      });
    });
  }
  render() {
    if (this.state.responseRecieved == 0 || this.state.cancelClicked == 1) {
      return React.createElement(
        "div",
        { "class": "row" },
        React.createElement(
          "div",
          { "class": "col-xl-8" },
          React.createElement(
            "div",
            { "class": "card", style: { width: "800px" } },
            React.createElement(
              "div",
              { "class": "card-header border-0" },
              React.createElement(
                "div",
                { "class": "row align-items-center" },
                React.createElement(
                  "div",
                  { "class": "col" },
                  React.createElement(
                    "h3",
                    { "class": "mb-0" },
                    "Form to add customer :-"
                  ),
                  React.createElement("br", null)
                )
              )
            ),
            React.createElement(
              "div",
              { "class": "card-body" },
              React.createElement(
                "form",
                null,
                React.createElement(
                  "div",
                  { "class": "form-group" },
                  React.createElement(
                    "span",
                    { style: { color: "red" } },
                    " ",
                    this.props.errorMessage,
                    " "
                  ),
                  React.createElement("br", null),
                  React.createElement(
                    "label",
                    { "for": "code" },
                    "Enter name:-"
                  ),
                  React.createElement("input", { type: "text", "class": "form-control form-control-lg rounded-0", name: "name", id: "name", required: "", value: this.state.name, onChange: this.nameChangeEventHandler })
                ),
                React.createElement(
                  "div",
                  { "class": "form-group" },
                  React.createElement(
                    "label",
                    null,
                    "Enter username:-"
                  ),
                  React.createElement("input", { name: "username", type: "text", "class": "form-control form-control-lg rounded-0", id: "username", required: "", value: this.state.username, onChange: this.usernameChangeEventHandler }),
                  React.createElement(
                    "label",
                    null,
                    "Enter password:-"
                  ),
                  React.createElement("input", { name: "password", type: "password", "class": "form-control form-control-lg rounded-0", id: "password", required: "", value: this.state.password, onChange: this.passwordChangeEventHandler }),
                  React.createElement(
                    "label",
                    null,
                    "Enter mobileNumber:-"
                  ),
                  React.createElement("input", { name: "mobileNumber", type: "text", "class": "form-control form-control-lg rounded-0", id: "mobileNumber", required: "", value: this.state.mobileNumber, onChange: this.mobileNumberChangeEventHandler }),
                  React.createElement(
                    "label",
                    null,
                    "Enter address:-"
                  ),
                  React.createElement("textarea", { rows: "3", cols: "4", name: "address", "class": "form-control form-control-lg rounded-0", id: "address", required: "", value: this.state.address, onChange: this.addressChangeEventHandler })
                ),
                React.createElement("div", null),
                React.createElement(
                  "button",
                  { type: "button", "class": "btn btn-primary float-center", id: "btnLogin", onClick: this.addCustomer },
                  "Add Category"
                ),
                React.createElement(
                  "button",
                  { type: "button", "class": "btn btn-primary float-center", id: "btnLogin", onClick: this.cancel },
                  "Cancel"
                )
              )
            )
          )
        )
      );
    } else {
      let customer = new Customer();
      customer.username = this.state.username;
      customer.mobileNumber = this.state.mobileNumber;
      customer.name = this.state.name;
      customer.password = this.state.password;
      customer.address = this.state.address;
      return React.createElement(CustomerMaster, { studentAdded: customer });
    }
  }
}
class DeleteCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "responseRecieved": 0 };
  }
  render() {
    if (this.state.responseRecieved == 0) {} else {
      React.createElement(CustomerMaster, null);
    }
  }
}
class EditCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "responseRecieved": 0 };
  }
  render() {
    if (this.state.responseRecieved == 0) {} else {
      React.createElement(CustomerMaster, null);
    }
  }
}

class CustomerMaster extends React.Component {

  constructor(props) {
    super(props);
    alert('chala');
    let customers = [];
    this.rowSelected = null;
    this.state = { "customers": customers, "addButtonSelected": 0, "editButtonSelected": 0, "deleteButtonSelected": 0, "responseRecieved": 0, "rowClicked": -1 };
    this.addCustomer = this.addCustomer.bind(this);
    this.editCustomer = this.editCategory.bind(this);
    this.deleteCustomer = this.deleteCategory.bind(this);
    this.add = this.add.bind(this);
    this.editIconHandler = this.editIconHandler.bind(this);
    this.deleteIconHandler = this.deleteIconHandler.bind(this);
    this.searchRow = this.searchRow.bind(this);
    this.props.selectedCategoryCode = null;
    this.props.errorMessage = "";
    this.cancel = this.cancel.bind(this);
  }
  cancel() {
    alert(this);
  }
  populateDS() {

    let cs = new CustomerService();
    let pro = cs.getAll();
    pro.then(resp => {
      resp.json().then(data => {
        if (data.success) {
          let customers = [];
          customers = data.response.customers;
          this.setState({ "customers": customers, "responseRecieved": 1 });
        }
      });
    });
  }
  componentDidUpdate() {
    /*
    if(this.props.selectedCategoryCode!=null && this.state.responseRecieved==1) 
    {
    this.selectCategory(this.props.selectedCategoryCode);
    this.props.selectedCategoryCode=null;
    }
    */
  }
  selectCategory(code) {
    for (var i in this.state.customers) {
      if (this.state.customers[i].code == code) {
        this.deSelect();

        this.selectRow(parseInt(i) + 1);
      }
    }
  }
  selectRow(index) {

    if (this.rowSelected == null) {
      let row = document.getElementById(index);
      row.style.backgroundColor = 'black';
      row.style.color = 'white';
      row.scrollIntoView();
      this.rowSelected = row;
    } else {
      this.rowSelected.style.backgroundColor = 'white';
      this.rowSelected.style.color = 'black';
      let row = document.getElementById(index);
      row.style.backgroundColor = 'black';
      row.style.color = 'white';
      row.scrollIntoView();
      this.rowSelected = row;
    }
  }
  deSelect() {
    if (this.rowSelected != null) {
      this.rowSelected.style.backgroundColor = 'white';
      this.rowSelected.style.color = 'black';
      this.rowSelected = null;
    }
  }
  searchRow() {

    let title = document.getElementById('search').value;
    if (title.trim().length == 0) {
      this.deSelect();
      return;
    }
    let i = 1;
    let found = false;
    for (var category in this.state.customers) {
      if (this.state.customers[category].title.startsWith(title)) {

        document.getElementById('search').style.color = 'black';
        this.selectRow(i);
        found = true;
        break;
      }
      i++;
    }
    if (found == false) {
      document.getElementById('search').style.color = 'red';
      this.deSelect();
    }
  }
  deleteIconHandler(sno) {
    return () => {
      this.setState({ "addButtonSelected": 0, "editButtonSelected": 0, "deleteButtonSelected": 1, "rowClicked": sno });
    };
  }
  editIconHandler(sno) {
    return () => {

      this.setState({ "addButtonSelected": 0, "editButtonSelected": 1, "deleteButtonSelected": 0, "rowClicked": sno });
    };
  }

  add() {
    this.setState({ "addButtonSelected": 1, "editButtonSelected": 0, "deleteButtonSelected": 0 });
  }
  editCategory() {

    let cs = new CategoryService();
    let category = new Category();
    category.code = document.getElementById('code').value;
    category.title = document.getElementById('title').value;
    let pro = cs.editCategory(category);
    pro.then(resp => {
      resp.json().then(data => {
        if (data.success) {
          this.props.selectedCategoryCode = category.code;
          this.setState({ "addButtonSelected": 0, "editButtonSelected": 0, "deleteButtonSelected": 0, "responseRecieved": 0 });
        }
        if (data.success = false) {
          this.props.errorMessage = data.exception;

          this.setState({ "addButtonSelected": 1, "editButtonSelected": 0, "deleteButtonSelected": 0, "responseRecieved": 0 });
        }
      });
    });
  }
  addCustomer() {
    this.setState({ "addButtonSelected": 1, "responseRecieved": 0 });
  }
  deleteCategory() {
    let cs = new CategoryService();
    let code = document.getElementById('code').value;
    let pro = cs.deleteCategory(code);
    pro.then(resp => {
      resp.json().then(data => {
        if (data.success) {
          this.setState({ "addButtonSelected": 0, "editButtonSelected": 0, "deleteButtonSelected": 0, "responseRecieved": 0 });
        }
      });
    });
  }

  render() {
    alert('render method gets called!');
    if (this.state.deleteButtonSelected == 1) {
      return React.createElement(
        "div",
        { "class": "row" },
        React.createElement(
          "div",
          { "class": "col-xl-8" },
          React.createElement(
            "div",
            { "class": "card", style: { width: "800px" } },
            React.createElement(
              "div",
              { "class": "card-header border-0" },
              React.createElement(
                "div",
                { "class": "row align-items-center" },
                React.createElement(
                  "div",
                  { "class": "col" },
                  React.createElement(
                    "h3",
                    { "class": "mb-0" },
                    "Form to delete category :-"
                  ),
                  React.createElement("br", null)
                )
              )
            ),
            React.createElement(
              "div",
              { "class": "card-body" },
              React.createElement(
                "form",
                null,
                React.createElement(
                  "div",
                  { "class": "form-group" },
                  React.createElement(
                    "span",
                    { style: { color: "red" } },
                    " ",
                    this.props.errorMessage,
                    " "
                  ),
                  React.createElement(
                    "label",
                    { "for": "code" },
                    "Enter code:-"
                  ),
                  React.createElement("input", { type: "text", "class": "form-control form-control-lg rounded-0", name: "code", id: "code", required: "", value: this.state.customers[this.state.rowClicked - 1].code, readOnly: true })
                ),
                React.createElement(
                  "div",
                  { "class": "form-group" },
                  React.createElement(
                    "label",
                    null,
                    "Enter title:-"
                  ),
                  React.createElement("input", { name: "title", type: "text", "class": "form-control form-control-lg rounded-0", id: "title", required: "", value: this.state.customers[this.state.rowClicked - 1].title, readOnly: true })
                ),
                React.createElement("div", null),
                React.createElement(
                  "button",
                  { type: "button", "class": "btn btn-primary float-center", id: "btnLogin", onClick: this.deleteCategory },
                  "Delete Category"
                ),
                React.createElement(
                  "button",
                  { type: "button", "class": "btn btn-primary float-center", id: "btnLogin", onClick: this.cancel },
                  "Delete Category"
                )
              )
            )
          )
        )
      );
    } else if (this.state.editButtonSelected == 1) {
      return React.createElement(
        "div",
        { "class": "row" },
        React.createElement(
          "div",
          { "class": "col-xl-8" },
          React.createElement(
            "div",
            { "class": "card", style: { width: "800px" } },
            React.createElement(
              "div",
              { "class": "card-header border-0" },
              React.createElement(
                "div",
                { "class": "row align-items-center" },
                React.createElement(
                  "div",
                  { "class": "col" },
                  React.createElement(
                    "h3",
                    { "class": "mb-0" },
                    "Form to edit category :-"
                  ),
                  React.createElement("br", null)
                )
              )
            ),
            React.createElement(
              "div",
              { "class": "card-body" },
              React.createElement(
                "form",
                null,
                React.createElement(
                  "div",
                  { "class": "form-group" },
                  React.createElement(
                    "label",
                    { "for": "code" },
                    "Enter code:-"
                  ),
                  React.createElement("input", { type: "text", "class": "form-control form-control-lg rounded-0", name: "code", id: "code", required: "", value: this.state.customers[this.state.rowClicked - 1].code, readOnly: true })
                ),
                React.createElement(
                  "div",
                  { "class": "form-group" },
                  React.createElement(
                    "label",
                    null,
                    "Enter title:-"
                  ),
                  React.createElement("input", { name: "title", type: "text", "class": "form-control form-control-lg rounded-0", id: "title", required: "" })
                ),
                React.createElement("div", null),
                React.createElement(
                  "button",
                  { type: "button", "class": "btn btn-primary float-center", id: "btnLogin", onClick: this.editCategory },
                  "Edit Category"
                ),
                React.createElement(
                  "button",
                  { type: "button", "class": "btn btn-primary float-center", id: "btnLogin", onClick: this.cancel },
                  "Delete Category"
                )
              )
            )
          )
        )
      );
    } else if (this.state.addButtonSelected == 1) {
      return React.createElement(AddCustomer, null);
    } else {

      if (this.state.responseRecieved == 0) {
        this.populateDS();
        return React.createElement("div", { "class": "spinner-border" });
      } else {
        let sno = 0;
        return React.createElement(
          "div",
          null,
          React.createElement(
            "form",
            { "class": "navbar-search navbar-search-light form-inline mr-sm-3", id: "navbar-search-main" },
            React.createElement(
              "div",
              { "class": "form-group mb-0" },
              React.createElement(
                "div",
                { "class": "input-group input-group-alternative input-group-merge" },
                React.createElement(
                  "div",
                  { "class": "input-group-prepend" },
                  React.createElement(
                    "span",
                    { "class": "input-group-text" },
                    React.createElement("i", { "class": "fas fa-search" })
                  )
                ),
                React.createElement("input", { "class": "form-control", placeholder: "Search", type: "text", id: "search", onInput: this.searchRow })
              )
            ),
            React.createElement(
              "button",
              { type: "button", "class": "close", "data-action": "search-close", "data-target": "#navbar-search-main", "aria-label": "Close" },
              React.createElement(
                "span",
                { "aria-hidden": "true" },
                "\xD7"
              )
            )
          ),
          React.createElement("br", null),
          React.createElement(
            "div",
            { "class": "row" },
            React.createElement(
              "div",
              { "class": "col-xl-8" },
              React.createElement(
                "div",
                { "class": "card" },
                React.createElement(
                  "div",
                  { "class": "card-header border-0" },
                  React.createElement(
                    "div",
                    { "class": "row align-items-center" },
                    React.createElement(
                      "div",
                      { "class": "col" },
                      React.createElement(
                        "h3",
                        { "class": "mb-0" },
                        "customers"
                      )
                    ),
                    React.createElement(
                      "div",
                      { "class": "col text-right" },
                      React.createElement(
                        "button",
                        { "class": "btn btn-sm btn-primary", onClick: this.add },
                        React.createElement("i", { "class": "fa fa-plus" })
                      )
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { style: { height: "300px", overflow: "scroll" }, "class": "table-responsive" },
                  React.createElement(
                    "table",
                    { "class": "table align-items-center table-flush" },
                    React.createElement(
                      "thead",
                      { "class": "thead-light" },
                      React.createElement(
                        "tr",
                        null,
                        React.createElement(
                          "th",
                          { scope: "col" },
                          "S.No."
                        ),
                        React.createElement(
                          "th",
                          { scope: "col" },
                          "Code"
                        ),
                        React.createElement(
                          "th",
                          { scope: "col" },
                          "Title"
                        ),
                        React.createElement(
                          "th",
                          { scope: "col" },
                          " Delete"
                        ),
                        React.createElement(
                          "th",
                          { scope: "col" },
                          " Edit"
                        )
                      )
                    ),
                    React.createElement(
                      "tbody",
                      null,
                      this.state.customers.map(category => {
                        sno += 1;
                        return React.createElement(
                          "tr",
                          { id: sno },
                          React.createElement(
                            "td",
                            null,
                            sno
                          ),
                          React.createElement(
                            "td",
                            null,
                            category.code
                          ),
                          React.createElement(
                            "td",
                            null,
                            category.title
                          ),
                          React.createElement(
                            "td",
                            null,
                            "  ",
                            React.createElement(
                              "button",
                              { "class": "btn btn-sm btn-primary", onClick: this.deleteIconHandler(sno) },
                              React.createElement("i", { "class": "fa fa-trash" })
                            )
                          ),
                          React.createElement(
                            "td",
                            null,
                            React.createElement(
                              "button",
                              { "class": "btn btn-sm btn-primary", onClick: this.editIconHandler(sno) },
                              React.createElement("i", { "class": "fa fa-edit" })
                            )
                          )
                        );
                      })
                    )
                  )
                )
              )
            )
          )
        );
      }
    }
  }
}