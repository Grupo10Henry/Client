// Luissssss
import axios from 'axios';
import styles from './AdminEventsCreate.module.css';
import { useEffect, useState } from 'react';
import { instance } from '../../../axios/config';
import { categories } from '../../../utils/categories';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents } from '../../../redux/eventsSlice';

export default function AdminEventsCreate() {

    const dispatch = useDispatch();
    const {allEvents} = useSelector((s) => s.events)

    const getEvents = async () => {
        try {
          const { data } = await instance.get("/event") // http://localhost:3001/event
          console.log(data)
          return data
        } catch (error) {
          console.log(error)
        }
    };
    
        useEffect(() => {
          getEvents().then((data) => (dispatch(getAllEvents(data))))
        }, []
    );

    // console.log(allEvents)

    let iframeRegex = /<iframe[^>]+src="([^"]+)"/;

    const types = [
        "Grande",
        "Pequeño",
    ];

    const [input, setInput] = useState({
        name: "",
        description: "",
        category: "",
        capacity: "",
        date: "",
        time: "",
        locationName: "",
        adressLocation: "",
        mapLocation: "",
        image: "",
        bannerImage: "",
        planImage: "",
        priceMin: 0,
        priceMax: 0,
        isDonation: "",
        type: "",
    });

    const [section, setSection] = useState({
        eventID: "",
        rows: "",
        columns: "",
        sector: "",
        price: "",
        sectionSeats: "",
        // ticketType: "",
        // discountCode: "",
    });

    console.log(input);
    console.log(section);

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    };

    function handleChangeSection(e){
        setSection({
            ...section,
            [e.target.name]: e.target.value,
        })
    };

