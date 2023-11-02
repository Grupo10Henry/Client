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
        setSections([...sections, section]);
    };

    const handlePostSections = async () => {
        if(sections.length) {
        try {
            const postSection = sections.map( async (section) => {
            await instance.post('/seat', section)
        })
            alert('Se han añadido las secciones al evento')
        } catch (error) {
            alert(error.response.data.error)
        }
    } else {
        alert('Por favor añade secciones antes de crearlas')
    }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.name || !input.description || !input.category || !input.isDonation || !input.capacity || !input.date || !input.time || !input.locationName ||
            !input.adressLocation || !input.mapLocation || !input.type) {
                alert('Por favor completa todos los campos para crear el evento')
            } else {
                // Código para extraer la URL de source del código de GoogleMaps
                // let copy = input.mapLocation
                let match = input.mapLocation.match(iframeRegex);
                // setInput({...input, mapLocation: match[1]})

                // Cargar imagen en Cloudinary
                // try {
                    const formData = new FormData();
                    formData.append('file', image);
                    formData.append('upload_preset', 'mibutaca');
                
                    const cloudinaryResponse = await axios.post(
                      'https://api.cloudinary.com/v1_1/dwbvvo9u2/image/upload',
                      formData
                    );
                
                    // Obtener URL de imagen en Cloudinary
                    const imageUrl = cloudinaryResponse.data.secure_url;
                    setImageURL(imageUrl);
                // } catch (error) {
                //     console.error('Error uploading image:', error);
                // }

                // Cargar imagen Banner en Cloudinary
                // try {
                    const formDataB = new FormData();
                    formDataB.append('file', bannerImage);
                    formDataB.append('upload_preset', 'mibutaca');
                
                    const cloudinaryResponseB = await axios.post(
                      'https://api.cloudinary.com/v1_1/dwbvvo9u2/image/upload',
                      formDataB
                    );
                
                    // Obtener URL de imagen Banner en Cloudinary
                    const bannerImageUrl = cloudinaryResponseB.data.secure_url;
                    setBannerImageURL(bannerImageUrl);
                // } catch (error) {
                //     console.error('Error uploading image:', error);
                // }

                // Cargar imagen Plano en Cloudinary
                // try {
                    const formDataP = new FormData();
                    formDataP.append('file', planImage);
                    formDataP.append('upload_preset', 'mibutaca');
                
                    const cloudinaryResponseP = await axios.post(
                      'https://api.cloudinary.com/v1_1/dwbvvo9u2/image/upload',
                      formDataP
                    );
                
                    // Obtener URL de imagen Plano en Cloudinary
                    const planImageUrl = cloudinaryResponseP.data.secure_url;
                    setPlanImageURL(planImageUrl);                    
                // } catch (error) {
                //     console.error('Error uploading image:', error);
                // }

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
                    <input className={styles.formInputText}
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
                    <input className={styles.formInputText}
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
                    <input className={styles.formInputText}
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
            </div>
           </div>
    )
}