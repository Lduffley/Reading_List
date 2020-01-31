import React, { Component } from "react";
import {ThemeContext} from "../contexts/ThemeContext"

class BookList extends Component {
    static contextType = ThemeContext;
    render() { 
        const {isLightTheme, light, dark} = this.context
        const theme = isLightTheme ? light : dark;
        return (
            <div className='book-list' style={{color: theme.syntax, background: theme.ui}}>
            <ul>
                <li style={{background: theme.ui}}>the way of kings</li>
                <li style={{background: theme.ui}}>Lord of the Rings</li>
                <li style={{background: theme.ui}}>the way of kings</li>
            </ul>
            </div>
          );
    }
}
 
export default BookList;