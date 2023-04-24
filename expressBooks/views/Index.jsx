const React = require('react');
const DefaultLayout = require('./layout/Default');

class Index extends React.Component {
    render() {
        const books = this.props.books
        return(
        <DefaultLayout title = 'Books Index Page'>
            <nav><a href="/books/new">Add book to your library</a></nav>
            <ul>
                {books.map((book, i) => {
                    return(
                        <li key ={i}>
                            the {' '}
                            <a href = {'/books/${book._id}'}>{book.title}</a>
                            {' ' }author {book.author}<br/>
                            and {book.savebook ? "Book is saved!": 'Book is not saved!'}
                            <form action = {'/books/${book._id}?_method=DELETE'} method='POST'>
                                <input type = "submit" value = "DELETE"/>
                            </form>
                            <a href ={'/books/${book._id}/edit'}>Edit this book</a>
                        </li>
                    )
                })}
            </ul>
        </DefaultLayout>
        )
    }
}
module.export = Index;