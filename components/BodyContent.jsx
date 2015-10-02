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
        <BkMainHeader />

        { infos.map(function (info) {
          return (
            <BkColumn infos={info} />
          );
        })}

      </div>
    );
  }
});