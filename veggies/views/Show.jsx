const React = require('react');
const DefaultLayout = require('./layout/Default');

class Show extends React.Component {
  render() {
    const veggie = this.props.veggie
    return (
      <DefaultLayout title={veggie.name}>
        <p>
          The {veggie.name} is {veggie.color} and {veggie.readyToEat ? 'it is ready to eat!' : 'it is not ready to eat!'}
        </p>
      </DefaultLayout>
    )
  }
}

module.exports = Show;
       