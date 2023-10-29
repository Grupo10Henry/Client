// Luissssss
import styles from './AdminEventsCreate.module.css';
import { useState } from 'react';
// import { usePlacesWidget } from 'react-places-autocomplete';

export default function AdminEventsCreate() {

        // const [location, setLocation] = useState('');
        // const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesWidget({
        //   apiKey: 'GOOGLE_API_KEY',
        //   debounce: 300,
        // });

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
      ]

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
    });

    console.log(input);

    function handleChange(e){
        setInput({
            ...input,
        [e.target.name]: e.target.value,
        })
    };

    const handleSelect = (suggestion) => {
        setLocation(suggestion.description);
        clearSuggestions();
      };

    return (
        // <div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
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
                    {/* <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter a location"
        />
        {status === 'OK' && (
          <ul>
          {data.map((suggestion) => (
            <li key={suggestion.place_id} onClick={() => handleSelect(suggestion)}>
            {suggestion.description}
            </li>
            ))}
            </ul>
          )} */}
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
                    </div>
                    </div>
                    <button className={styles.formButton}
                    type="submit"
                    >Crear evento</button>

                </form>
            </div>
        // </div>
    )
}