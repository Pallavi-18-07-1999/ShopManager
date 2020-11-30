class TMClock extends React.Component {
  constructor() {
    super();
    this.state = { "now": new Date().toLocaleString(), "username": "Pallavi" };
    setInterval(() => {
      this.setState({ "now": new Date().toLocaleString() });
    }, 1000);
  }
  render() {
    return React.createElement(
      "div",
      null,
      "Time : ",
      this.state.now,
      "Username :",
      this.state.username
    );
  }
}