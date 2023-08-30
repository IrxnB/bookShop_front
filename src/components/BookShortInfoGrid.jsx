import React from 'react';

const BookShortInfoGrid = ({books}) => {
    
    return (
    <div>
        <h2>Книги:</h2>
        {books?.map(book => (
        <div key={book.id}>
            <label>{book.name}</label> 
        </div>))}
    </div>
    );
    
}
export default BookShortInfoGrid;