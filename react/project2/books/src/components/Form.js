import {useState, useEffect} from "react";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function Form (props) {
  //State to hold the data of our form
  const [formData, setFormData] = useState({
    title:"",
    author: "",
  });

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to booksearch prop, which is apps getbook function
    props.booksearch(formData.title, formData.author);
    console.log(formData)
  };

  //The component must return some JSX
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={formData.title}
          placeholder='BOOK TITLE'
        />
        <input
          type="text"
          name="author"
          onChange={handleChange}
          value={formData.author}
          placeholder="AUTHOR"
        />
        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};