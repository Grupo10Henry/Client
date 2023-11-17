// Luissssss
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { instance } from "../../../axios/config"
import { getAllUsers } from "../../../redux/userSlice"
import styles from "./AdminUsers.module.css"
import BlockBtn from "./BlockBtn"
import UnblockBtn from "./UnblockBtn"
import axios from "axios"

export default function AdminUsers() {
  const dispatch = useDispatch()
  const { allUsers } = useSelector((s) => s.user)

  const Users = [
    {
      isAdmin: false,
      name: "Luis",
      lastName: "Carrillo",
      email: "lccarrillo247@gmail.com",
      phone: "1234567",
      password: "Luchito123",
      identityCard: "1234567",
      dob: "10-12-1989",
    },
    {
      isAdmin: false,
      name: "Luis",
      lastName: "Carrillo",
      email: "lccarrillo247@gmail.com",
      phone: "1234567",
      password: "Luchito123",
      identityCard: "1234567",
      dob: "10-12-1989",
    },
    {
      isAdmin: false,
      name: "Luis",
      lastName: "Carrillo",
      email: "lccarrillo247@gmail.com",
      phone: "1234567",
      password: "Luchito123",
      identityCard: "1234567",
      dob: "10-12-1989",
    },
    {
      isAdmin: false,
      name: "Luis",
      lastName: "Carrillo",
      email: "lccarrillo247@gmail.com",
      phone: "1234567",
      password: "Luchito123",
      identityCard: "1234567",
      dob: "10-12-1989",
    },
  ]

  const getAllUsersData = async () => {
    try {
      // const { data } = await instance.get(`/user/`)
      // instance.get(`/user/`) || axios.get(`http://localhost:3001/user/`)
      const { data } = await axios.get(`http://localhost:3001/user/`)
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllUsersData().then((data) => {
      dispatch(getAllUsers(data))
    })
  }, [])

  const handleSetAdminUser = async (userID) => {
    try {
      await instance.put(`user/isAdmin/${userID}?isAdmin=true`) // instance.put(`user/isAdmin/${userID}?isAdmin=true`) || axios.put(`http://localhost:3001/user/isAdmin/${userID}?isAdmin=true`)
      getAllUsersData().then((data) => {
        dispatch(getAllUsers(data))
      })
      alert("Se ha asignado correctamente al usuario como administrador")
    } catch (error) {
      alert(error.response.data.error)
    }
  }

  const handleRemoveAdminUser = async (userID) => {
    try {
      await instance.put(`user/isAdmin/${userID}?isAdmin=false`) // instance.put(`user/isAdmin/${userID}?isAdmin=false`) || axios.put(`http://localhost:3001/user/isAdmin/${userID}?isAdmin=false`)
      getAllUsersData().then((data) => {
        dispatch(getAllUsers(data))
      })
      alert(
        "Se ha removido correctamente el acceso de administrador al usuario"
      )
    } catch (error) {
      alert(error.response.data.error)
    }
  }

  return (
    <div className={styles.usersTableContainer}>
      <h1 className={styles.usersTableTitle}>
        Asignar/desasignar Admins y bloquear/desbloquear usuarios
      </h1>
      <table className={styles.usersTable}>
        <thead className={styles.usersTableHead}>
          <tr>
            <th className={styles.usersTableHeadContent}>ID</th>
            <th className={styles.usersTableHeadContent}>Nombre</th>
            <th className={styles.usersTableHeadContent}>Apellido</th>
            <th className={styles.usersTableHeadContent}>Email</th>
            <th className={styles.usersTableHeadContent}>Teléfono</th>
            <th className={styles.usersTableHeadContent}>Documento</th>
            <th className={styles.usersTableHeadContent}>
              Fecha de nacimiento
            </th>
            <th className={styles.usersTableHeadContent}>Admin</th>
            <th className={styles.usersTableHeadContent}>Acceso</th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.map((user) => (
            <tr className={styles.userTableRows} key={user.userID}>
              <td className={styles.userTableRowsContent}>{user.userID}</td>
              <td className={styles.userTableRowsContent}>{user.name}</td>
              <td className={styles.userTableRowsContent}>{user.lastName}</td>
              <td className={styles.userTableRowsContent}>{user.email}</td>
              <td className={styles.userTableRowsContent}>{user.phone}</td>
              <td className={styles.userTableRowsContent}>
                {user.identityCard}
              </td>
              <td className={styles.userTableRowsContent}>{user.dob}</td>
              {user.isAdmin === false ? (
                <td className={styles.userTableRowsContent}>
                  <button
                    className={styles.utablebutton}
                    onClick={() => handleSetAdminUser(user.userID)}
                  >
                    Hacer Admin
                  </button>
                </td>
              ) : (
                <td className={styles.userTableRowsContent}>
                  <button
                    className={styles.utablebuttonN}
                    onClick={() => handleRemoveAdminUser(user.userID)}
                  >
                    Quitar Admin
                  </button>
                </td>
              )}
              {user.isBlocked === false ? (
                <td className={styles.userTableRowsContent}>
                  <BlockBtn
                    userID={user.userID}
                    email={user.email}
                    getAllUsersData={getAllUsersData}
                  />
                </td>
              ) : (
                <td className={styles.userTableRowsContent}>
                  <UnblockBtn
                    userID={user.userID}
                    getAllUsersData={getAllUsersData}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
