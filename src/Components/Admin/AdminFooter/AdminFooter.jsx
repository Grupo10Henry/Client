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
            setFooterInfo(data);
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

    console.log(footerInfo);
    console.log(footerCopy);

    const editHandler = (event) => {
        setFooterInfo({
            ...footerInfo,
            [event.target.name]: event.target.value,
        });
    }

    const HandleEditMode = () => {
        setEditMode(true);
        setFooterCopy(footerInfo);
    }

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
                await instance.put(`companyInfo/${footerInfo[0].companyInfoID}`, footerInfo); // instance.put(`companyInfo/${footerInfo[0].companyInfoID}`, footerInfo) || axios.put(`http://localhost:3001/`companyInfo/${footerInfo[0].companyInfoID}`, footerInfo)
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

    return(
        <div className={style.AdminFooterContainer}>
            {editMode ? (
            <div>
                <div className={style.InfoContactoAdmin}>
                <h2>Información de contacto</h2>
                <div>
                    <label>Dirección</label>
                    <input
                    placeholder={contactData?.[0]?.adress}
                    type="text"
                    name="adress"
                    value={footerInfo.adress}
                    onChange={editHandler}
                    />
                </div>
                <div>
                    <label>Teléfono</label>
                    <input
                    placeholder={contactData?.[0]?.phone}
                    type="text"
                    name="phone"
                    value={footerInfo.phone}
                    onChange={editHandler}
                    />
                </div>
                <div>
                    <label>WhatsApp</label>
                    <input
                    placeholder={contactData?.[0]?.dataPolicy}
                    type="text"
                    name="dataPolicy"
                    value={footerInfo.dataPolicy}
                    onChange={editHandler}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                    placeholder={contactData?.[0]?.email}
                    type="email"
                    name="email"
                    value={footerInfo.email}
                    onChange={editHandler}
                    />
                </div>
                <div>
                    <label>Horario de atención</label>
                    <input
                    placeholder={contactData?.[0]?.businessHours}
                    type="text"
                    name="businessHours"
                    value={footerInfo.businessHours}
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
    )
}

export default AdminFooter;