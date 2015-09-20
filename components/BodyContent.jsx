var BodyContent = React.createClass({
  render: function () {
    return (
      <div>
        <div className="bk-header row">
          <h1 className="bk-header__title">Brooklyn Camper</h1>
        </div>

        <div className="col-sm-4">
          <BkBox src="images/upstate_bug.JPG" alt="bug">
            Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa...
          </BkBox>

          <BkBox src="images/gate.JPG" alt="gate">
            Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa...
          </BkBox>

          <BkBox src="images/bk_red_door.JPG" alt="bk_red_door">
            Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa...
          </BkBox>

          <BkBox src="images/ithaca.JPG" alt="ithaca">
            Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa...
          </BkBox>
        </div>

        <div className="col-sm-4">
          <BkBox src="images/upstate_lake.JPG" alt="upstate_lake">
            Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa...
          </BkBox>

          <BkBox src="images/upstate_truck.JPG" alt="upstate_truck">
            Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa...
          </BkBox>

          <BkBox src="images/old_man_store.JPG" alt="old_man_store">
            Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa...
          </BkBox>

          <BkBox src="images/upstate_house.JPG" alt="upstate_house">
            Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa...
          </BkBox>
        </div>

        <div className="col-sm-4">
          <BkBox src="images/whiskey.jpg" alt="whiskey">
            Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa...
          </BkBox>

          <BkBox src="images/barn.JPG" alt="barn">
            Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa...
          </BkBox>

          <BkBox src="images/upstate_scene.JPG" alt="upstate_scene">
            Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa...
          </BkBox>

          <BkBox src="images/upstate_tree.JPG" alt="upstate_tree">
            Bacon ipsum dolor amet est ullamco bacon, mollit prosciutto swine in strip steak consequat incididunt magna culpa...
          </BkBox>
        </div>
      </div>
    );
  }
});