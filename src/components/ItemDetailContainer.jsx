import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
  
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`api/items/${id}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error('Error fetching item details:', error);
      }
    };

    fetchItemDetails();
  }, [id]);

  if (!item) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Detalles del ítem</h2>
      <p>ID: {item.id}</p>
      <p>Nombre: {item.name}</p>
      <p>Descripción: {item.description}</p>
    </div>
  );
};

export default ItemDetailContainer;
