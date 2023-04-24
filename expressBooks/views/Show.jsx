const React = require ('react');
const DefaultLayout = require('./layoutDefault');

class Show extends React.Component {
    render() {
        const book = this.props.book
        return(
            <DefaultLayout title ={book.tile}>
                <p>
                    The {book.title} author {book.author} and {book.booksaved ? 'Book is in libary!' : 'book is not in libary'}
                </p>
            </DefaultLayout>
        )
    }
}
module.exports = Show;