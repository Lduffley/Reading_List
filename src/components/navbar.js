import React, {useContext} from "react";
import { BookContext } from "../contexts/BookContext";



function Navbar () {
    const {books} = useContext(BookContext)
    return (
    <nav className="navbar">
        <h1>Reading List</h1>
        <p>Currently you have {books.length} books to get through</p>
    </nav>
      );
}
 
export default Navbar;
 
