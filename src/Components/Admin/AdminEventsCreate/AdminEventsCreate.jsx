// Luissssss
import axios from 'axios';
import styles from './AdminEventsCreate.module.css';
import { useState } from 'react';

export default function AdminEventsCreate() {

    const categories = [
        "Teatro",
        "Música",
        "Cine",
        "Artes Visuales",
        "Literatura",
        "Deportes",
        "Eventos académicos",
        "Convenciones",
        "Festivales",
        "Empresariales",
        "Filantrópicos",
      ];

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
        priceMin: "",
        priceMax: "",
        type: "",
    });

    const [section, setSection] = useState({
        sector: "",
        wildcard: "",
        ticketType: "",
        discountCode: "",
        ticketPrice: "",
        sectionSeats: "",
        sectionRows: "",
        sectionColumns: "",
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.name || !input.description || !input.category || !input.capacity || !input.date || !input.time || !input.locationName || !input.adressLocation || !input.mapLocation ||
            !input.image || !input.bannerImage || !input.planImage || !input.priceMin || !input.priceMax || !input.type) {
                alert('Por favor completa todos los campos para crear el evento')
            }
        try {
            const post = await axios.post('http://localhost:3001/event/', input)
                alert(post.data)
        } catch (error) {
            alert(error.response.data.error)
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
                    {categories.sort().map((cat, idx) => (
                      <option key={idx} value={cat}>
                            {cat}
                        </option>
                    ))}
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
                    <input className={styles.formInputText}
                    type="number"
                    min="0"
                    name='priceMin'
                    value={input.priceMin}
                    onChange={handleChange} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Precio máximo</label>
                    <input className={styles.formInputText}
                    type="number"
                    min="0"
                    name='priceMax'
                    value={input.priceMax}
                    onChange={handleChange} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Ubicación en mapa {'('}Obtén link <a href="https://maps-generator.com/" target="_blank" rel="noopener noreferrer">aquí</a>{')'} </label>
                    <input className={styles.formInputText}
                    type='url'
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
                    {types.sort().map((cat, idx) => (
                      <option key={idx} value={cat}>
                            {cat}
                        </option>
                    ))}
                    </select>
                    </div>
                    </div>
                    </div>

                {/* Form de secciones */}

                <form className={styles.sectionForm}>
                    <p className={styles.sectionFormTitle}>Creador de secciones</p>
                    <p className={styles.formLabel}>Para crear una nueva sección, completa los campos y haz clic en "Añadir sección"</p>
                    <div className={styles.formFields}>
                    <div className={styles.formRows}>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Nombre de la sección</label>
                    <input className={styles.formInputText}
                    type="text"
                    name='sector'
                    value={section.sector}
                    onChange={handleChangeSection} />
                    </div>
                    <div className={styles.fieldContainer}>
                    <label className={styles.formLabel}>Campo disponible</label>
                    <input className={styles.formInputText}
                    type="text"
                    name='wildcard'
                    value={section.wildcard}
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
                    name='ticketPrice'
                    value={section.ticketPrice}
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
                    {input.type === 'Grande' ? null : <label className={styles.formLabel}>Cantidad de filas</label>}
                    {input.type === 'Grande' ? null : <input className={styles.formInputText}
                    type="number"
                    min="0"
                    name='sectionRows'
                    value={section.sectionRows}
                    onChange={handleChangeSection} />}
                    </div>
                    <div className={styles.fieldContainer}>
                    {input.type === 'Grande' ? null : <label className={styles.formLabel}>Cantidad de columnas</label>}
                    {input.type === 'Grande' ? null : <input className={styles.formInputText}
                    type="number"
                    min="0"
                    name='sectionColumns'
                    value={section.sectionColumns}
                    onChange={handleChangeSection} />}
                    </div>
                    </div>
                    </div>
                    <button className={styles.sectionButton}>Añadir sección</button>
                </form>
                    <button className={styles.formButton}
                    type="submit"
                    >Crear evento</button>
                </form>
            </div>
        // </div>
    )
}