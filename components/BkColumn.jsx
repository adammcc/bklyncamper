var BkColumn = React.createClass({
  render: function () {
    var showPage = this.props.showPage
    return (
      <div className="col-sm-4">
        { this.props.infos.map(function (data) {
          return (
            <BkBox src={ data.src } alt={ data.alt } key={ data.alt } showPage={ showPage } title={data.title} pics={ data.pics }>
              { data.note }
            </BkBox>
          );
        })}
      </div>
    );
  }
});