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
    var activePic = this.state.activePic
    return (
      <div>
        <a href="#articles">
          <BkMainHeader />
        </a>
        <div className="bk-show__title">&#10523; { this.props.title } &#10524;</div>

        <div className="bk-show__main-image col-sm-8">
          <GalleryNav prevPic={this.prevPic} nextPic={this.nextPic} />
          <img src={ this.state.activePic[0] } alt="bug" width="100%" height="90%"/>
        </div>

        <div className="col-sm-3">
          <BkShowThumbs pics={this.props.pics} setActivePic={setActivePic} activePic={activePic} />
          <div className="bk-show__image-blurb js-show__image-blurb">{ this.state.activePic[2] }</div>
        </div>
      </div>
    );
  }
})