var BkBox = React.createClass({
  render: function () {
    return (
      <div className="bk-box">
        <img src={this.props.src} alt={this.props.alt} height="auto" width="100%" />
        <p>
          {this.props.children}
        </p>
      </div>
    );
  }
});