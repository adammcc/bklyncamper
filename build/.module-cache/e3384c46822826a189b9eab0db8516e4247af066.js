var BodyContent = React.createClass({displayName: "BodyContent",
  getInitialState: function () {
    return {
      pics: []
    };
  },
  showPage: function (pics) {
    this.setState({
      pics: pics
    });
  },
  render: function () {
    var infoColumn1 = [
      { src: "../images/upstate_bug.JPG",
        alt: "bug",
        title: "The Finger Lakes, NY",
        note: "Home of the $5 wine tasting, stunning beauty, and understated locals.",
        pics: [
          ["../images/upstate_bug.JPG", "Admire a vintage VW as your sip on vintages at Atwater Vineyards along Seneca Lake. Don’t miss the Rieslings at the nearby <a href='http://rednewt.com/ww4/' target='_blank'>Red Newt</a> or the superb Viennese grub at <a href='http://www.danosonseneca.com/' target='_blank'>Dano’s Heuriger</a> in Lodi."],
          ["../images/skaneateles.JPG", "<a href='https://en.wikipedia.org/wiki/Skaneateles_Lake' target='_blank'>Skaneateles Lake</a> is one of the cleanest in the country. Rent a boat at the <a href='http://www.skanmarina.com/' target='_blank'>Marina</a>."],
          ["../images/ithaca.JPG", "Kids let loose on the big lawn at <a href='http://ithacabeer.com/' target='_blank'>Ithaca Beer</a> Company, home of world-class brews, casual grub, and free brewery tours."],
          ["../images/boat_dock.JPG", "Boats docked at Watkins Glen at the foot of Seneca Lake."],
          ["../images/stone_path.JPG", "Walk through the gorge at the magical <a href='http://nysparks.com/parks/142/details.aspx' target='_blank'>Watkins Glen State Park</a>."],
          ["../images/picnic.JPG", "Take in the view and try to resist concocting plans to quit your job, buy a little house and become a <a href='http://flcc.edu/academics/viticulture/' target='_blank'>vintner</a>. "],
          ["../images/upstate_lake.JPG", "Enough said."]
        ]
      },
      { src: "../images/scotland/scotch_gate.JPG",
        alt: "gate",
        title: "Nyack, NY",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank.",
        pics: [
          ["../images/old_man_store.JPG", "How about this!!!!"],
          ["../images/scotland/scotch_whiskey.JPG", "This works too!!"],
          ["../images/boats.JPG", "This works too!!"]
        ]
      },
      { src: "../images/bk_red_door.JPG",
        alt: "bk_red_door",
        title: "The Finger Lakes, NY",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank.",
        pics: [
          ["../images/upstate_lake.JPG", "This works!!"],
          ["../images/ithaca.JPG", "This works too!!"]
        ]
      },
      { src: "../images/ithaca.JPG",
        alt: "ithaca",
        title: "The Finger Lakes, NY",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank.",
        pics: [
          ["../images/upstate_lake.JPG", "This works!!"],
          ["../images/ithaca.JPG", "This works too!!"]
        ]
      }
    ]

    var infoColumn2 = [
      { src: "../images/scotland/scotch_old_man_store.JPG",
        alt: "old_man_store",
        title: "Scotland!",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank.",
        pics: [
          ["../images/scotland/scotch_st_andrews.jpg", "T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl."],,
          ["../images/scotland/scotch_whiskey.jpg", "Whiskey!"],
          ["../images/scotland/scotch_old_man_store.JPG", "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami."],
          ["../images/scotland/scotch_gate.JPG", "Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank."],
          ["../images/scotland/schotch_green_hills.jpg", "T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl."],
          ["../images/scotland/schotch_stone_wall.jpg", "T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl."],
          ["../images/scotland/scotch_boats.jpg", "T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl."],
          ["../images/scotland/scotch_island.jpg", "T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl."],
          ["../images/scotland/scotch_loch_lomand_2.jpg", "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami."],
          ["../images/scotland/scotch_loch_lomaon.jpg", "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami."],
          ["../images/scotland/scotch_rainbow.jpg", "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami."],
          ["../images/scotland/scotch_sheep.jpg", "T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl."],
          ["../images/scotland/scotch_stone_street.jpg", "T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl."],
          ["../images/scotland/scotch_whisky_2.jpg", "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami."],
          ["../images/scotland/scotch_lomond_hills.jpg", "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami."]
        ]
      },
      { src: "../images/upstate_truck.JPG",
        alt: "upstate_truck",
        title: "The Finger Lakes, NY",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank.",
        pics: [
          ["../images/upstate_lake.JPG", "This works!!"],
          ["../images/ithaca.JPG", "This works too!!"]
        ]
      },
      { src: "../images/scotland/scotch_whiskey.jpg",
        alt: "whiskey2",
        title: "The Finger Lakes, NY",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank.",
        pics: [
          ["../images/upstate_lake.JPG", "This works!!"],
          ["../images/ithaca.JPG", "This works too!!"]
        ]
      },
      { src: "../images/upstate_house.JPG",
        alt: "upstate_house",
        title: "The Finger Lakes, NY",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank.",
        pics: [
          ["../images/upstate_lake.JPG", "This works!!"],
          ["../images/ithaca.JPG", "This works too!!"]
        ]
      }
    ]

    var infoColumn3 = [
      { src: "../images/scotland/scotch_whiskey.jpg",
        alt: "whiskey",
        title: "Hudson, NY",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank.",
        pics: [
          ["../images/upstate_lake.JPG", "This works!!"],
          ["../images/ithaca.JPG", "This works too!!"]
        ]
      },
      { src: "../images/barn.JPG",
        alt: "barn",
        title: "The Finger Lakes, NY",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank.",
        pics: [
          ["../images/upstate_lake.JPG", "This works!!"],
          ["../images/ithaca.JPG", "This works too!!"]
        ]
      },
      { src: "../images/upstate_scene.JPG",
        alt: "upstate_scene",
        title: "The Finger Lakes, NY",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank.",
        pics: [
          ["../images/upstate_lake.JPG", "This works!!"],
          ["../images/ithaca.JPG", "This works too!!"]
        ]
      },
      { src: "../images/upstate_tree.JPG",
        alt: "upstate_tree",
        title: "The Finger Lakes, NY",
        note: "Tri-tip pig meatball, alcatra cupim picanha jowl tenderloin tail rump turkey landjaeger pork belly pastrami. T-bone hamburger chuck, salami tongue short loin turkey biltong cow meatball tenderloin ball tip doner alcatra jowl. Leberkas porchetta ball tip, biltong chicken turducken venison corned beef. Drumstick tail meatloaf turkey pancetta shank.",
        pics: [
          ["../images/upstate_lake.JPG", "This works!!"],
          ["../images/ithaca.JPG", "This works too!!"]
        ]
      }
    ]

    return (
      React.createElement("div", null,
        React.createElement("div", {className: "bk-header row"},
          React.createElement("h1", {className:  this.state.pics.length  ? "bk-header__title bk-header__title--link" : "bk-header__title", onClick: this.showPage.bind(null, [])}, "Brooklyn Camper")
        ),

        ( this.state.pics.length ?
          React.createElement(BkShow, {showPage: this.showPage, pics: this.state.pics})
        :[
          React.createElement(BkColumn, {infos: infoColumn1, showPage: this.showPage}),
          React.createElement(BkColumn, {infos: infoColumn2, showPage: this.showPage}),
          React.createElement(BkColumn, {infos: infoColumn3, showPage: this.showPage})
        ])

      )
    );
  }
});