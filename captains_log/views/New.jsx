const React = require('react');

// class New extends React.Component {
//   render() {
const New =(props) => {
      return (
         <div>
            <h1>Captain Log</h1>
            <form action="/logs" method="POST">
                Title: <input type="text" name="title" /><br/>
                Entry: <input type="textarea" name="entry" /><br/>
                Ship is Broken: <input type="checkbox" name="shipIsBroken" /><br/>
                <input type="submit" name="" value="Create Entry"/>
             </form>
        </div>
        );
  }


module.exports = New;