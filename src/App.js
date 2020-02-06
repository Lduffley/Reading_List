import React from 'react';
import NavBar from './components/navbar';
import BookList from './components/BookList';
import BookContextProvider from './contexts/BookContext'
import NewBookForm from "./components/BookForm"


function App() {
  return (
    <div className="App">
      
          <BookContextProvider>
            <NavBar/>
            <BookList/>
            <NewBookForm/>
          </BookContextProvider>
    </div>
  );
}

export default App;
