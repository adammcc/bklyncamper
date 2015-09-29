var BkShow = React.createClass({displayName: "BkShow",
  getInitialState: function () {
    return {
      activePic: this.props.pics[0]
    };
  },
  componentDidMount: function() {
    this.textToHtml()
  },
  componentDidUpdate: function() {
    this.textToHtml()
  },
  textToHtml: function () {
    var html = $('.js-show__image-blurb').text()
    $html =$($.parseHTML(html))
    $('.js-show__image-blurb').html($html)
  },
  setActivePic: function (pic) {
    this.setState({
      activePic: pic
    });
  },
  render: function () {
    var showPage = this.props.showPage
    var setActivePic = this.setActivePic
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "bk-show__main-image col-sm-8"}, React.createElement("img", {src:  this.state.activePic[0], alt: "bug", width: "100%", height: "90%"})), 
        React.createElement("div", {className: "col-sm-4"}, 
          React.createElement("div", {className: "row"}, 
            React.createElement("div", {className: "bk-show__go-home", onClick: showPage.bind(null, [])}, React.createElement("i", {className: "fa fa-angle-left"}), " Main"), 
            React.createElement("div", {className: "bk-show__image-blurb js-show__image-blurb"},   this.state.activePic[1] )
          ), 

          React.createElement("div", {className: "row"}, 
             this.props.pics.map(function (data) {
              return (
                React.createElement("div", {className: "bk-show__small-image", onClick:  setActivePic.bind(null, data) }, React.createElement("img", {src: data[0], alt: data[1], height: "110px", width: "110px"}))
              );
            })
          )
        )
      )
    );
  }
})