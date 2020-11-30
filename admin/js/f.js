class Category {
  constructor(code, title) {
    this.code = code;
    this.title = title;
  }
}

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "categories": this.props.categoryList };
  }
  render() {

    return React.createElement(
      "div",
      null,
      React.createElement(
        "ul",
        null,
        this.state.categories.map(category => {
          if (this.props.categorySelected) return React.createElement(
            "li",
            { onClick: () => this.props.categorySelected(category) },
            " ",
            category.title,
            " "
          );else return React.createElement(
            "li",
            null,
            " ",
            category.title,
            " "
          );
        })
      )
    );
  }
}