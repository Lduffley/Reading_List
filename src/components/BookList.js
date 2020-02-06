import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails"


function BookList() {
    const {books} = useContext(BookContext)
    return books.length ? (
        <div className="text-2xl bg-blue-500">
            <ul>
                {books.map(book =>{
                    return (<BookDetails book={book} key={book.id}/>)
                })}
            </ul>
        </div>
      ) : (
          <div className="empty"> No books to read. Hello free time </div>
      )
}
 
export default BookList;

 

