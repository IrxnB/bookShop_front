import './App.css';
import { useState } from 'react';
import { useDelayedResponse } from './hooks/useDelayedResponse';
import PropertyForm from './components/propertySearch/PropertyForm';
import BookShortInfoGrid  from './components/BookShortInfoGrid';

const mockedProperties =  [{id: 1, name: 'author', type: 'text'}, {id: 1, name: 'year', type: 'number'}];
const mockAllBooks = [{id: 1, name: 'hary potter 1'}, {id: 2, name: 'hary potter 2'}, {id: 3, name: 'hary potter 3'}, {id: 4, name: 'hary potter 4'}]
function App() {
  const {loading: loadingProps, data: propertiesData } = useDelayedResponse(mockedProperties);
  const {loading: loadingBooks, data: booksData} = useDelayedResponse(mockAllBooks);


  const handlePropertySubmit = (books) => {
      return;
  }

  return (
    <div className="App">
      <PropertyForm propertyTypes={propertiesData} onSubmit={handlePropertySubmit}></PropertyForm>
      <BookShortInfoGrid books={booksData}></BookShortInfoGrid>
      
    </div>
    
  );
}

export default App;
