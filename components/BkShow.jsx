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

        <div className="bk-show__main-image col-sm-8">
          <div className="bk-show__nav-item-container bk-show__hide-til-hover">
            <a className="bk-show__nav-item -home" href="#articles">
              <i className="fa fa-home"></i>
            </a>

            <div className="bk-show__nav-item -prev" onClick={ this.prevPic }>
              <i className="fa fa-angle-left"></i>
            </div>

            <div className="bk-show__nav-item -next" onClick={ this.nextPic }>
              <i className="fa fa-angle-right"></i>
            </div>
          </div>
          <img src={ this.state.activePic[0] } alt="bug" width="100%" height="90%"/>
        </div>

        <div className="col-sm-4">
          <div className="bk-show__image-blurb js-show__image-blurb">{  this.state.activePic[2] }</div>

          <div className="bk-show__small-images row">
            { this.props.pics.map(function (data) {
              return (
                <div className="bk-show__small-image"  onClick={ setActivePic.bind(null, data) }><img src={data[1]} alt={data[2]} height="100px" width="100px" /></div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
})