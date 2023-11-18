//Guada
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactData } from "../../../redux/footerSlice";
import { instance } from "../../../axios/config";
import Swal from "sweetalert2";
import style from "./AdminFooter.module.css";

const AdminFooter = () => {

    const dispatch = useDispatch();
    const {contactData} = useSelector((s) => s.footer)

    const getFooterInfo = async () => {
        try {
          const { data } = await instance.get(`/companyInfo/`) // instance.get(`/companyInfo/`) || axios.get(`http://localhost:3001//companyInfo/`)
        //   console.log(data)
          return data
        } catch (error) {
          console.log(error)
        }
    };

        useEffect(() => {
          getFooterInfo().then((data) => {
            dispatch(getContactData(data));
            setFooterInfo(data[0]);
          });
        }, []
    );

    const [editMode, setEditMode] = useState(false);

    const [footerInfo, setFooterInfo] = useState({
        email: '',
        phone: '',
        adress: '',
        businessHours: '',
        dataPolicy: "",
        companyInfoID: "",
    });

    const [footerCopy, setFooterCopy] = useState({
        email: '',
        phone: '',
        adress: '',
        businessHours: '',
        dataPolicy: "",
        companyInfoID: "",
    });

    const [newFooter, setNewFooter] = useState({
        email: 'info@trescreativo.com',
        phone: 'Colombia: (604) 500 5640',
        adress: 'Calle 44 #90a - 43, La América. Medellín - Colombia',
        businessHours: 'Lunes a Viernes, de 9:00 am a 06:00 pm',
        dataPolicy: "Colombia: 302 2360759",
    });

    const editHandler = (event) => {
        setFooterInfo({
            ...footerInfo,
            [event.target.name]: event.target.value,
        });
    };

    const editHandlerNewFooter = (event) => {
        setNewFooter({
            ...newFooter,
            [event.target.name]: event.target.value,
        });
    };

    const HandleEditMode = () => {
        setEditMode(true);
        setFooterCopy(footerInfo);
    };

    const handleCancelChanges = async () => {
            setEditMode(false);
            setFooterInfo(footerCopy);
            setFooterCopy({
                email: '',
                phone: '',
                adress: '',
                businessHours: '',
                dataPolicy: "",
                companyInfoID: "",
            });
        };

        const handleSaveChanges = async () => {
            try {
                await instance.put(`companyInfo/${contactData[0]?.companyInfoID}`, footerInfo); // instance.put(`companyInfo/${footerInfo[0].companyInfoID}`, footerInfo) || axios.put(`http://localhost:3001/`companyInfo/${footerInfo[0].companyInfoID}`, footerInfo)
                getFooterInfo().then((data) => {
                    dispatch(getContactData(data));
                    setFooterInfo(data);
                  });
                // alert('Se ha actualizado correctamente la información');
                Swal.fire({
                    title: 'Se ha actualizado correctamente la información',
                    icon: "success"
                  });
                setEditMode(false);
            } catch (error) {
                alert(error.response.data.error)
            }
        };
    
        const handleCreate = async () => {
        try {
            await instance.post(`companyInfo/`, newFooter); // instance.put(`companyInfo/${footerInfo[0].companyInfoID}`, footerInfo) || axios.put(`http://localhost:3001/`companyInfo/${footerInfo[0].companyInfoID}`, footerInfo)
            getFooterInfo().then((data) => {
                dispatch(getContactData(data));
                setFooterInfo(data);
              });
            // alert('Se ha creado correctamente la información');
            Swal.fire({
                title: 'Se ha creado correctamente la información',
                icon: "success"
              });
        } catch (error) {
            alert(error.response.data.error)
        }
        };

    // console.log(footerInfo);
    // console.log(footerCopy);
    // console.log(newFooter);

    return(
        <>
        {contactData.length ? (
        <div className={style.AdminFooterContainer}>
            {editMode ? (
            <div>
                <div className={style.InfoContactoAdmin}>
                <h2>Información de contacto</h2>
                <div>
                    <label>Dirección</label>
                    <input
                    type="text"
                    name="adress"
                    value={contactData?.[0]?.adress}
                    onChange={editHandler}
                    />
                </div>
                <div>
                    <label>Teléfono</label>
                    <input
                    type="text"
                    name="phone"
                    value={contactData?.[0]?.phone}
                    onChange={editHandler}
                    />
                </div>
                <div>
                    <label>WhatsApp</label>
                    <input
                    type="text"
                    name="dataPolicy"
                    value={contactData?.[0]?.dataPolicy}
                    onChange={editHandler}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                    type="email"
                    name="email"
                    value={contactData?.[0]?.email}
                    onChange={editHandler}
                    />
                </div>
                <div>
                    <label>Horario de atención</label>
                    <input
                    type="text"
                    name="businessHours"
                    value={contactData?.[0]?.businessHours}
                    onChange={editHandler}
                    />
                </div>
                </div>
                {/* <div className={style.infoRedesAdmin}>
                <h2>Redes sociales</h2>
                <label>Link instagram</label>
                <input/>
                <label>Link facebook</label>
                <input/>
                <label>Link Linkedin</label>
                <input/>
                <label>Link whatApp</label>
                <input/>
                </div> */}

                <button onClick={handleSaveChanges}>Guardar</button>
                <button onClick={handleCancelChanges}>Cancelar</button>
            </div>) : (
                            <div>
                            <div className={style.InfoContactoAdmin}>
                            <h2>Información de contacto</h2>
                            <div>
                                <label>Dirección</label>
                                <p>
                                {contactData?.[0]?.adress}
                                </p>
                            </div>
                            <div>
                                <label>Teléfono</label>
                                <p>
                                {contactData?.[0]?.phone}
                                </p>
                            </div>
                            <div>
                                <label>WhatsApp</label>
                                <p>
                                {contactData?.[0]?.dataPolicy}
                                </p>
                            </div>
                            <div>
                                <label>Email</label>
                                <p>
                                {contactData?.[0]?.email}
                                </p>
                            </div>
                            <div>
                                <label>Horario de atención</label>
                                <p>
                                {contactData?.[0]?.businessHours}
                                </p>
                            </div>
                            </div>
                            <button onClick={HandleEditMode}>Editar</button>
                        </div>
            )}
        </div>
        ) : (
            <div className={style.AdminFooterContainer}>
            <div className={style.InfoContactoAdmin}>
            <h2>Crear información de contacto</h2>
            <div>
                <label>Dirección</label>
                <input
                type="text"
                name="adress"
                value={newFooter.adress}
                onChange={editHandlerNewFooter}
                />
            </div>
            <div>
                <label>Teléfono</label>
                <input
                type="text"
                name="phone"
                value={newFooter.phone}
                onChange={editHandlerNewFooter}
                />
            </div>
            <div>
                <label>WhatsApp</label>
                <input
                type="text"
                name="dataPolicy"
                value={newFooter.dataPolicy}
                onChange={editHandlerNewFooter}
                />
            </div>
            <div>
                <label>Email</label>
                <input
                type="email"
                name="email"
                value={newFooter.email}
                onChange={editHandlerNewFooter}
                />
            </div>
            <div>
                <label>Horario de atención</label>
                <input
                type="text"
                name="businessHours"
                value={newFooter.businessHours}
                onChange={editHandlerNewFooter}
                />
            </div>
            </div>
            {/* <div className={style.infoRedesAdmin}>
            <h2>Redes sociales</h2>
            <label>Link instagram</label>
            <input/>
            <label>Link facebook</label>
            <input/>
            <label>Link Linkedin</label>
            <input/>
            <label>Link whatApp</label>
            <input/>
            </div> */}

            <button onClick={handleCreate}>Crear</button>
        </div>
        )}
        </>
    )
}

export default AdminFooter;