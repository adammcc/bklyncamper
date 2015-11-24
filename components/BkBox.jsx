var BkBox = React.createClass({
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
      <div className={ this.state.selected ? "bk-box -selected" : "bk-box" } onMouseEnter={ this.select } onMouseLeave={ this.deselect }>
        <div className={ this.props.long ? 'bk-box__img-container -long' : 'bk-box__img-container' }>
          <img src={this.props.src} alt={this.props.alt} height="auto" width="100%" />
          <i className="fa fa-chevron-right"></i>
        </div>
        <div className='bk-box__note-container'>
          <h4 className="bk-box__title">{ this.props.title }</h4>
          <p>{ this.props.children }</p>
        </div>
      </div>
    );
  }
});