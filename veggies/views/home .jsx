const React = require('react');
const DefaultLayout = require('./layout/Default');

class Home extends React.Component {
  render() {
    return (
      <DefaultLayout title="Home">
        <a href="/users/signup"><button>Signup</button></a>
        <a href="/users/login"><button>Login</button></a>
      </DefaultLayout>
    )
  }
}

module.exports = Home;