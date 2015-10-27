var BkRowEightFour = React.createClass({
  render: function () {
    return (
      <div className="bk-article-row row">
        <div className="bk-article-row__box bk-dashed-border-right col-sm-8">
          <a href={ "#article/" + this.props.articles[0] }>
            <BkBox long={ true } src={ info[this.props.articles[0]].src } alt={ info[this.props.articles[0]].alt } key={ info[this.props.articles[0]].alt } title={info[this.props.articles[0]].title} pics={ info[this.props.articles[0]].pics }>
              { info[this.props.articles[0]].note }
            </BkBox>
          </a>
        </div>
        <div className="bk-article-row__box col-sm-4">
          <a href={ "#article/" + this.props.articles[1] }>
            <BkBox long={ false } src={ info[this.props.articles[1]].src } alt={ info[this.props.articles[1]].alt } key={ info[this.props.articles[1]].alt } title={info[this.props.articles[1]].title} pics={ info[this.props.articles[1]].pics }>
              { info[this.props.articles[1]].note }
            </BkBox>
          </a>
        </div>
      </div>
    );
  }
});