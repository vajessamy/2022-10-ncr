function BookSearch() {
    // return (
    //   <div>
         {/* <h1>Book Search Page</h1> */}
         book?.items?.map((result) => {
          // console.log(result)
          // console.log(result.volumeInfo.previewlink)
                return
                <div key = {result?.id}>
             
                  <table>
                    <tr>
                      <td><img src= {result.volumeInfo.imageLinks.smallThumbnail} alt={result.volumeInfo.title} /></td>
                      <td>
                        <h3>{result?.volumeInfo?.title}</h3>
                        <p>Author: {result?.volumeInfo?.authors} - {result.volumeInfo.publishedDate.substring(0,result.volumeInfo.publishedDate.indexOf('-'))}</p>
                        { <p className='description'>{result?.volumeInfo?.description?.substring(0, result?.volumeInfo?.description.indexOf('. ')+1)}</p> }
                        {/* <p className='description'>{result?.volumeInfo?.description}</p> */}
                        <a href={result?.volumeInfo?.previewLink} target="_blank" rel="noreferrer">Preview</a>
                      </td>
                    </tr>
                  </table> 
                </div>
             })} 
              
  //     </div>
  //   );
  // } 
  
  export default BookSearch;