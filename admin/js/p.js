
class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "firstName": "",
      "lastName": "",
      "gender": {
        "male": false,
        "female": false
      },
      "address": "",
      "city": "selectCity",
      "errorObject": {
        "firstName": "",
        "lastName": "",
        "gender": ""
      },
      "focusOn": null
    };
    this.firstNameChangeHandler = this.firstNameChangeHandler.bind(this);
    this.genderChngeEventHandler = this.genderChngeEventHandler.bind(this);
    this.addressChangeEventHandler = this.addressChangeEventHandler.bind(this);
    this.cityChangeEventHandler = this.cityChangeEventHandler.bind(this);
    this.submitEventHandler = this.submitEventHandler.bind(this);
  }
  firstNameChangeHandler(ev) {
    this.setState({ "firstName": ev.target.value });
  }
  lastNameChangeHandler(ev) {
    this.setState({ "lastName": ev.target.value });
  }
  genderChngeEventHandler(ev) {
    let gender = this.state.gender;
    gender[ev.target.value] = ev.target.checked;
    this.setState({ "gender": gender });
  }
  addressChangeEventHandler(ev) {
    this.setState({ "address": ev.target.value });
  }
  cityChangeEventHandler(ev) {
    this.setState({ "city": ev.target.value });
  }
  componentDidUpdate() {
    if (this.state.focusOn != null) this.state.focusOn.focus();
  }
  submitEventHandler(ev) {

    let errorObject = this.state.errorObject;
    let focus = null;
    if (this.state.firstName.length == 0) {
      errorObject["firstName"] = "required";
      focus = ev.target["firstName"];
      ev.preventDefault();
    }
    if (this.state.lastName.length == 0) {
      errorObject["lastName"] = "required";
      if (focus == null) focus = ev.target["lastName"];
      ev.preventDefault();
    }
    if (this.state.gender["male"] == false && this.state.gender["female"] == false) {
      errorObject["gender"] = "required";
      ev.preventDefault();
    }

    console.log(ev.target["firstName"].value);
    ev.target["firstName"].focus();
    this.setState({ "errorObject": errorObject, "focusOn": focus });
  }
  render() {
    return React.createElement(
      "form",
      { onSubmit: this.submitEventHandler },
      "First Name:-",
      React.createElement("input", { type: "text", name: "firstName", value: this.state.firstName, onChange: this.firstNameChangeHandler }),
      React.createElement(
        "span",
        null,
        this.state.errorObject["firstName"]
      ),
      React.createElement("br", null),
      "Last Name:-",
      React.createElement("input", { type: "text", name: "lastName", value: this.state.lastName, onChange: this.lastNameChangeHandler.bind(this) }),
      React.createElement(
        "span",
        null,
        this.state.errorObject["lastName"]
      ),
      React.createElement("br", null),
      "Gender :- \xA0\xA0\xA0 Male",
      React.createElement("input", { type: "radio", name: "gender", value: "male", checked: this.state.gender["male"], onChange: this.genderChngeEventHandler }),
      "\xA0 Female",
      React.createElement("input", { type: "radio", name: "gender", value: "female", checked: this.state.gender["female"], onChange: this.genderChngeEventHandler }),
      React.createElement(
        "span",
        null,
        this.state.errorObject["gender"]
      ),
      React.createElement("br", null),
      "Address :-",
      React.createElement("textarea", { rows: "4", cols: "10", value: this.state.address, onChange: this.addressChangeEventHandler }),
      React.createElement("br", null),
      "Select city :-",
      React.createElement(
        "select",
        { value: this.state.city, onChange: this.cityChangeEventHandler },
        React.createElement(
          "option",
          { value: "selectCity", selected: true },
          "select city"
        ),
        React.createElement(
          "option",
          { value: "bengaluru" },
          "Bengaluru"
        ),
        React.createElement(
          "option",
          { value: "mumbai" },
          "Mumbai"
        )
      ),
      React.createElement(
        "button",
        null,
        "Save"
      )
    );
  }
}