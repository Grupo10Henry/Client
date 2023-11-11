/* Juli >>>>>>>> */

import logo from "../../../assets/logo_mi_butaca_color.svg";
import React, { useState, useEffect } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import {instance} from "../../../axios/config"
import { useSelector } from "react-redux";






const Cart = () => {
    
    const location = useLocation();
    const { state } = location;
    const userName = useSelector((state) => state.user.userInfo.name);
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
    const [total, setTotal] = useState(0);
    const [totalEntradas, setTotalEntradas] = useState(0);

    const navigate = useNavigate();
    
    
    useEffect(() => {
      const newTotal = seatsData?.seats.reduce((prev, seat) => {
        return prev + seat.totalPrice;
        }, 0) ?? 0;
        setTotal(newTotal);
        setTotalEntradas(seatCount ?? 0);
    }, [seatsData]);

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
    
    const deleteItem = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
        recalculateTotal();
    };*/

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
          <h1 className="text-2xl text-teal-600 text-center">Finaliza tu compra {userName} </h1>
          <div className="flex flex-col">
            {/* Mostrar datos del evento una sola vez */}
            <div className="flex items-center">
  <img src={eventImage} alt={eventName} className="w-10 mt-5" />
  <h1 className="text-xl text-gray-900 mb-2 ml-2 font-bold">{eventName}</h1>
</div>


            {/* Mostrar información del sector, etc., si aplica */}
            {seats.map((item) => (
              <div key={item.seatID}>
                <p className="text-gray-500">▪{" "}{item.sector}{" | "} {item.seatLocation}{" | "}</p>
                <h2 className="text-lg font-bold text-fuchsia-500">${item.price.toLocaleString("es-ES") }</h2>
                <button 
                className="text-xs text-teal-600"
                  onClick={() => {
                    if (window.confirm("¿Estás seguro de que quieres abonadonar el carrito y perder la selección actual?")) {
                      navigate.goBack();
                    }
                  }}
                >
                  modificar asiento
                </button>
              </div>
            ))}
            <h1 className="text-lg font-bold text-fuchsia-500 text-center">Total: ${total.toLocaleString("es-ES")}</h1>
            <h1 className="text-lg text-gray-900 text-center">Total entradas: {totalEntradas}</h1>
          </div>
          <div className="flex flex-col items-center">
          <button 
                className="font-bold text-purple-600 hover:text-teal-600"
                  onClick={() => {
                    if (window.confirm("¿Estás seguro de Cancelar la selección actual?")) {
                      navigate ("/");
                    }
                  }}
                >
                  Cancelar
                </button>
            <button className="w-32 bg-teal-600 text-white hover:bg-fuchsia-600" onClick={handleCheckout}>
              Pagar
            </button>
          </div>
        </div>
      </div>
    </>
  );
    
};

export default Cart;