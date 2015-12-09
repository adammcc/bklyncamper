var BkFilters = React.createClass({
  getInitialState() {
    return {
      filterBy: 'all'
    };
  },
  render: function () {
    return (
      <div className="bk-filters__row row">
        <div className="col-sm-2 col-sm-offset-1 bk-filters__option -selected">Everything</div>
        <div className="col-sm-2 bk-filters__option">Getayways</div>
        <div className="col-sm-2 bk-filters__option">Excursions</div>
        <div className="col-sm-2 bk-filters__option">Things</div>
        <div className="col-sm-2 bk-filters__option">Recipes</div>
      </div>
    )
  }
});