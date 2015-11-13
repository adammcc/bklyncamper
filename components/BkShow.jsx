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
  nextPic: function () {
    var currentPicIndex = this.props.pics.indexOf(this.state.activePic);
    var nextPicIndex = currentPicIndex == this.props.pics.length - 1 ? 0 : currentPicIndex + 1;
    this.setState({
      activePic: this.props.pics[nextPicIndex]
    });
  },
  prevPic: function () {
    var currentPicIndex =  this.props.pics.indexOf(this.state.activePic);
    var prevPicIndex = currentPicIndex == 0 ? this.props.pics.length - 1 : currentPicIndex - 1;
    this.setState({
      activePic: this.props.pics[prevPicIndex]
    });
  },
  render: function () {
    var setActivePic = this.setActivePic
    return (
      <div>
        <a href="#articles">
          <BkMainHeader />
        </a>

        <div className="bk-show__main-image col-sm-8"><img src={ this.state.activePic[0] } alt="bug" width="100%" height="90%"/></div>
        <div className="col-sm-4">
          <div className="bk-show__nav row">
              <div className="bk-show__go-home">
                <a href="#articles">
                  <i className="fa fa-angle-left"></i> Main
                </a>
                <div className="pull-right">
                  <span className="bk-show__prev" onClick={ this.prevPic }><i className="fa fa-angle-left"></i> Prev </span>
                  <span className="bk-show__next" onClick={ this.nextPic }> Next <i className="fa fa-angle-right"></i> </span>
                </div>
              </div>
            <div className="bk-show__image-blurb js-show__image-blurb">{  this.state.activePic[2] }</div>
          </div>

          <div className="bk-show__small-images row">
            { this.props.pics.map(function (data) {
              return (
                <div className="bk-show__small-image"  onClick={ setActivePic.bind(null, data) }><img src={data[1]} alt={data[2]} height="110px" width="110px" /></div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
})