/* Juli >>>>>>>> */

import logo from "../../../assets/logo_mi_butaca_color.svg";
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'



const Cart = () => {
    const { id } = useParams();
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalEntradas, setTotalEntradas] = useState(0);

    useEffect(() => {
    // Datos ficticios de eventos
    const eventosFicticios = [
        { id: 1, title: 'Evento 1', price: 25000, quantity: 3 },
        { id: 2, title: 'Evento 2', price: 30000, quantity: 2 },
        { id: 3, title: 'Evento 3', price: 50000, quantity: 1 },
    ];
        // Agrega los eventos ficticios al carrito
        setCart(eventosFicticios);
    }, []);


    /*useEffect(() => {
        // Agrega el "id" a la URL
        const getCart = async () => {
            const res = await axios.get(`http://localhost:5173/api/cart/${id}`);
            setCart(res.data);
        };
        getCart();
    }, [id]);*/

    const deleteItem = async (id) => {
        await axios.delete(`http://localhost:5173/api/cart/${id}`);
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    /*const updateItem = async (id, newQuantity) => {
        await axios.put(`http://localhost:5173/api/cart/${id}`, { quantity: newQuantity });
        setCart((prevCart) =>
            prevCart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
        );
    };*/

    const updateItem = (id, newQuantity) => {
        const updatedCart = cart.map((item) => {
            if (item.id === id) {
                item.quantity = newQuantity;
            }
            return item;
        });
        setCart(updatedCart);
        getTotal();
    };
    
    const handleQuantityChange = (id, newQuantity) => {
        const updatedQuantity = cart.find((item) => item.id === id).quantity + newQuantity;
        if (updatedQuantity >= 0) {
            updateItem(id, updatedQuantity);
        }
    };

    const getTotal = () => {
        const total = cart.reduce((prev, item) => {
            return prev + item.price * item.quantity;
        }, 0);
        setTotal(total);
    };

    const getTotalEntradas = () => {
        const totalEntradas = cart.reduce((prev, item) => {
            return prev + item.quantity;
        }, 0);
        setTotalEntradas(totalEntradas);
    };

    return (
        <>
      <div className="fixed inset-0 z-1000 flex items-center justify-center backdrop-filter backdrop-blur-lg">
      {/* Este div se utilizará para el fondo desenfocado */}
        </div>
        <div style={{ marginTop: '5rem' }} className="fixed inset-0 z-1001 flex flex-col items-center justify-center">
      {/* Contenedor principal del formulario */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm p-6 space-y-0 bg-white rounded-lg shadow-lg">
                <img className="mx-auto h-8 w-auto" src={logo} alt="Mi Butaca" />
            <h1 className="text-2xl text-gray-900">Carrito de compras</h1>
            <div>
                {cart.map((item) => (
                    <div key={item.id}>
                        <h1 className="text-xl text-gray-900">{item.title}</h1>
                        <h1 className="text-lg text-gray-700">${item.price}</h1>
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateItem(item.id, parseInt(e.target.value))}
                            onKeyUp={(e) => {
                                if (e.key === "ArrowUp"){
                                    handleQuantityChange(item.id, 1);
                                } else if (e.key === "ArrowDown"){
                                    handleQuantityChange(item.id, -1);
                                }
                            }}
                            min="0"
                            />
                        <button onClick={() => deleteItem(item.id)} className="bg-red-500 text-white">
                            ❌
                        </button>
                       
                    </div>
                )
                )}
                <h1 className="text-lg text-gray-900">Total: ${total}</h1>
                <h1 className="text-lg text-gray-900">Total entradas: {totalEntradas}</h1>
                <a href="/">
                Seguir comprando
                </a> 
                
                <button className="bg-blue-500 text-white">Pagar</button>
            </div>
        </div>
        </div>
        </>
    );
};

export default Cart;