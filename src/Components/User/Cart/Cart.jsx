/* Juli >>>>>>>> */

import logo from "../../../assets/logo_mi_butaca_color.svg";
import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import {instance} from "../../../axios/config"





const Cart = () => {
    
    const location = useLocation();
  const { state } = location;
  const { 
    userID,
    eventID,
    eventName,
    eventImage,
    seatID,
    sector,
    price,
    seatsData,
    } = state ?? {};

    const { seatCount, seats } = seatsData ?? {};

    console.log("seatsData in Cart", seatsData)

    const [cart, setCart] = useState({
        seats: seatsData?.seats || [],
    });
    const [total, setTotal] = useState(0);
    const [totalEntradas, setTotalEntradas] = useState(0);
    

    
    const deleteItem = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
        recalculateTotal();
    };

    

    const updateItem = (id, newQuantity) => {

        setCart((prevCart) =>
            prevCart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
        );
        recalculateTotal();
    };

    const recalculateTotal = () => {
        const newTotal = cart.reduce((prev, item) => {
            return prev + item.price * item.quantity;
        }, 0);
        setTotal(newTotal);

        const newTotalEntradas = cart.reduce((prev, item) => {
            return prev + item.quantity;
        }, 0);
        setTotalEntradas(newTotalEntradas);
    };
    
    
   /*
    const handleQuantityChange = (id, change) => {
        const updatedQuantity = cart.find((item) => item.id === id).quantity + change;
        if (updatedQuantity >= 0) {
            updateItem(id, updatedQuantity);
        }
    };

    const getTotal = () => {
        const total = cart.reduce((prev, item) => {
            return prev + item.price * item.quantity;
        }, 0);
        setTotal(total);
        const totalEntradas = cart.reduce((prev, item) => {
            return prev + item.quantity;
        }, 0);
        setTotalEntradas(totalEntradas);
    };

    const getTotalEntradas = () => {
        const totalEntradas = cart.reduce((prev, item) => {
            return prev + item.quantity;
        }, 0);
        setTotalEntradas(totalEntradas);
    };
    */

    const handleCheckout = () => {
        //esperar que la pasarela de pagos este lista
    }

    return (
        <>
            <div className="fixed inset-0 z-1000 flex items-center justify-center backdrop-filter backdrop-blur-lg">
                {/* Este div se utilizará para el fondo desenfocado */}
            </div>
            <div style={{ marginTop: '5rem' }} className="fixed inset-0 z-1001 flex flex-col items-center justify-center md:mt-10 lg:mt-20">
                {/* Contenedor principal del formulario */}
                <div className="sm:mx-auto sm:w-full sm:max-w-sm p-6 space-y-0 bg-white rounded-lg shadow-lg">
                    <img className="mx-auto h-8 w-auto" src={logo} alt="Mi Butaca" />
                    <h1 className="text-2xl text-teal-600 text-center">Finaliza tu compra</h1>
                    <div className="flex flex-col">
                        {cart.seats.map((item) => (
                            <div key={item.seatID}>
                                <img src={eventImage} alt={eventName} className="w-10" />
                                <h1 className="text-xl text-gray-900">{eventName}
                                <p className="text-gray-500">{item.sector} </p>
                                <p className="text-gray-500">{item.seatLocation} </p>
                                <h2 className="text-lg font-bold text-fuchsia-500">${item.price}</h2></h1>
                                <p className="text-gray-500">Cantidad: {item.seatCount}</p>
                                
                                <button onClick={() => deleteItem(item.id)} className="bg-fuchsia-200 text-white rounded-full">
                                    ❌
                                </button>
                                <h1 className="text-lg font-bold text-fuchsia-500 text-center">Total: ${total}</h1>
                                <h1 className="text-lg text-gray-900 text-center">Total entradas: {item.seatCount} </h1>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-center">
                    <a href="/" className="font-bold text-purple-600 hover:text-teal-600 ">
                        Seguir comprando
                    </a>
                    <button className="w-32 bg-teal-600 text-white hover:bg-fuchsia-600">Pagar</button>
                    </div>
                </div>
            </div>
        </>
    );
    
};

export default Cart;