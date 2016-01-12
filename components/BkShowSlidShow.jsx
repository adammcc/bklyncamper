var BkShowSlidShow = React.createClass({
  getInitialState: function () {
    return { activePic: this.props.pics[0] };
  },
  componentDidMount: function() { this.textToHtml() },
  textToHtml: function () {
    $('.js-show__image-blurb').each(function(){
      var html = $(this).text()
      $html = $($.parseHTML(html))
      $(this).html($html)
    })
  },
  setActivePic: function (pic) {
    this.setState({ activePic: pic });
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
    var recipe = info[this.props.articleName]['recipe']

    return (
      <div>
        <a href="#articles">
          <BkMainHeader />
        </a>
        <div className="bk-show__title">&#10523; { this.props.title } &#10524;</div>

        <div className="bk-show__main-image col-sm-8">
          <SlideShowNav prevPic={this.prevPic} nextPic={this.nextPic} picCount={ info[this.props.articleName]['pics'].length } />
          <img src={ this.state.activePic[0] } alt="bug" width="100%" height="90%"/>
        </div>

        <div className="col-sm-3">
          <br/>
          <div className="bk-show__image-blurb js-show__image-blurb"> { info[this.props.articleName]['blurb'] }</div>
        </div>

        {(
          recipe.length ?
            <div className="col-sm-8">
              <ul className="bk-show__recipe js-show__image-blurb">
                { recipe.map(function (line) {
                  return ( { line } );
                })}
              </ul>
            </div>
          :
            false
        )}
      </div>
    );
  }
})