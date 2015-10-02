var BkColumn = React.createClass({
  render: function () {
    return (
      <div className="col-sm-4">
        { this.props.infos.map(function (info) {
          var path  = "#article/"
          path = path.concat(info[0])
          return (
            <a href={path}>
              <BkBox src={ info[1].src } alt={ info[1].alt } key={ info[1].alt } title={info[1].title} pics={ info[1].pics }>
                { info[1].note }
              </BkBox>
            </a>
          );
        })}
      </div>
    );
  }
});