class Product {
  constructor(code, title, price, category) {
    this.code = code;
    this.title = title;
    this.price = price;
    this.category = category;
  }
}

class ProductList extends React.Component {
  constructor(props) {

    super(props);
    this.state = { "productList": this.props.productList, "categorySelected": null };
    if (this.props.categorySelectionFilter) this.props.categorySelectionFilter(this);
  }
  changeCategorySelection(code) {
    this.setState({ "categorySelected": code });
  }
  render() {

    return React.createElement(
      "div",
      null,
      React.createElement(
        "ul",
        null,
        this.state.productList.map(product => {
          if (this.state.categorySelected) {
            if (this.state.categorySelected == product.category.code) {

              return React.createElement(
                "li",
                null,
                " ",
                product.title,
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement(
                  "button",
                  { onClick: () => this.props.addItemToCart(product) },
                  " Add To Cart "
                ),
                React.createElement("br", null),
                React.createElement("br", null)
              );
            } else return null;
          } else {

            return React.createElement(
              "li",
              null,
              "  ",
              product.title,
              React.createElement("br", null),
              React.createElement("br", null),
              React.createElement(
                "button",
                { onClick: () => this.props.addItemToCart(product) },
                " Add To Cart "
              ),
              React.createElement("br", null),
              React.createElement("br", null)
            );
          }
        })
      )
    );
  }

}