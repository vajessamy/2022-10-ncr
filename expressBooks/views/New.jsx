const React = require ('react');
const DefaultLayout = require('./layoutDefault');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title = "New Book">
                <form action ="/books" method = 'POST'>
                    <label htmlFor = "title"> Title:</label>
                    <input type = "text" title = "title" />
                    <br/>
                    <label htmlFor = "author"> Author:</label>
                    <input type = "text" author = "author"/>
                    <br/>
                    <label htmlFor = "year"> Year Published:</label>
                    <input type = "text" author = "Year"/>
                    <br/>
                    <label htmlFor = "description"> Description:</label>
                    <input type = "text" description = "description"/>
                    <br/>
                    <label htmlFor = "Number"> Number:</label>
                    <input type = "text" ibcnumber = "ibcnumber"></input>
                    <br/>
                </form>
            </DefaultLayout>
        )
        }
    }
    module.exports = New;