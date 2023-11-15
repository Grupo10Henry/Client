import React, { useEffect } from "react";
import logo from "../../../assets/logo_mi_butaca_color.svg";
import { useSelector, useDispatch } from "react-redux";
import { setOrderData } from "../../../redux/carritoSlice";
import { Link, useLocation } from "react-router-dom";
import styles from "./mercadopago.module.css";
import { useState } from "react";
import {instance} from "../../../axios/config"

const MercadoPagoExitoso = () => {
  const userName = useSelector((state) => state.user.userInfo.name);
  const userID = useSelector((state) => state.user.userInfo.userID);
  const eventID = useSelector((state) => state.eventID.id);
  const isDonation = useSelector((state) => state.event.isDonation);
  const storedOrderData = useSelector((state) => state.carrito.orderData);

  console.log("orderData en MercadoPagoExitoso", storedOrderData);

  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const paymentNum = searchParams.get("payment_id");

  console.log("paymentNum en MercadoPagoExitoso", paymentNum);
  
  useEffect(() => {
    
    if (storedOrderData) {
      
      const orderIDFromState = location.state && location.state.orderID;
      const eventNameFromState = location.state && location.state.eventName;

      if (orderIDFromState && eventNameFromState.seatID) {
        console.log("seatID en MercadoPagoExitoso", storedOrderData.seatID)
        const seatId = storedOrderData.seatID;
        const orderData = {
          eventName: eventNameFromState,
          total: storedOrderData.price,
          seatID: storedOrderData.seatID,
          description: storedOrderData.description,
        };
        dispatch(setOrderData(orderData));
      }

      const handleCheckoutPaystub = async () => {

        try {

          const responsePaystub = await instance.post(
            "/paystub",
            {
              userID, // está
              eventID, // está
              tickets: storedOrderData.price, //está
              paymentNum, // nes de mp
              isDonation, //está
            });

            if (responsePaystub.data) {
              const paystubID = responsePaystub.data.paystubID;
              const seatsID = storedOrderData.seatID;
              seatsID.map(async (seatID) => {
                 await instance.put(`/seat/${seatID}`, {
                   paystubID: paystubID,
                  });
                });
              }
            } catch (error) {
              console.error("error en handleCheckoutPaystub", error);
            }
      };
      handleCheckoutPaystub();
    }

  }, [dispatch, location.state, storedOrderData, userID, eventID, paymentNum, isDonation]);

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
