import {Document, Page} from 'react-pdf'
import { Link } from 'react-router-dom';
import Pagination from "../Pagination";

let PageSize = 10;

export default function  BookDisplay ({book}) {

// // pagination code
// const [currentPage, setCurrentPage] = useState(1);

// const currentTableData = useMemo(() => {
//   const firstPageIndex = (currentPage - 1) * PageSize;
//   const lastPageIndex = firstPageIndex + PageSize;
//   return data.slice(firstPageIndex, lastPageIndex);
// }, [currentPage]);

return(
       <div>
             
        {/* {<> 
        <br/>
                  <p>Total Items {book.totalItems} </p> 
                  </> */

          
        book?.items?.map((result) => {
          // console.log(result)
          // console.log(result.volumeInfo.previewlink)
                return<div key = {result?.id}>
             
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
              {/* <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={book.totalItems}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
              /> */}

      </div>
    )
};