var BkBox = React.createClass({
  getInitialState: function () {
    return {
      selected: false
    };
  },
  onClick: function (event) {
    console.log(this.state)
    this.setState({
      selected: !this.state.selected
    });
  },
  render: function () {
    return (
      <div className={ this.state.selected ? "bk-box -selected" : "bk-box" } onClick={ this.onClick }>
        <img src={this.props.src} alt={this.props.alt} height="auto" width="100%" />
        { this.state.selected ? (
          <p>
            { this.props.children }
          </p>
        ) : (
          <p>
            { this.props.children.substring(0,100) + "..." }
          </p>
        )}
      </div>
    );
  }
});