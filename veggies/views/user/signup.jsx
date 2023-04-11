const React = require('react')
const DefaultLayout = require('../layout/Default');

classs signup extends React.Component{
    render() {
        return(
            <defaultLayout title="Sign Up">
                 <form action="/user/signup" method="POST">
                <fieldset>
                <legend>New User</legend>
                <label htmlfor = "username">USERNAME: </label>
                <input type="text" name="username" required /> 
                <br/>
                <label>PASSWORD: </label>
                <input type="password" name="password" required />
                
                <input type="submit" value="Create Account" />
                </fieldset>
            </form>
            </div>

        )
    }
}
module.exports = Signup;


<div>
  <form action="/user/signup" method="post">
    <fieldset>
      <legend>New User</legend>
      <label>USERNAME: <input type="text" name="username" required /> </label>
      <label
        >PASSWORD: <input type="password" name="password" required />
      </label>
      <input type="submit" value="Create Account" />
    </fieldset>
  </form>
</div>