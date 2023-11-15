import React, { useEffect } from "react";
import logo from "../../../assets/logo_mi_butaca_color.svg";
import { useSelector, useDispatch } from "react-redux";
import { setOrderData, selectOrderData } from "../../../redux/carritoSlice";
import { Link, useLocation } from "react-router-dom";
import styles from "./mercadopago.module.css";
import { useState } from "react";
import axios from "axios";


const MercadoPagoExitoso = () => {

    
    const userName = useSelector((state) => state.user.userInfo.name);
    const userID = useSelector((state) => state.user.userInfo.userID);
    const eventID = useSelector((state) => state.eventID.id);
    const isDonation = useSelector((state) => state.event.isDonation);
    
    const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const paymentId = searchParams.get("payment_id");


  const storedOrderData = useSelector(selectOrderData);
  //const { orderID, eventName, total, seatID, description} = storedOrderData || {};

  //localStorage.removeItem("orderData");

  useEffect(() => {
    const orderIDFromState = location.state && location.state.orderID;
    
    const eventNameFromState = location.state && location.state.eventName;
    
    if (orderIDFromState && eventNameFromState) {
const orderData = {
        orderID: orderIDFromState,
        eventName: eventNameFromState,
        total: storedOrderData.total,
        seatID: storedOrderData.seatID,
        description: storedOrderData.description,
};
        dispatch(setOrderData(orderData));
    }

  }, [dispatch, location.state, storedOrderData]);


    useEffect(() => {
        if(storedOrderData) {
            const { 
                orderID, 
                eventName, 
                total, 
                seatID, 
                description
            } = storedOrderData;

  // enviar a Paystub

  const handleCheckoutPaystub = async () => {
    const responsePaystub = await axios.post("http://localhost:3001/paystub", {
      userID,
      eventID,
      total,
      paymentId,
      isDonation,
    });
    console.log(responsePaystub);
  };

  // enviar a Seat

  const handleCheckoutSeats = async () => {
    const responseSeats = await axios.put(
      "http://localhost:3001/seat/:seatID",
      { paystubId }
    );
    console.log(responseSeats);
  };

    handleCheckoutPaystub();
    handleCheckoutSeats();
}
  }, [storedOrderData, userID, eventID, paymentId, isDonation]);

  return (
    <div className={styles.Page}>
      <div className={styles.ContainerGral}>
        <img className={styles.logo} src={logo} alt="Mi Butaca" />
        <h1>
          Muchas Gracias por tu compra
          <span className={styles.Name}> {userName}</span> !{" "}
        </h1>
        <h3>
          Ya puedes ver, descargar e imprimir tus entradas desde la sección{" "}
        </h3>
        <h3>
          <span className={styles.Micuenta}>
            {" "}
            <Link to="/micuenta/:id"> Mi Cuenta </Link>{" "}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default MercadoPagoExitoso;
