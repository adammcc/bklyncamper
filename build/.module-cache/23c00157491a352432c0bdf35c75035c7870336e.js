var BkBox = React.createClass({displayName: "BkBox",
  getInitialState: function () {
    return {
      selected: false
    };
  },
  select: function () {
    this.setState({ selected: true });
  },
  deselect: function () {
    this.setState({ selected: false });
  },
  render: function () {
    return (
      React.createElement("div", {className:  this.state.selected ? "bk-box -selected" : "bk-box", onClick:  this.props.showPage.bind(null, this.props.pics), onMouseEnter:  this.select, onMouseLeave:  this.deselect}, 
        React.createElement("div", {className: "bk-box__img-container"}, 
          React.createElement("img", {src: this.props.src, alt: this.props.alt, height: "auto", width: "100%"}), 
          React.createElement("i", {className: "fa fa-chevron-right"})
        ), 
        React.createElement("h4", {className: "bk-box__title"},  this.props.title), 
        React.createElement("p", null, 
           this.props.children
        )
      )
    );
  }
});