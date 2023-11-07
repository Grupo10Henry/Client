//Guada
import style from "./AdminReviews.module.css"


const AdminReviews = () => {
    return(
        <div className={style.containerReviewAdmin}>
            <h1>CREAR CALIFICACIONES</h1>
            
            <form>
            <h2>Comentarios positivos </h2>
            <label>
                1 
                <textarea
                type="text"
                name="question"
                placeholder="Ingrese comentario"
                />
            </label>
            <label>
                2
                <textarea
                type="text"
                name="question"
                placeholder="Ingrese comentario"
                />
            </label>
            <label>
                3 
                <textarea
                type="text"
                name="question"
                placeholder="Ingrese comentario"
                />
            </label>
            <label>
                4 
                <textarea
                type="text"
                name="question"
                placeholder="Ingrese comentario"
                />
            </label>
            <label>
                5 
                <textarea
                type="text"
                name="question"
                placeholder="Ingrese comentario"
                />
            </label>
            <h2>Comentarios negativos</h2>
            <label>
                1 
                <textarea
                type="text"
                name="question"
                placeholder="Ingrese comentario"
                />
            </label>
            <label>
                2
                <textarea
                type="text"
                name="question"
                placeholder="Ingrese comentario"
                />
            </label>
            <label>
                3 
                <textarea
                type="text"
                name="question"
                placeholder="Ingrese comentario"
                />
            </label>
            <label>
                4 
                <textarea
                type="text"
                name="question"
                placeholder="Ingrese comentario"
                />
            </label>
            <label>
                5 
                <textarea
                type="text"
                name="question"
                placeholder="Ingrese comentario"
                />
            </label>
            <button type="submit">Guardar</button>
            </form>
        </div>
    )
}

export default AdminReviews