
class MarkSheet extends React.Component {

  render() {
    var getDivision = result => {
      let division;
      if (result >= 60) division = "First Division";else if (result >= 45 && result < 60) division = "Second Division";else division = "Third division";
      alert(typeof 60);
      return division;
    };

    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        " MarkSheet "
      ),
      React.createElement(
        "h3",
        null,
        " Result : ",
        this.props.result,
        " "
      ),
      React.createElement(
        "b",
        null,
        " percentage : ",
        this.props.percent,
        "   "
      ),
      " ",
      React.createElement("br", null),
      React.createElement(
        "b",
        null,
        " Division : ",
        getDivision(this.props.percent),
        " "
      )
    );
  }
}
class Student extends React.Component {
  render() {
    return React.createElement(
      MarkSheet,
      { result: "Pass", percent: "50" },
      " "
    );
  }
}