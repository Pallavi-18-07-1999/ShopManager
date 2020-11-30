
class ComponentLifeCycleTesterWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "x": 1 };
    setInterval(() => {
      this.setState({ "x": this.state.x + 1 });
    }, 3000);
  }
  render() {
    if (this.state.x > 5) {
      console.log(this.state.x);
      return null;
    }
    return React.createElement(ComponentLifeCycleTester, { abcd: this.state.x });
  }
}
class ComponentLifeCycleTester extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("component will mount methiod called!");
  }
  componentDidMount() {
    console.log("component did mount mothod calles!");
  }
  componentWillReceiveProps(props) {
    console.log("component will recieve props method got called! ", props);
    this.setState({ "yess": props.abcd });
  }
  shouldComponentUpdate(props, state) {
    console.log("should component update method got called!", state);
    return true;
  }
  componentWillUpdate(props, state) {
    console.log("will component update method got called!");
  }
  componentDidUpdate(props, state) {
    console.log("component did update method got called!");
  }
  componentWillUnmount() {
    console.log("component will unmount method got called!");
  }
  render() {
    return React.createElement(
      "h1",
      null,
      " Component Life Cycle Tester  "
    );
  }
}