import React, { useContext } from "react";
import {ThemeContext} from "../contexts/ThemeContext"


function BookList() {
    const {isLightTheme, light, dark} = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark;
    return (
        <div className='book-list' style={{color: theme.syntax, background: theme.bg}}>
        <ul>
            <li style={{background: theme.ui}}>Harry Potter</li>
            <li style={{background: theme.ui}}>Lord of the Rings</li>
            <li style={{background: theme.ui}}>Magic Treehouse</li>
        </ul>
        </div>
      );
}
 
export default BookList;

 

