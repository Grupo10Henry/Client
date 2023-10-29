// Luissssss
import styles from './AdminEventsCreate.module.css';
import { useState } from 'react';
import { usePlacesWidget } from 'react-places-autocomplete';

export default function AdminEventsCreate() {

        // const [location, setLocation] = useState('');
        // const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesWidget({
        //   apiKey: 'AIzaSyAk33OybgLEOTfTfB-mWeon3pWcGLHS3vY',
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
        <div>
            <div>
                <form>
                    <p>Completa la información para crear un evento</p>
                    <div>
                    <label>Nombre del evento</label>
                    <input
                    type="text"
                    name='name'
                    value={input.name}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Descripción</label>
                    <textarea
                    name='description'
                    value={input.description}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Categoría</label>
                    <select
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
                    <div>
                    <label>Ubicación del evento</label>
                    <input
                    type="text"
                    name='locationName'
                    value={input.locationName}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Dirección de la ubicación</label>
                    <input
                    type="text"
                    name='adressLocation'
                    value={input.adressLocation}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Fecha del evento</label>
                    <input
                    type="date"
                    name='date'
                    value={input.date}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Hora del evento</label>
                    <input
                    type="time"
                    name='time'
                    value={input.time}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Aforo máximo del evento</label>
                    <input
                    type="number"
                    min="0"
                    name='capacity'
                    value={input.capacity}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Precio mínimo</label>
                    <input
                    type="number"
                    min="0"
                    name='priceMin'
                    value={input.priceMin}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Precio máximo</label>
                    <input
                    type="number"
                    min="0"
                    name='priceMax'
                    value={input.priceMax}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Ubicación en el mapa</label>
                    <p> Ingresa <a href="https://maps-generator.com/" target="_blank" rel="noopener noreferrer">aquí</a> para obtener el link</p>
                    <input
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
                    <div>
                    <label>Imagen del evento</label>
                    <input
                    type='url'
                    name='image'
                    value={input.image}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Imagen banner del evento</label>
                    <input
                    type='url'
                    name='bannerImage'
                    value={input.bannerImage}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Imagen del plano del evento</label>
                    <input
                    type='url'
                    name='planImage'
                    value={input.planImage}
                    onChange={handleChange} />
                    </div>

                </form>
            </div>
        </div>
    )
}