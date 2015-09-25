var BkColumn = React.createClass({
  render: function () {
    var showHideSlider = this.props.showHideSlider
    return (
      <div className="col-sm-4">
        { this.props.infos.map(function (data) {
          return (
            <BkBox src={ data.src } alt={ data.alt } key={ data.alt } showHideSlider={showHideSlider}>
              { data.note }
            </BkBox>
          );
        })}
      </div>
    );
  }
});