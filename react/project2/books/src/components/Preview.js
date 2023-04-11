import React from 'react';
// import {Page, Text, Image, Document, StyleSheet} from '@react-pdf/renderer';
import {Document, Page} from 'react-pdf'

export default function Preview (book) {
    return(
        book?.items?.map((result) => {
            // console.log(result)
                  return<div key = {result?.id}>
                    <Document file ={result.volumeInfo.previewlink}>
                        console.log(result.volumeInfo.previewlink)
                         <Page pagenumber ={1}/>
                     </Document>
                  </div>
                })
    )
}
