// Luissssss
import styles from './AdminEventsCreate.module.css';
import { useState } from 'react';

export default function AdminEventsCreate() {

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
    });

    console.log(input);

    function handleChange(e){
        setInput({
            ...input,
        [e.target.name]: e.target.value,
        })
    };

    return (
        <div>
            <h1>AdminEventsCreate :{")"}</h1>
            <div>
                <form>
                    <p>Completa la información para crear un evento</p>
                    <div>
                    <label>Nombre del evento</label>
                    <input
                    name='name'
                    value={input.name}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Descripción</label>
                    <input
                    name='description'
                    value={input.description}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Categoría</label>
                    <input
                    name='category'
                    value={input.category}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Ubicación del evento</label>
                    <input
                    name='locationName'
                    value={input.locationName}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Dirección de la ubicación</label>
                    <input
                    name='adressLocation'
                    value={input.adressLocation}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Fecha del evento</label>
                    <input
                    name='date'
                    value={input.date}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Hora del evento</label>
                    <input
                    name='time'
                    value={input.time}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Aforo máximo del evento</label>
                    <input
                    name='capacity'
                    value={input.capacity}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Ubicación en el mapa</label>
                    <input
                    name='mapLocation'
                    value={input.mapLocation}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Imagen del evento</label>
                    <input
                    name='image'
                    value={input.image}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Imagen banner del evento</label>
                    <input
                    name='bannerImage'
                    value={input.bannerImage}
                    onChange={handleChange} />
                    </div>
                    <div>
                    <label>Imagen del plano del evento</label>
                    <input
                    name='planImage'
                    value={input.planImage}
                    onChange={handleChange} />
                    </div>

                </form>
            </div>
        </div>
    )
}