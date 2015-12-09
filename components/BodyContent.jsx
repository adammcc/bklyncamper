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
  render: function () {
    var infoArray = []
    for (var key in info) { infoArray.push([key, info[key]]) }
    var infos = this.split(infoArray, 3)
    return (
      <div>
        <a href="#">
          <BkMainHeader />
        </a>

        <BkFilters/>

        <BkRow articles={['finger_lakes', 'mohonk', 'hudson_winter_walk']} />
        <BkRow articles={['new_haven', 'hoot', 'bear_mountain']} />
        <BkRow articles={['hudson_winter_walk', 'nyack', 'newport']} />
        <BkRow articles={['newport', 'storm_king', 'scotland']} />
        <BkRow articles={['marthas_vineyard', 'saugerties', 'storm_king']} />
      </div>
    );
  }
});