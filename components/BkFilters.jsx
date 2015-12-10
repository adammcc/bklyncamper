var BkFilters = React.createClass({
  getInitialState() {
    return {
      filterBy: this.props.filter
    };
  },
  setFilter: function (filter) {
    this.setState({
      filterBy: filter
    });
  },
  render: function () {
    return (
      <div className="bk-filters__row row">
        <a href="#articles" onClick={ this.setFilter.bind(null,'everything') } className={ this.state.filterBy == 'everything' ? "col-sm-2 col-sm-offset-1 bk-filters__option -selected" : "col-sm-2 col-sm-offset-1 bk-filters__option" }>
          Everything
        </a>
        <a href="#articles/getayways" onClick={ this.setFilter.bind(null,'getayways') } className={ this.state.filterBy == 'getayways' ? "col-sm-2 bk-filters__option -selected" : "col-sm-2 bk-filters__option" }>
          Getayways
        </a>
        <a href="#articles/treks" onClick={ this.setFilter.bind(null,'treks') } className={ this.state.filterBy == 'treks' ? "col-sm-2 bk-filters__option -selected" : "col-sm-2 bk-filters__option" }>
          Treks
        </a>
        <a href="#articles/things" onClick={ this.setFilter.bind(null,'things') } className={ this.state.filterBy == 'things' ? "col-sm-2 bk-filters__option -selected" : "col-sm-2 bk-filters__option" }>
          Things
        </a>
        <a href="#articles/recipes" onClick={ this.setFilter.bind(null,'recipes') } className={ this.state.filterBy == 'recipes' ? "col-sm-2 bk-filters__option -selected" : "col-sm-2 bk-filters__option" }>
          Recipes
        </a>
      </div>
    )
  }
});