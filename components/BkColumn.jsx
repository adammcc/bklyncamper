var BkColumn = React.createClass({
  render: function () {
    return (
      <div className="col-sm-4">
        { this.props.infos.map(function (data) {
          return (
            <BkBox src={ data.src } alt={ data.alt } key={ data.alt }>
              { data.note }
            </BkBox>
          );
        })}
      </div>
    );
  }
});