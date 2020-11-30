class Shop extends React.Component {
  constructor(props) {
    super(props);
    let categoryList = this.props.categories;
    /*
    for(let i in this.props.categories)
    {
    let category=new Category();
    category.code=this.props.categories[i].code;
    category.title=this.props.categories[i].title;
    categoryList.push(category);
    }*/

    let productList = [];
    for (let i in this.props.products) {
      alert(this.props.products[i].code);
    }
    this.state = { "categoryList": categoryList, "productList": productList };
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
  }
}