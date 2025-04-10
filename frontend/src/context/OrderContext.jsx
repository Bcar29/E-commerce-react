
import axios from 'axios';

import { useEffect, useState } from 'react';
import { createContext } from 'react';

export const OrderContext = createContext();

export function OrderProvider({ children }) {
    const url = "http://127.0.0.1:8000/commandes/";
    const [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(resp => {
                setOrders(resp.data)
            })
    }, [])

    return (
        <OrderContext.Provider value={{ orders }}>
            {children}
        </OrderContext.Provider>
    );
}