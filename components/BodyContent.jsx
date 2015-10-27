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

        <BkRowEightFour articles={['finger_lakes', 'mohonk']} />
        <BkRowFourFourFour articles={['new_haven', 'hoot', 'bear_mountain']} />
        <BkRowFourEight articles={['hudson_winter_walk', 'nyack']} />
        <BkRowFourFourFour articles={['storm_king', 'scotland', 'new_port']} />
        <BkRowFourFourFour articles={['marthas_vineyard', 'saugerties', 'storm_king']} />

      </div>
    );
  }
});