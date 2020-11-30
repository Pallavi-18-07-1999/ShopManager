class CartItem {
  constructor(code, name, price, quantity) {

    this.code = code;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}
class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    let cart = [];
    this.state = { "items": cart };
    this.props.shoppingCartReference(this);
  }
  decreaseQuantity(item) {

    if (item.quantity == 1) {
      let cart = this.state.items;
      let index = cart.indexOf(item);
      cart.splice(index, 1);
      this.setState({ "items": cart });
    } else {
      let cart = this.state.items;
      let index = this.state.items.indexOf(item);
      cart[index].quantity -= 1;
      this.setState({ "items": cart });
    }
  }
  increaseQuantity(item) {
    let cart = this.state.items;
    let index = this.state.items.indexOf(item);
    cart[index].quantity += 1;
    this.setState({ "items": cart }); //ds is updated so we are calling set state
  }
  addItemToCart(item) {
    alert('addToCartChala');
    let cart = this.state.items;
    cart.push(item);
    this.setState({ "items": cart });
  }
  render() {
    let amount = 0;
    let cnt = 0;
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        " Cart.... "
      ),
      React.createElement(
        "h2",
        null,
        " Items :-  "
      ),
      React.createElement(
        "table",
        { border: "1px solid black" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              null,
              " S.No. "
            ),
            React.createElement(
              "th",
              null,
              " Item Name "
            ),
            React.createElement(
              "th",
              null,
              " Quantity "
            ),
            React.createElement(
              "th",
              null,
              " Price"
            ),
            React.createElement(
              "th",
              null,
              " Amount"
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          this.state.items.map(item => {
            amount += item.price * item.quantity;
            cnt++;
            return React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                " ",
                cnt,
                " "
              ),
              React.createElement(
                "td",
                null,
                " ",
                item.name,
                " "
              ),
              React.createElement(
                "td",
                null,
                " ",
                React.createElement(
                  "button",
                  { onClick: () => this.increaseQuantity(item) },
                  "+ "
                ),
                React.createElement("input", { type: "text", readOnly: true, value: item.quantity }),
                React.createElement(
                  "button",
                  { onClick: () => this.decreaseQuantity(item) },
                  " - "
                )
              ),
              React.createElement(
                "td",
                null,
                " ",
                item.price,
                " "
              ),
              React.createElement(
                "td",
                null,
                " ",
                item.price * item.quantity,
                " "
              )
            );
          })
        )
      ),
      React.createElement(
        "h2",
        null,
        " amount :- ",
        amount,
        "  "
      )
    );
  }
}