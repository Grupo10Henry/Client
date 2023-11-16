// Luiiiis...
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { instance } from '../../../axios/config';
import { useEffect, useState } from 'react';
import { categories } from '../../../utils/categories';
import axios from 'axios';
import { BsFillTrashFill } from 'react-icons/bs'
import styles from './AdminEventsDetail.module.css'

export default function AdminEventsDetail () {

    let iframeRegex = /<iframe[^>]+src="([^"]+)"/;

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
    const currentDay = String(currentDate.getDate()).padStart(2, '0');
    const minDate = `${currentYear}-${currentMonth}-${currentDay}`;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();
    
    const [updatedEvent, setUpdatedEvent] = useState({
        name: "",
        description: "",
        category: "",
        capacity: "",
        date: "",
        time: "",
        locationName: "",
        adressLocation: "",
        mapLocation: "",
        // image: "",
        // bannerImage: "",
        // planImage: "",
        priceMin: 0,
        priceMax: 0,
        isDonation: "",
        type: "",
        eventID: "",
        views: "",
    });

    const [sections, setSections] = useState();
    const [newSection, setNewSection] = useState({
        eventID: params.id,
        rows: "",
        columns: "",
        sector: "",
        price: "",
    });

    const [image, setImage] =useState();
    const [imageURL, setImageURL] =useState();

    const [bannerImage, setBannerImage] =useState();
    const [bannerImageURL, setBannerImageURL] =useState();

    const [planImage, setPlanImage] =useState();
    const [planImageURL, setPlanImageURL] =useState();

    const types = [
        "Grande",
        "Pequeño",
    ];


    const getEvent = async () => {
        try {
            const {data} = await instance.get(`event/${params.id}`)
            // console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    };

    const getSections = async () => {
        try {
            const {data} = await instance.get(`/seat/admin/${params.id}`) // axios.get(`http://localhost:3001/seat/admin/${params.id}`) || instance.get(`/seat/admin/${params.id}`)
            // console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getEvent().then((data) => {
            setUpdatedEvent(data)
        })
        getSections().then((data) => {
            setSections(data)
        })
    }, []
    );

    const handleChange = (e) => {
        setUpdatedEvent({
            ...updatedEvent,
            [e.target.name]: e.target.value,
        })
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
      };

    const handleBannerImageChange = (e) => {
        const file = e.target.files[0];
        setBannerImage(file);
      };

    const handlePlanImageChange = (e) => {
        const file = e.target.files[0];
        setPlanImage(file);
      };

    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'mibutaca');
    
        const response = await axios.post(
            'https://api.cloudinary.com/v1_1/dwbvvo9u2/image/upload',
            formData
        );
    
        if (response.status === 200) {
            return response.data.secure_url;
        } else {
            return null; // Indicate that the upload failed
        }
    };

    const handleSubmit = async () => {
        if (!updatedEvent.name || !updatedEvent.description || !updatedEvent.category || updatedEvent.isDonation === "" || !updatedEvent.capacity || !updatedEvent.date || !updatedEvent.time || !updatedEvent.locationName ||
            !updatedEvent.adressLocation || !updatedEvent.mapLocation || !updatedEvent.type) {
                alert('Por favor completa todos los campos para editar el evento');
                return;
            }
        try {
            
            let ubicacion = "";
            let imageURL = "";
            let bannerImageURL = "";
            let planImageURL = "";
            
            if (updatedEvent.mapLocation.substring(0,1) === "<") {
                let match = updatedEvent.mapLocation.match(iframeRegex);
                ubicacion = match[1]
            } else {
                ubicacion = updatedEvent.mapLocation
            }

            if (!image) {
                imageURL = updatedEvent.image
            } else {
                imageURL = await uploadImage(image)
            }

            if (!bannerImage) {
                bannerImageURL = updatedEvent.bannerImage
            } else {
                bannerImageURL = await uploadImage(bannerImage)
            }

            if (!planImage) {
                planImageURL = updatedEvent.planImage
            } else {
                planImageURL = await uploadImage(planImage)
            }
            
    let newEvent = {
        name: updatedEvent.name,
        description: updatedEvent.description,
        category: updatedEvent.category,
        capacity: updatedEvent.capacity,
        date: updatedEvent.date,
        time: updatedEvent.time,
        locationName: updatedEvent.locationName,
        adressLocation: updatedEvent.adressLocation,
        mapLocation: ubicacion,
        image: imageURL,
        bannerImage: bannerImageURL,
        planImage: planImageURL,
        views: updatedEvent.views,
        priceMin: updatedEvent.priceMin,
        priceMax: updatedEvent.priceMax,
        isDonation: updatedEvent.isDonation,
        type: updatedEvent.type,
    };
    
    try {
        await instance.put(`/event/${updatedEvent.eventID}`, newEvent)
        getEvent().then((data) => {
            setUpdatedEvent(data)
        });
        alert('Se ha editado el evento exitosamente')
    } catch (error) {
        alert(error.response.data.error);
    }
} catch (error) {
    alert(error);
}
    };

    const handleDeleteSection = async (section) => {
        try {
            await instance.delete(`/seat/${params.id}/${section}`) // instance.delete(`/seat/${params.id}/${section}`) || axios.delete(`http://localhost:3001/seat/${params.id}/${section}`)
            getSections().then((data) => {
                setSections(data)
            })
            alert('Se ha eliminado exitosamente la sección')
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    function handleChangeNewSection(e){
        setNewSection({
            ...newSection,
            [e.target.name]: e.target.value,
        })
    };

    const handlePostSections = async () => {
        if(newSection.sector === "" || newSection.price === "" || newSection.rows === "" || newSection.columns === "") {
            alert('Por favor añade todos los campos para crear una nueva sección')
        } else {
        try {
            await instance.post('/seat/', newSection) // instance.post('/seat/', newSection) || axios.post('http://localhost:3001/seat/', newSection)
            getSections().then((data) => {
                setSections(data)
            });
            setNewSection({
                eventID: params.id,
                rows: "",
                columns: "",
                sector: "",
                price: "",
            });
            alert('Se ha creado exitosamente la sección')
        } catch (error) {
            alert(error.response.data.error)
        }
    }
    };

    console.log(updatedEvent)
    // console.log(image, bannerImage, planImage)
    // console.log(newSection)

    return (
        <div className={styles.editEventContainer}>
            <div className={styles.form}>
                    <p className={styles.formTitle}>Edita el evento creado</p>
                    <div className={styles.formFields}>
                    <div className={styles.formRows}>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Nombre del evento</label>
                    <input className={styles.formInputText}
                    type="text"
                    name='name'
                    value={updatedEvent.name}
                    onChange={handleChange} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Descripción</label>
                    <textarea className={styles.formInputTextArea}
                    name='description'
                    value={updatedEvent.description}
                    onChange={handleChange} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Categoría</label>
                    <select className={styles.formInputText}
                    name='category'
                    value={updatedEvent.category}
                    onChange={handleChange} >
                      <option value="">-- Seleccionar --</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.value}>
                            {cat.value}
                        </option>
                    ))}
                    </select>
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Evento pago</label>
                    <select className={styles.formInputText}
                    name='isDonation'
                    value={updatedEvent.isDonation}
                    onChange={handleChange} >
                        <option value="">-- Seleccionar --</option>
                        <option value={false}>
                            Sí
                        </option>
                        <option value={true}>
                            No
                        </option>
                    </select>
                    </div>
                    </div>
                    <div className={styles.formRows}>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Ubicación del evento</label>
                    <input className={styles.formInputText}
                    type="text"
                    name='locationName'
                    value={updatedEvent.locationName}
                    onChange={handleChange} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Dirección de la ubicación</label>
                    <input className={styles.formInputText}
                    type="text"
                    name='adressLocation'
                    value={updatedEvent.adressLocation}
                    onChange={handleChange} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Fecha del evento</label>
                    <input className={styles.formInputText}
                    type="date"
                    name='date'
                    min={minDate}
                    value={updatedEvent.date}
                    onChange={handleChange} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Hora del evento</label>
                    <input className={styles.formInputText}
                    type="time"
                    name='time'
                    value={updatedEvent.time}
                    onChange={handleChange} />
                    </div>
                    </div>
                    <div className={styles.formRows}>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Aforo máximo del evento</label>
                    <input className={styles.formInputText}
                    type="number"
                    min="0"
                    name='capacity'
                    value={updatedEvent.capacity}
                    onChange={handleChange} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Precio mínimo</label>
                    {updatedEvent.isDonation === "false"  || updatedEvent.isDonation === false ? (<input className={styles.formInputText}
                    type="number"
                    min="0"
                    name='priceMin'
                    value={updatedEvent.priceMin}
                    onChange={handleChange} />) : (<input className={styles.formInputText} type="number" name='priceMin' value='0' readOnly onChange={handleChange} />)}
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Precio máximo</label>
                    {updatedEvent.isDonation === "false" || updatedEvent.isDonation === false ? (<input className={styles.formInputText}
                    type="number"
                    min="0"
                    name='priceMax'
                    value={updatedEvent.priceMax}
                    onChange={handleChange} />) : (<input className={styles.formInputText} type="number" name='priceMax' value='0' readOnly onChange={handleChange}/>)}
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Ubicación en mapa {'('}Obtén link <a className={styles.labelLink} href="https://www.google.com/maps/@6.2477017,-75.5782726,11.79z?entry=ttu" target="_blank" rel="noopener noreferrer">aquí</a>{')'} </label>
                    <input className={styles.formInputText}
                    type='text'
                    name='mapLocation'
                    value={updatedEvent.mapLocation}
                    onChange={handleChange} />
                    </div>
                    </div>
                    <div className={styles.formRows}>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Imagen del evento</label>
                    <input
                    className={styles.formInputText}
                    type='file'
                    name='image'
                    // value={input.image}
                    onChange={handleImageChange} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Imagen banner del evento</label>
                    <input
                    className={styles.formInputText}
                    type='file'
                    name='bannerImage'
                    // value={input.bannerImage}
                    onChange={handleBannerImageChange} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Imagen del plano del evento</label>
                    <input
                    className={styles.formInputText}
                    type='file'
                    name='planImage'
                    // value={input.planImage}
                    onChange={handlePlanImageChange} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Tipo de evento</label>
                    <select className={styles.formInputText}
                    name='type'
                    value={updatedEvent.type}
                    onChange={handleChange} >
                      <option value="">-- Seleccionar --</option>
                    {types.sort().map((cat, idx) => (
                      <option key={idx} value={cat}>
                            {cat}
                        </option>
                    ))}
                    </select>
                    </div>
                    </div>
                    </div>
                    <div className={styles.buttonContainer}>
                    <button onClick={handleSubmit} className={styles.editFaqButton}>Editar evento</button>
                    <button onClick={() => {navigate(`/admin`)}} className={styles.editFaqButtonCancel}>Cancelar</button>
                    <button onClick={() => {navigate(`/admin`)}} className={styles.editFaqButtonReturn}>Regresar</button>
                    </div>
                </div>
                <div className={styles.sectionContainer}>
                <h1 className={styles.sectionTableTitle}>Secciones del evento {'('}Solo para eventos pagos{')'}</h1>
                {sections ? (
                <table className={styles.sectionTable}>
                    <thead className={styles.sectionTableHead}>
                        <tr>
                            <th className={styles.sectionTableHeadContent}>Nombre</th>
                            <th className={styles.sectionTableHeadContent}>Precio</th>
                            <th className={styles.sectionTableHeadContent}>Filas</th>
                            <th className={styles.sectionTableHeadContent}>Columnas</th>
                            <th className={styles.sectionTableHeadContent}>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sections?.map((section, index) => (
                        <tr className={styles.sectionTableRows} key={index}>
                            <td className={styles.sectionTableRowsContent}>{section.sector}</td>
                            <td className={styles.sectionTableRowsContent}>{section.price}</td>
                            <td className={styles.sectionTableRowsContent}>{section.rows}</td>
                            <td className={styles.sectionTableRowsContent}>{section.columns}</td>
                            <td className={styles.sectionTableRowsContent}><BsFillTrashFill className={styles.sectionsDeleteButton} onClick={() => {handleDeleteSection(section.sector)}} /></td>
                        </tr>))}
                    </tbody>
                </table>
                ) : (
                    <h1>El evento no tiene secciones creadas</h1>
                )}
                </div >
                <>
                {updatedEvent.isDonation === true || updatedEvent.isDonation === "true" ? null : (
                <div className={styles.newSectionContainer}>
                    <h1 className={styles.newSectionTitle}>Crea una nueva sección para este evento</h1>
                    <div className={styles.newSectionFields}>
                        <div className={styles.newSectionField}>
                        <label className={styles.newSectionlabel}>Nombre de la sección</label>
                        <input className={styles.newSectionInput}
                        type="text"
                        name="sector"
                        min="0"
                        value={newSection.sector}
                        onChange={handleChangeNewSection}
                        />
                        </div>
                        <div className={styles.newSectionField}>
                        <label className={styles.newSectionlabel}>Precio</label>
                        <input className={styles.newSectionInput}
                        type="number"
                        name="price"
                        min="0"
                        value={newSection.price}
                        onChange={handleChangeNewSection}
                        />
                        </div>
                        <div className={styles.newSectionField}>
                        <label className={styles.newSectionlabel}>Filas</label>
                        <input className={styles.newSectionInput}
                        type="number"
                        name="rows"
                        min="0"
                        value={newSection.rows}
                        onChange={handleChangeNewSection}
                        />
                        </div>
                        <div className={styles.newSectionField}>
                        <label className={styles.newSectionlabel}>Columnas</label>
                        <input className={styles.newSectionInput}
                        type="number"
                        name="columns"
                        value={newSection.columns}
                        onChange={handleChangeNewSection}
                        />
                        </div>
                    </div>
                    <button
                    className={styles.newSectionButton}
                    onClick={handlePostSections}
                    >Crear sección</button>
                </div>
                )}
                </>
        </div>
    )

};