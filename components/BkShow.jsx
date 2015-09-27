var BkShow = React.createClass({
  getInitialState: function () {
    return {
      activePic: this.props.pics[0]
    };
  },
  componentDidMount: function() {
    this.textToHtml()
  },
  componentDidUpdate: function() {
    this.textToHtml()
  },
  textToHtml: function () {
    var html = $('.js-show__image-blurb').text()
    $html =$($.parseHTML(html))
    $('.js-show__image-blurb').html($html)
  },
  setActivePic: function (pic) {
    this.setState({
      activePic: pic
    });
  },
  render: function () {
    var showPage = this.props.showPage
    var setActivePic = this.setActivePic
    return (
      <div>
        <div className="bk-show__main-image col-sm-8"><img src={ this.state.activePic[0] } alt="bug" width="100%" height="90%"/></div>
        <div className="col-sm-4">
          <div className="row">
            <div className="bk-show__go-home" onClick={showPage.bind(null, [])}><i className="fa fa-angle-left"></i> Main</div>
            <div className="bk-show__image-blurb js-show__image-blurb">{  this.state.activePic[1] }</div>
          </div>

          <div className="row">
            { this.props.pics.map(function (data) {
              return (
                <div className="bk-show__small-image"  onClick={ setActivePic.bind(null, data) }><img src={data[0]} alt={data[1]} height="110px" width="110px" /></div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
})