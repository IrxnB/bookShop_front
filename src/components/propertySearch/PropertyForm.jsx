import React, { useState } from 'react';

const mockAllBooks = [{id: 3, name: 'hary potter 3'}, {id: 4, name: 'hary potter 4'}]

const PropertyForm = ({ propertyTypes, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (property, value) => {
    setFormData(prevData => ({ ...prevData, [property]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    
    try {
      onSubmit(formData); // Передаем полученные данные родительскому компоненту
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
    }
  };

  return (
    <div>
      <h2>Заполните свойства:</h2>
      <form onSubmit={handleSubmit}>
        {propertyTypes?.map(property => (
          <div key={property.id}>
            <label>{property.name}:</label>
            <input type={property.dataType} onChange={e => handleChange(property, e.target.value)} />
          </div>
        ))}
        <button type="submit">Найти</button>
      </form>
    </div>
  );
};

export default PropertyForm;