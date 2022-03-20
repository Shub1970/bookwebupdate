import React from 'react'
import {books} from './bookdatajson'
import Book from './book'
const Books=()=>{
   return(
         <>
         <div className="bookcontainer">
         {books.map((book)=>{
            // const {id,image,discription,author}=book;
         return(
            <Book className='griditem'key={book.id} {...book}></Book>
         )
         })}
         </div>
   </>
   )
}
export default Books;