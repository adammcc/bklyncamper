var BodyContent = React.createClass({
  getInitialState: function () {
    return {
      pics: []
    };
  },
  split: function (a, n) {
    var len = a.length,out = [], i = 0;
    while (i < len) {
      var size = Math.ceil((len - i) / n--);
      out.push(a.slice(i, i += size));
    }
    return out;
  },
  getArticles: function () {
    var articleTitles = Object.keys(info)
    if ( this.props.filter == 'everything' ) {
      var num = Math.ceil(articleTitles.length / 3);
      return this.split(articleTitles, num);
    } else {
      var filteredTitles = []
      var filter = this.props.filter
      $.each( articleTitles, function( i, title ) {
        if ( info[title]['filter'] == filter ) {
          filteredTitles.push(title);
        };
      });
      var num = Math.ceil(filteredTitles.length / 3);
      return this.split(filteredTitles, num);
    };
  },
  render: function () {
    var titles_in_threes = this.getArticles()
    var filter = this.props.filter
    return (
      <div>
        <a href="#">
          <BkMainHeader />
        </a>

        <BkFilters filter={filter}/>

        { titles_in_threes.map(function (three_titles) {
          return (
            <BkRow threeTitles={three_titles} />
          );
        })}
      </div>
    );
  }
});