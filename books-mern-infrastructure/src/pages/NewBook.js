function NewBook() {
    return (
      <div>
         <form action ="/books" method = 'POST'>
                    <label htmlFor = "title"> Title:</label>
                    <input type = "text" title = "title" />
                    {/* <br/> */}
                    <label htmlFor = "author"> Author:</label>
                    <input type = "text" author = "author"/>
                    {/* <br/> */}
                    <label htmlFor = "year"> Year Published:</label>
                    <input type = "text" author = "Year"/>
                    {/* <br/> */}
                    <label htmlFor = "description"> Description:</label>
                    <input type = "text" description = "description"/>
                    {/* <br/> */}
                    <label htmlFor = "Number"> Number:</label>
                    <input type = "text" isbn = "isbn"></input>
                    {/* <br/> */}
                </form>
      </div>
    );
  } 
  
  export default NewBook;