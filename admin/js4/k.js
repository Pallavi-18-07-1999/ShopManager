class CategoryList {}
class CategoryMaster extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "addButtonSelected": 0 };
    this.addCategory = this.addCategory.bind(this);
    this.editCategory = this.editCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
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
    alert(this.state.addButtonSelected);
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
              "form",
              null,
              React.createElement(
                "div",
                { "class": "col-xs-2" },
                React.createElement(
                  "label",
                  { "class": "mb-0" },
                  " Enter code:-"
                ),
                React.createElement("input", { id: "code", type: "text", "class": "form-control", name: "code", placeholder: "Code" })
              ),
              React.createElement("br", null),
              React.createElement(
                "div",
                { "class": "col-xs-2" },
                React.createElement(
                  "label",
                  { "class": "mb-0" },
                  " Enter title "
                ),
                React.createElement("input", { id: "title", type: "text", "class": "form-control", name: "title", placeholder: "Title" })
              ),
              React.createElement("br", null),
              React.createElement(
                "button",
                { "class": "btn btn-primary" },
                "Add Category"
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