const React = require('react');
const DefaultLayout = require('./layout/Default');

class Edit extends React.Component {
  render() {
    const veggie = this.props.veggie
    return (
      <form action={`/veggies/${veggie._id}?_method=PUT`} method="POST">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" defaultValue={veggie.name} />
        <br />
        <label htmlFor="color">Color:</label>
        <input type="text" name="color" defaultValue={veggie.color} />
        <br />
        <label htmlFor="readyToEat">Is Ready To Eat:</label>
        {
          veggie.readyToEat ?
          <input type="checkbox" name="readyToEat" defaultChecked/> :
          <input type="checkbox" name="readyToEat" />
        }
        <br />
        <input type="submit" name="" value="Submit Changes!" />
      </form>
    )
  }
}

module.exports = Edit;