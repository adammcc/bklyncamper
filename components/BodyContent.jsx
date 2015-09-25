var BodyContent = React.createClass({
  getInitialState: function () {
    return {
      showSlider: false
    };
  },
  showHideSlider: function () {
    this.setState({ showSlider: !this.state.showSlider });
  },
  render: function () {
    var infoColumn1 = [
      { src: "images/upstate_bug.JPG",
        alt: "bug",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank."
      },
      { src: "images/gate.JPG",
        alt: "gate",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank."
      },
      { src: "images/bk_red_door.JPG",
        alt: "bk_red_door",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank."
      },
      { src: "images/ithaca.JPG",
        alt: "ithaca",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank."
      }
    ]

    var infoColumn2 = [
      { src: "images/upstate_lake.JPG",
        alt: "upstate_lake",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank."
      },
      { src: "images/upstate_truck.JPG",
        alt: "upstate_truck",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank."
      },
      { src: "images/old_man_store.JPG",
        alt: "old_man_store",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank."
      },
      { src: "images/upstate_house.JPG",
        alt: "upstate_house",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank."
      }
    ]

    var infoColumn3 = [
      { src: "images/whiskey.jpg",
        alt: "whiskey",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank."
      },
      { src: "images/barn.JPG",
        alt: "barn",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank."
      },
      { src: "images/upstate_scene.JPG",
        alt: "upstate_scene",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank."
      },
      { src: "images/upstate_tree.JPG",
        alt: "upstate_tree",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank."
      }
    ]

    return (
      <div>
        <div className="bk-header row">
          <h1 className="bk-header__title">Brooklyn Camper</h1>
        </div>

        {( this.state.showSlider ?
          <BkShow showHideSlider={this.showHideSlider}/>
        :[
          <BkColumn infos={infoColumn1} showHideSlider={this.showHideSlider}/>,
          <BkColumn infos={infoColumn2} showHideSlider={this.showHideSlider}/>,
          <BkColumn infos={infoColumn3} showHideSlider={this.showHideSlider}/>
        ])}

      </div>
    );
  }
});