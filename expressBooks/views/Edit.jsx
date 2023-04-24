const React = require('react');
const DefaultLayout = require('./layout/default');

class Edit extends React.Component{
    render() {
        const book = this.props.book
        return(
            <form action = {'/books/${book._id}?_method=PUT'} method = 'Post'>
                <label htmlFor = "title"> Title:</label>
                <input type="text" title="title" defaultValue = {book.title}/>
                <br />
                <label htmlFor="author"> Author:</label>
                <input type="text" author="author" defaultValue = {book.author}/>
                <br />
                <label htmlFor="year"> Year Published:</label>
                <input type="text" author="Year" defaultValue = {book.author}/>
                <br />
                <label htmlFor="description"> Description:</label>
                <input type="text" description="description" defaultValue = {book.description}/>
                <br />
                <label htmlFor="Number"> Number:</label>
                <input type="text" ibcnumber="ibcnumber" defaultValue = {book.number}/>
                <br />
                <input type="submit" name= "" value ="Add to libary"/>
            </form>
        )
    }
}
module.exports = Edit