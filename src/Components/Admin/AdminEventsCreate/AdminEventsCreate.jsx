// Luissssss
import axios from 'axios';
import styles from './AdminEventsCreate.module.css';
import { useEffect, useState } from 'react';
import { instance } from '../../../axios/config';
import { categories } from '../../../utils/categories';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents } from '../../../redux/eventsSlice';
import Swal from 'sweetalert2';

export default function AdminEventsCreate() {

    const dispatch = useDispatch();
    const {allEvents} = useSelector((s) => s.events)

    const getEvents = async () => {
        try {
          const { data } = await instance.get("/event") // http://localhost:3001/event
        //   console.log(data)
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

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
    const currentDay = String(currentDate.getDate()).padStart(2, '0');
    const minDate = `${currentYear}-${currentMonth}-${currentDay}`;

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
        // image: "",
        // bannerImage: "",
        // planImage: "",
        priceMin: 0,
        priceMax: 0,
        isDonation: "",
        type: "",
    });

    const [image, setImage] =useState();
    const [imageURL, setImageURL] =useState();

    const [bannerImage, setBannerImage] =useState();
    const [bannerImageURL, setBannerImageURL] =useState();

    const [planImage, setPlanImage] =useState();
    const [planImageURL, setPlanImageURL] =useState();

    const [section, setSection] = useState({
        eventID: "",
        rows: "",
        columns: "",
        sector: "",
        price: "",
        // sectionSeats: "",
        // ticketType: "",
        // discountCode: "",
    });

    const [sections, setSections] =useState([]);

    console.log(input);
    console.log(section);
    console.log(sections);
    console.log(image, bannerImage, planImage)

    function handleChange(e){
        setInput({
            ...input,
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

    function handleChangeSection(e){
        setSection({
            ...section,
            [e.target.name]: e.target.value,
        })
    };

    function handleSubmitCreateSection(e){
        e.preventDefault();
        const repetido = sections.some((existingSection) => existingSection.sector.toLowerCase() === section.sector.toLowerCase())
        if (repetido) {
        // alert('Ya existe una sección con ese nombre para este evento. Por favor escoge un nombre diferente para crear la sección')
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ya existe una sección con ese nombre para este evento. Por favor escoge un nombre diferente para crear la sección',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        } else {
        setSections([...sections, section]);
        }
    };

    function deleteLastSection (){
        if(sections.length === 0) {
            alert('Actualmente no hay secciones creadas')
            return;
        }

        const updatedSections = sections.slice(0, -1);
        setSections(updatedSections);
    };

    const handlePostSections = async () => {
        if(sections.length) {
        try {
            const postSection = sections.map( async (section) => {
            await instance.post('/seat/', section) // instance.post('/seat/', section) || axios.post('http://localhost:3001/seat/', section)
            setSections([]);
        })
            alert('Se han añadido las secciones al evento')
        } catch (error) {
            alert(error.response.data.error)
        }
    } else {
        alert('Por favor añade secciones antes de crearlas')
    }
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.name || !input.description || !input.category || !input.isDonation || !input.capacity || !input.date || !input.time || !input.locationName ||
            !input.adressLocation || !input.mapLocation || !image || !bannerImage || !planImage || !input.type) {
                alert('Por favor completa todos los campos para crear el evento');
                return;
            }

        try {
            
            // Código para extraer la URL de source del código de GoogleMaps
            let match = input.mapLocation.match(iframeRegex);

            // Cargar todas las imágenes y esperar a que estén completas
        const [imageResponse, bannerResponse, planResponse] = await Promise.all([
            uploadImage(image),
            uploadImage(bannerImage),
            uploadImage(planImage)
        ]);

        if (!imageResponse || !bannerResponse || !planResponse) {
            alert('Error al cargar imágenes');
            return;
        }

        const [imageURL, bannerImageURL, planImageURL] = [imageResponse, bannerResponse, planResponse];

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
                    image: imageURL,
                    bannerImage: bannerImageURL,
                    planImage: planImageURL,
                    views: 0,
                    priceMin: input.priceMin,
                    priceMax: input.priceMax,
                    isDonation: input.isDonation,
                    type: input.type,
                };

                try {
                    // const post = await axios.post('http://localhost:3001/event/', input)
                    const post = await instance.post('/event/', newEvent);
                    getEvents().then((data) => (dispatch(getAllEvents(data))));
                    alert("Evento creado exitosamente");
                } catch (error) {
                    alert(error.response.data.error);
                }                
            } catch (error) {
                alert(error.response.data.error);
            }
            // Borrar campos de input
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
                    min={minDate}
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
                    <label className={styles.formLabel}>Ubicación en mapa {'('}Obtén link <a className={styles.labelLink} href="https://www.google.com/maps/@6.2477017,-75.5782726,11.79z?entry=ttu" target="_blank" rel="noopener noreferrer">aquí</a>{')'} </label>
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

                <form className={styles.sectionForm} onSubmit={handleSubmitCreateSection}>
                    <p className={styles.sectionFormTitle}>Creador de secciones</p>
                    <p className={styles.sectionFormSubtitle}>Para crear una nueva sección, completa los campos y haz clic en "Añadir sección"</p>
                    <div className={styles.formFields}>
                    <div className={styles.formRows}>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Selecciona un evento</label>
                    <select className={styles.formInputTextSection}
                    name='eventID'
                    value={section.eventID}
                    onChange={handleChangeSection} >
                      <option value="">-- Seleccionar --</option>
                    {allEvents?.map((event) => (
                      <option key={event.eventID} value={event.eventID}>
                            {event.name}
                        </option>
                    ))}
                    </select>
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Nombre de la sección</label>
                    <input className={styles.formInputTextSection}
                    type="text"
                    name='sector'
                    value={section.sector}
                    onChange={handleChangeSection} />
                    </div>
                    </div>
                    {/* <div className={styles.formRows}>
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
                    </div> */}
                    <div className={styles.formRows}>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Precio por entrada</label>
                    <input className={styles.formInputTextSection}
                    type="number"
                    min="0"
                    name='price'
                    value={section.price}
                    onChange={handleChangeSection} />
                    </div>
                    {/* <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Cantidad de asientos</label>
                    <input className={styles.formInputText}
                    type="number"
                    min="0"
                    name='sectionSeats'
                    value={section.sectionSeats}
                    onChange={handleChangeSection} />
                    </div> */}
                    </div>
                    <div className={styles.formRows}>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Cantidad de filas</label>
                    {/* {input.type === 'Grande' ? <input className={styles.formInputText} type="number" name='rows' value='0' readOnly /> : */}
                    <input className={styles.formInputTextSection}
                    type="number"
                    min="0"
                    name='rows'
                    value={section.rows}
                    onChange={handleChangeSection} />
                    {/* } */}
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Cantidad de columnas</label>
                    {/* {input.type === 'Grande' ? <input className={styles.formInputText} type="number" name='columns' value='0' readOnly /> :  */}
                    <input className={styles.formInputTextSection}
                    type="number"
                    min="0"
                    name='columns'
                    value={section.sectionColumns}
                    onChange={handleChangeSection} />
                    {/* } */}
                    </div>
                    </div>
                    </div>
                    <button className={styles.sectionButton}
                    type="submit"
                    >Añadir sección</button>
                </form>
                <div className={styles.sectionsTable}>
                    {sections.length ? <h2>Secciones añadidas:</h2> : null}
                    {sections.length ?
                    <table>
                    <thead>
                        <tr>
                        <th>Nombre de la sección</th>
                        <th>Filas</th>
                        <th>Columnas</th>
                        <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sections?.map((section, index) => (
                            <tr key={index}>
                            <td>{section.sector}</td>
                            <td>{section.rows}</td>
                            <td>{section.columns}</td>
                            <td>{section.price}</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                     : null}
                     {sections.length ? <button className={styles.formButton} onClick={handlePostSections}>Agregar secciones a evento</button> : null}
                     {sections.length ? <button className={styles.formButton} onClick={deleteLastSection}>Eliminar sección</button> : null}
            </div>
           </div>
    )
}