var BodyContent = React.createClass({
  render: function () {
    var infoColumn1 = [
      { src: "images/upstate_bug.JPG",
        alt: "bug",
        note: "Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa..."
      },
      { src: "images/gate.JPG",
        alt: "gate",
        note: "Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa..."
      },
      { src: "images/bk_red_door.JPG",
        alt: "bk_red_door",
        note: "Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa..."
      },
      { src: "images/ithaca.JPG",
        alt: "ithaca",
        note: "Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa..."
      }
    ]

    var infoColumn2 = [
      { src: "images/upstate_lake.JPG",
        alt: "upstate_lake",
        note: "Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa..."
      },
      { src: "images/upstate_truck.JPG",
        alt: "upstate_truck",
        note: "Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa..."
      },
      { src: "images/old_man_store.JPG",
        alt: "old_man_store",
        note: "Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa..."
      },
      { src: "images/upstate_house.JPG",
        alt: "upstate_house",
        note: "Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa..."
      }
    ]

    var infoColumn3 = [
      { src: "images/whiskey.jpg",
        alt: "whiskey",
        note: "Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa..."
      },
      { src: "images/barn.JPG",
        alt: "barn",
        note: "Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa..."
      },
      { src: "images/upstate_scene.JPG",
        alt: "upstate_scene",
        note: "Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa..."
      },
      { src: "images/upstate_tree.JPG",
        alt: "upstate_tree",
        note: "Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa..."
      }
    ]

    return (
      <div>
        <div className="bk-header row">
          <h1 className="bk-header__title">Brooklyn Camper</h1>
        </div>

        <BkColumn infos={infoColumn1} />
        <BkColumn infos={infoColumn2} />
        <BkColumn infos={infoColumn3} />
      </div>
    );
  }
});