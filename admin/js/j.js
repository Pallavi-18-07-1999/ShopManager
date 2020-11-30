class CategoryList {}
class CategoryMaster {
  constructor(props) {
    super(props);
  }
  render() {
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
            "Referral"
          ),
          React.createElement(
            "th",
            { scope: "col" },
            "Visitors"
          ),
          React.createElement("th", { scope: "col" })
        )
      ),
      React.createElement(
        "tbody",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            { scope: "row" },
            "Facebook"
          ),
          React.createElement(
            "td",
            null,
            "1,480"
          ),
          React.createElement(
            "td",
            null,
            React.createElement(
              "div",
              { "class": "d-flex align-items-center" },
              React.createElement(
                "span",
                { "class": "mr-2" },
                "60%"
              ),
              React.createElement(
                "div",
                null,
                React.createElement(
                  "div",
                  { "class": "progress" },
                  React.createElement("div", { "class": "progress-bar bg-gradient-danger", role: "progressbar", "aria-valuenow": "60", "aria-valuemin": "0", "aria-valuemax": "100", style: "width: 60%;" })
                )
              )
            )
          )
        ),
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            { scope: "row" },
            "Facebook"
          ),
          React.createElement(
            "td",
            null,
            "5,480"
          ),
          React.createElement(
            "td",
            null,
            React.createElement(
              "div",
              { "class": "d-flex align-items-center" },
              React.createElement(
                "span",
                { "class": "mr-2" },
                "70%"
              ),
              React.createElement(
                "div",
                null,
                React.createElement(
                  "div",
                  { "class": "progress" },
                  React.createElement("div", { "class": "progress-bar bg-gradient-success", role: "progressbar", "aria-valuenow": "70", "aria-valuemin": "0", "aria-valuemax": "100", style: "width: 70%;" })
                )
              )
            )
          )
        ),
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            { scope: "row" },
            "Google"
          ),
          React.createElement(
            "td",
            null,
            "4,807"
          ),
          React.createElement(
            "td",
            null,
            React.createElement(
              "div",
              { "class": "d-flex align-items-center" },
              React.createElement(
                "span",
                { "class": "mr-2" },
                "80%"
              ),
              React.createElement(
                "div",
                null,
                React.createElement(
                  "div",
                  { "class": "progress" },
                  React.createElement("div", { "class": "progress-bar bg-gradient-primary", role: "progressbar", "aria-valuenow": "80", "aria-valuemin": "0", "aria-valuemax": "100", style: "width: 80%;" })
                )
              )
            )
          )
        ),
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            { scope: "row" },
            "Instagram"
          ),
          React.createElement(
            "td",
            null,
            "3,678"
          ),
          React.createElement(
            "td",
            null,
            React.createElement(
              "div",
              { "class": "d-flex align-items-center" },
              React.createElement(
                "span",
                { "class": "mr-2" },
                "75%"
              ),
              React.createElement(
                "div",
                null,
                React.createElement(
                  "div",
                  { "class": "progress" },
                  React.createElement("div", { "class": "progress-bar bg-gradient-info", role: "progressbar", "aria-valuenow": "75", "aria-valuemin": "0", "aria-valuemax": "100", style: "width: 75%;" })
                )
              )
            )
          )
        ),
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            { scope: "row" },
            "twitter"
          ),
          React.createElement(
            "td",
            null,
            "2,645"
          ),
          React.createElement(
            "td",
            null,
            React.createElement(
              "div",
              { "class": "d-flex align-items-center" },
              React.createElement(
                "span",
                { "class": "mr-2" },
                "30%"
              ),
              React.createElement(
                "div",
                null,
                React.createElement(
                  "div",
                  { "class": "progress" },
                  React.createElement("div", { "class": "progress-bar bg-gradient-warning", role: "progressbar", "aria-valuenow": "30", "aria-valuemin": "0", "aria-valuemax": "100", style: "width: 30%;" })
                )
              )
            )
          )
        )
      )
    );
  }
}