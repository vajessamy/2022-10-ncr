
import {useState, useEffect} from "react";
import "./App.css";
// WE IMPORT OUR COMPONENTS
import BookDisplay from "./components/BookDisplay";
import Form from "./components/Form";
// import { Route, Routes } from "react-router-dom";
import Preview from "./components/Preview"

export default function App() {
  //variable with your apiKey
  const apiKey = "AIzaSyAJCOBvHEGe-l1O_pnzCP59lcLsz5V9FS4";

  //State to hold movie data
  const [book, setBook] = useState(null);

  //Function to getBook
  const getBook = async (title, author) => {
    // make fetch request and store response
    const response = await fetch(
      // `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${apiKey}`
      `https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}&key=${apiKey}`
    );
    // Parse JSON response into a javascript object
    const bookResults = await response.json();
    console.log(bookResults)
    //set the Book state to the Book
   
  setBook(bookResults)
  // { <>
  //       <br/>
  //                 <p>Total Items {book.totalItems} </p> 
  //                 </>  }

  // MessageBox.show("Delete?", "Sure you want to delete   this?", MessageBox.Buttons.OkCancel);
  //     console.log(book)
  }
 
 
  // We pass the getBook function as a prop called moviesearch
  return (
    <div className="App">
      <Form booksearch={getBook} />
      
      <BookDisplay book={book} />
      <Preview book={book}/> 
    </div>
  );
}