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
    this.state = { "categories": categories, "addButtonSelected": 0, "responseRecieved": 0 };
    this.addCategory = this.addCategory.bind(this);
    this.editCategory = this.editCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    this.populateDS();
  }
  populateDS() {
    let cs = new CategoryService();
    let pro = cs.getAll();
    pro.then(resp => {
      resp.json().then(data => {
        if (data.success) {
          let categories = [];
          alert('success factor' + data.success);
          categories = data.response.categories;
          alert('response ' + this.state.response);
          this.setState({ "categories": categories, "responseRecieved": 1 });
        }
      });
    });
  }
  addCategory() {
    this.setState({ "addButtonSelected": 1, "editButtonSelected": 0, "deleteButtonSelected": 0 });
  }
  deleteCategory() {
    this.setState({ "addButtonSelected": 0, "editButtonSelected": 0, "deleteButtonSelected": 1 });
  }
  editCategory() {
    this.setState({ "addButtonSelected": 0, "editButtonSelected": 1, "deleteButtonSelected": 0 });
  }
  render() {
    alert('add chala');
    if (this.state.addButtonSelected == 1) {

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
                  React.createElement("input", { type: "text", "class": "form-control form-control-lg rounded-0", id: "pwd1", required: "" })
                ),
                React.createElement("div", null),
                React.createElement(
                  "button",
                  { type: "submit", "class": "btn btn-primary float-center", id: "btnLogin" },
                  "Add Category"
                )
              )
            )
          )
        )
      );
    } else if (this.state.editButtonSelected == 1) {
      alert('edit chala');
    } else if (this.state.deleteButtonSelected == 1) {
      alert('delete chala');
    } else {
      alert('response' + this.state.responseRecieved);
      if (this.state.responseRecieved == 0) {} else {
        alert('table filling part chala');
        return React.createElement(
          "div",
          null,
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
                        { "class": "btn btn-sm btn-primary", onClick: this.addCategory },
                        React.createElement("i", { "class": "fa fa-plus" })
                      ),
                      React.createElement(
                        "button",
                        { "class": "btn btn-sm btn-primary", onClick: this.deleteCategory },
                        React.createElement("i", { "class": "fa fa-trash" })
                      ),
                      React.createElement(
                        "button",
                        { "class": "btn btn-sm btn-primary", onClick: this.editCategory },
                        React.createElement("i", { "class": "fa fa-edit" })
                      )
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { "class": "table-responsive" },
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
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          React.createElement(
            "table",
            null,
            React.createElement(
              "thead",
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
              )
            ),
            React.createElement("tbody", null)
          )
        );
      }
    }
  }
}