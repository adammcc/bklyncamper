var BkRow = React.createClass({
  render: function () {
    return (
      <div className="bk-article-row row">
        <div className="bk-article-row__box col-sm-4">
          <a href={ "#article/" + this.props.articles[0] }>
            <BkBox long={ false } src={ info[this.props.articles[0]].src } alt={ info[this.props.articles[0]].alt } key={ info[this.props.articles[0]].alt } title={info[this.props.articles[0]].title} pics={ info[this.props.articles[0]].pics }>
            </BkBox>
          </a>
        </div>
        <div className="bk-article-row__box bk-article-row__box--middle col-sm-4">
          <a href={ "#article/" + this.props.articles[1] }>
            <BkBox long={ false } src={ info[this.props.articles[1]].src } alt={ info[this.props.articles[1]].alt } key={ info[this.props.articles[1]].alt } title={info[this.props.articles[1]].title} pics={ info[this.props.articles[1]].pics }>
            </BkBox>
          </a>
        </div>
        <div className="bk-article-row__box col-sm-4">
          <a href={ "#article/" + this.props.articles[2] }>
            <BkBox long={ false } src={ info[this.props.articles[2]].src } alt={ info[this.props.articles[2]].alt } key={ info[this.props.articles[2]].alt } title={info[this.props.articles[2]].title} pics={ info[this.props.articles[2]].pics }>
            </BkBox>
          </a>
        </div>
      </div>
    );
  }
});