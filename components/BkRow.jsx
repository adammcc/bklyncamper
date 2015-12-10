var BkRow = React.createClass({
  render: function () {
    return (
      <div className="bk-article-row row">
        { this.props.threeTitles.map(function (title) {
          return (
            <div className="bk-article-row__box col-sm-4">
              <a href={ "#article/" + title }>
                <BkBox long={ false } src={ info[title].src } alt={ info[title].alt } key={ info[title].alt } title={info[title].title} pics={ info[title].pics }>
                </BkBox>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
});