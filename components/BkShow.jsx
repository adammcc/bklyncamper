var BkShow = React.createClass({
  render: function () {
    return (
      <div>
        <div className="col-sm-8"><img src="images/upstate_lake.JPG" alt="bug" width="100%" height="90%"/></div>
        <div className="col-sm-4">
          <div className="bk-image-blurb">Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank.</div>
          <div className="bk-go-home pull-right" onClick={this.props.showHideSlider}><i className="fa fa-home"></i></div>
        </div>
      </div>
    );
  }
})