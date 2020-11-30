class Category {
  constructor() {
    this.code = 0;
    this.title = "";
  }
}
class CategoryMaster extends React.Component {
  constructor(props) {
    super(props);
    let categories = [];
    this.rowSelected = null;
    this.state = { "categories": categories, "addButtonSelected": 0, "editButtonSelected": 0, "deleteButtonSelected": 0, "responseRecieved": 0, "rowClicked": -1 };
    this.addCategory = this.addCategory.bind(this);
    this.editCategory = this.editCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.add = this.add.bind(this);
    this.editIconHandler = this.editIconHandler.bind(this);
    this.deleteIconHandler = this.deleteIconHandler.bind(this);
    this.searchRow = this.searchRow.bind(this);
    this.props.selectedCategoryCode = null;
    this.props.errorMessage = "";
    this.cancel = this.cancel.bind(this);
  }
  cancel() {
    this.setState({ "addButtonSelected": 0, "editButtonSelected": 0, "deleteButtonSelected": 0, "responseRecieved": 1 });
  }
  populateDS() {

    let cs = new CategoryService();
    let pro = cs.getAll();
    pro.then(resp => {
      resp.json().then(data => {
        if (data.success) {
          let categories = [];
          categories = data.response.categories;
          this.setState({ "categories": categories, "responseRecieved": 1 });
        }
      });
    });
  }
  componentDidUpdate() {
    if (this.props.selectedCategoryCode != null && this.state.responseRecieved == 1) {
      this.selectCategory(this.props.selectedCategoryCode);
      this.props.selectedCategoryCode = null;
    }
  }
  selectCategory(code) {
    for (var i in this.state.categories) {
      if (this.state.categories[i].code == code) {
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
    for (var category in this.state.categories) {
      if (this.state.categories[category].title.startsWith(title)) {

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
  addCategory() {
    let cs = new CategoryService();
    let category = new Category();
    category.code = document.getElementById('code').value;
    category.title = document.getElementById('title').value;
    let pro = cs.addCategory(category);
    pro.then(resp => {
      resp.json().then(data => {
        if (data.success) {
          this.props.selectedCategoryCode = category.code;
          this.setState({ "addButtonSelected": 0, "editButtonSelected": 0, "deleteButtonSelected": 0, "responseRecieved": 0 });
        } else {
          this.props.errorMessage = data.exception;
          this.setState({ "addButtonSelected": 1, "editButtonSelected": 0, "deleteButtonSelected": 0, "responseRecieved": 0 });
        }
      });
    });
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
                    "label",
                    { "for": "code" },
                    "Enter code:-"
                  ),
                  React.createElement("input", { type: "text", "class": "form-control form-control-lg rounded-0", name: "code", id: "code", required: "", value: this.state.categories[this.state.rowClicked - 1].code, readOnly: true })
                ),
                React.createElement(
                  "div",
                  { "class": "form-group" },
                  React.createElement(
                    "label",
                    null,
                    "Enter title:-"
                  ),
                  React.createElement("input", { name: "title", type: "text", "class": "form-control form-control-lg rounded-0", id: "title", required: "", value: this.state.categories[this.state.rowClicked - 1].title, readOnly: true })
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
                  "Cancel"
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
                  React.createElement("input", { type: "text", "class": "form-control form-control-lg rounded-0", name: "code", id: "code", required: "", value: this.state.categories[this.state.rowClicked - 1].code, readOnly: true })
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
                  "Cancel"
                )
              )
            )
          )
        )
      );
    } else if (this.state.addButtonSelected == 1) {

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
                    "Form to add category :-"
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
                    "Enter code:-"
                  ),
                  React.createElement("input", { type: "text", "class": "form-control form-control-lg rounded-0", name: "code", id: "code", required: "" })
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
                  { type: "button", "class": "btn btn-primary float-center", id: "btnLogin", onClick: this.addCategory },
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
                        "Categories"
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
                      this.state.categories.map(category => {
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