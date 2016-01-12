var BkShowThumbs = React.createClass({
  render: function () {
    var setActivePic = this.props.setActivePic;
    var activePic = this.props.activePic;

    return (
      <div className="bk-show__small-images row">
        { this.props.pics.map(function (data) {
          return (
            <div className={ activePic == data ? "bk-show__small-image -selected" : "bk-show__small-image" } onClick={ setActivePic.bind(null, data) }>
              <img src={data[1]} alt={data[2]} height="66px" width="66px" />
            </div>
          );
        })}
      </div>
    )
  }
});