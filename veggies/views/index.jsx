const React = require('react');
const DefaultLayout = require('./layout/Default');

class Index extends React.Component {
  render() {
    const veggies = this.props.veggies
    return (
      <DefaultLayout title="Veggies Index Page">
        <nav><a href="/veggies/new">Create a New Veggie!</a></nav>
        <ul>
          {veggies.map((veggie, i) => {
            return (
              <li key={i}>
                The{' '}
                <a href={`/veggies/${veggie._id}`}>
                  {veggie.name}
                </a>
                {' '}is {veggie.color} <br/>
                and {veggie.readyToEat ?
                  'It is ready to eat!' :
                  'It is not ready to eat!'}
                <form action={`/veggies/${veggie._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE" />
                </form>
                <a href={`/veggies/${veggie._id}/edit`}>EDIT THIS VEGGIE</a>
              </li>
            )
          })}
        </ul>
      </DefaultLayout>
    )
  }
}
module.exports = Index