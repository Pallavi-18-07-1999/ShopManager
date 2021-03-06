
class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "flag": 0 };
    let fd = new FetchData();
    let pro = fd.getData();
    let products = [];
    let categories = [];
    pro.then(resp => {
      resp.json().then(data => {

        categories = data.response.categories;
        for (var i in data.response.products) {
          let categoryCode = data.response.products[i].categoryCode;
          for (var j in data.response.categories) {
            if (data.response.categories[j].code == categoryCode) {
              var jsonObject = {
                "code": data.response.products[i].code,
                "title": data.response.products[i].title,
                "price": data.response.products[i].price,
                "category": data.response.categories[j]
              };
              products.push(jsonObject);
            }
          }
        }

        this.setState({ "categoryList": categories, "productList": products, "flag": 1 });
      });
    });

    this.categorySelected = this.categorySelected.bind(this);
    this.registerProductList = this.registerProductList.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.setShoppingCartReference = this.setShoppingCartReference.bind(this);
  }
  categorySelected(category) {
    alert(category.title);
    this.productList.changeCategorySelection(category.code);
  }
  addToCart(product) {
    this.shoppingCart.addItemToCart(new CartItem(product.code, product.title, product.price, 1));
  }
  setShoppingCartReference(shoppingCart) {

    this.shoppingCart = shoppingCart;
  }
  registerProductList(productList) {
    this.productList = productList;
  }
  render() {

    if (this.state.flag == 1) {

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          " Categories... "
        ),
        React.createElement(
          CategoryList,
          { categoryList: this.state.categoryList, categorySelected: this.categorySelected },
          " "
        ),
        React.createElement(
          "h1",
          null,
          " Products...  "
        ),
        React.createElement(ProductList, { productList: this.state.productList, categorySelectionFilter: this.registerProductList, addItemToCart: this.addToCart }),
        React.createElement(ShoppingCart, { shoppingCartReference: this.setShoppingCartReference })
      );
    } else {
      return React.createElement("div", { "class": "spinner-border" });
    }
  }
}