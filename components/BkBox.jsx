var BkBox = React.createClass({
  getInitialState: function () {
    return {
      selected: false
    };
  },
  select: function (event) {
    this.setState({
      selected: !this.state.selected
    });
  },
  render: function () {
    return (
      <div className={ this.state.selected ? "bk-box -selected" : "bk-box" } onClick={ this.select }>
        <div className="bk-img-container">
          <img src={this.props.src} alt={this.props.alt} height="auto" width="100%" />
          <i className="fa fa-plus" onClick={ this.props.showPage.bind(null, this.props.pics) }></i>
        </div>
        <h4>{ this.props.title }</h4>
        { this.state.selected ? (
          <p>
            { this.props.children }
          </p>
        ) : (
          <p>
            { this.props.children.substring(0,50) + "..." }
          </p>
        )}
      </div>
    );
  }
});