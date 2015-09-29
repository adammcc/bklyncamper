var BkColumn = React.createClass({displayName: "BkColumn",
  render: function () {
    var showPage = this.props.showPage
    return (
      React.createElement("div", {className: "col-sm-4"}, 
         this.props.infos.map(function (data) {
          return (
            React.createElement(BkBox, {src:  data.src, alt:  data.alt, key:  data.alt, showPage:  showPage, title: data.title, pics:  data.pics}, 
               data.note
            )
          );
        })
      )
    );
  }
});