function handleChangeSection(e){
        setSection({
            ...section,
            [e.target.name]: e.target.value,
        })
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.name || !input.description || !input.category || !input.isDonation || !input.capacity || !input.date || !input.time || !input.locationName ||
            !input.adressLocation || !input.mapLocation || !input.image || !input.bannerImage || !input.planImage || !input.type) {
                alert('Por favor completa todos los campos para crear el evento')
            } else {
                // Código para extraer la URL de source del código de GoogleMaps
                let match = input.mapLocation.match(iframeRegex);
                setInput({...input, mapLocation: match[1]})

                let newEvent = {
                    name: input.name,
                    description: input.description,
                    category: input.category,
                    capacity: input.capacity,
                    date: input.date,
                    time: input.time,
                    locationName: input.locationName,
                    adressLocation: input.adressLocation,
                    mapLocation: match[1],
                    image: input.image,
                    bannerImage: input.bannerImage,
                    planImage: input.planImage,
                    views: 0,
                    priceMin: input.priceMin,
                    priceMax: input.priceMax,
                    isDonation: input.isDonation,
                    type: input.type,
                };

                try {
                    // const post = await axios.post('http://localhost:3001/event/', input)
                    const post = await instance.post('/event/', newEvent)
                    alert("Evento creado exitosamente")
                } catch (error) {
                    alert(error.response.data.error)
                }

        // Borrar campos de input
    }
    };

    return (
        // <div>
            <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <p className={styles.formTitle}>Completa la información para crear un evento</p>
                    <div className={styles.formFields}>
                    <div className={styles.formRows}>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Nombre del evento</label>
                    <input className={styles.formInputText}
                    type="text"
                    name='name'
                    value={input.name}
                    onChange={handleChange} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Descripción</label>
                    <textarea className={styles.formInputTextArea}
                    name='description'
                    value={input.description}
                    onChange={handleChange} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Categoría</label>
                    <select className={styles.formInputText}
                    name='category'
                    value={input.category}
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
                    value={input.isDonation}
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
                    value={input.locationName}
                    onChange={handleChange} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Dirección de la ubicación</label>
                    <input className={styles.formInputText}
                    type="text"
                    name='adressLocation'
                    value={input.adressLocation}
                    onChange={handleChange} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Fecha del evento</label>
                    <input className={styles.formInputText}
                    type="date"
                    name='date'
                    // Poner límite inferior igual a fecha de hoy
                    value={input.date}
                    onChange={handleChange} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Hora del evento</label>
                    <input className={styles.formInputText}
                    type="time"
                    name='time'
                    value={input.time}
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
                    value={input.capacity}
                    onChange={handleChange} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Precio mínimo</label>
                    {input.isDonation === "false" ? (<input className={styles.formInputText}
                    type="number"
                    min="0"
                    name='priceMin'
                    value={input.priceMin}
                    onChange={handleChange} />) : (<input className={styles.formInputText} type="number" name='priceMin' value='0' readOnly onChange={handleChange} />)}
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Precio máximo</label>
                    {input.isDonation === "false" ? (<input className={styles.formInputText}
                    type="number"
                    min="0"
                    name='priceMax'
                    value={input.priceMax}
                    onChange={handleChange} />) : (<input className={styles.formInputText} type="number" name='priceMax' value='0' readOnly onChange={handleChange}/>)}
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Ubicación en mapa {'('}Obtén link <a href="https://maps-generator.com/" target="_blank" rel="noopener noreferrer">aquí</a>{')'} </label>
                    <input className={styles.formInputText}
                    type='text'
                    name='mapLocation'
                    value={input.mapLocation}
                    onChange={handleChange} />
                    </div>
                    </div>
                    <div className={styles.formRows}>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Imagen del evento</label>
                    <input className={styles.formInputText}
                    type='url'
                    name='image'
                    value={input.image}
                    onChange={handleChange} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Imagen banner del evento</label>
                    <input className={styles.formInputText}
                    type='url'
                    name='bannerImage'
                    value={input.bannerImage}
                    onChange={handleChange} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Imagen del plano del evento</label>
                    <input className={styles.formInputText}
                    type='url'
                    name='planImage'
                    value={input.planImage}
                    onChange={handleChange} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Tipo de evento</label>
                    <select className={styles.formInputText}
                    name='type'
                    value={input.type}
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
                    type="submit"
                    >Crear evento</button>
                </form>
                {/* Form de secciones */}

                <form className={styles.sectionForm}>
                    <p className={styles.sectionFormTitle}>Creador de secciones</p>
                    <p className={styles.formLabel}>Para crear una nueva sección, completa los campos y haz clic en "Añadir sección"</p>
                    <div className={styles.formFields}>
                    <div className={styles.formRows}>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Selecciona un evento</label>
                    <select className={styles.formInputText}
                    name='eventID'
                    value={section.eventID}
                    onChange={handleChangeSection} >
                      <option value="">-- Seleccionar --</option>
                    {allEvents.map((event) => (
                      <option key={event.eventID} value={event.eventID}>
                            {event.name}
                        </option>
                    ))}
                    </select>
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Nombre de la sección</label>
                    <input className={styles.formInputText}
                    type="text"
                    name='sector'
                    value={section.sector}
                    onChange={handleChangeSection} />
                    </div>
                    </div>
                    <div className={styles.formRows}>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Tipo de sección</label>
                    <input className={styles.formInputText}
                    type="text"
                    name='ticketType'
                    value={section.ticketType}
                    onChange={handleChangeSection} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Código de descuento</label>
                    <input className={styles.formInputText}
                    type="text"
                    name='discountCode'
                    value={section.discountCode}
                    onChange={handleChangeSection} />
                    </div>
                    </div>
                    <div className={styles.formRows}>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Precio por entrada</label>
                    <input className={styles.formInputText}
                    type="number"
                    min="0"
                    name='price'
                    value={section.price}
                    onChange={handleChangeSection} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Cantidad de asientos</label>
                    <input className={styles.formInputText}
                    type="number"
                    min="0"
                    name='sectionSeats'
                    value={section.sectionSeats}
                    onChange={handleChangeSection} />
                    </div>
                    </div>
                    <div className={styles.formRows}>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Cantidad de filas</label>
                    {input.type === 'Grande' ? <input className={styles.formInputText} type="number" name='rows' value='0' readOnly /> : <input className={styles.formInputText}
                    type="number"
                    min="0"
                    name='rows'
                    value={section.rows}
                    onChange={handleChangeSection} />}
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Cantidad de columnas</label>
                    {input.type === 'Grande' ? <input className={styles.formInputText} type="number" name='columns' value='0' readOnly /> : <input className={styles.formInputText}
                    type="number"
                    min="0"
                    name='columns'
                    value={section.sectionColumns}
                    onChange={handleChangeSection} />}
                    </div>
                    </div>
                    </div>
                    <button className={styles.sectionButton}>Añadir sección</button>
                </form>
            </div>
        // </div>
    )
}