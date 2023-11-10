// Luiiiis...
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { instance } from '../../../axios/config';
import { useEffect, useState } from 'react';
import { categories } from '../../../utils/categories';
import styles from './AdminEventsDetail.module.css'

export default function AdminEventsDetail () {

    let iframeRegex = /<iframe[^>]+src="([^"]+)"/;

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
    const currentDay = String(currentDate.getDate()).padStart(2, '0');
    const minDate = `${currentYear}-${currentMonth}-${currentDay}`;

    const dispatch = useDispatch();
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
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getEvent().then((data) => {
            setUpdatedEvent(data)
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
                    {updatedEvent.isDonation === "false" ? (<input className={styles.formInputText}
                    type="number"
                    min="0"
                    name='priceMin'
                    value={updatedEvent.priceMin}
                    onChange={handleChange} />) : (<input className={styles.formInputText} type="number" name='priceMin' value='0' readOnly onChange={handleChange} />)}
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Precio máximo</label>
                    {updatedEvent.isDonation === "false" ? (<input className={styles.formInputText}
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

                    <button className={styles.formButton}
                    >Editar evento</button>
                    <button className={styles.formButton}
                    >Cancelar</button>
                    <button className={styles.formButton}
                    >Regresar</button>
                </div>
        </div>
    )

};