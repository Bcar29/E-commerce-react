
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function ListProduct() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/commerce/list')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    return (
        <>
            <h1>Liste des produits</h1>
            <ul>
                {items.map(item => (
                    <li key={item.pk}>{item.name} - {item.price} - {item.description}</li>
                ))}
            </ul>
        </>

    )

}
