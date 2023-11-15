//Guada
import { useSelector } from "react-redux";
import styles from "./AdminReviews.module.css";


const AdminReviews = () => {

    const {reviews} = useSelector((s) => s.reviews)

    console.log(reviews)

    return(
        <div className={styles.reviewsTableContainer}>
            <h1 className={styles.reviewsTableTitle}>Calificaciones recibidas</h1>
            <table className={styles.reviewsTable}>
                <thead className={styles.reviewsTableHead}>
                    <tr>
                        <th className={styles.reviewsTableHeadContent}>ID de usuario</th>
                        <th className={styles.reviewsTableHeadContent}>Usuario</th>
                        <th className={styles.reviewsTableHeadContent}>Fecha de calificación</th>
                        <th className={styles.reviewsTableHeadContent}>Evento</th>
                        <th className={styles.reviewsTableHeadContent}>Calificación</th>
                        <th className={styles.reviewsTableHeadContent}>Comentario</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews?.map((rev) => (
                    <tr className={styles.reviewsTableRows}>
                        <td className={styles.reviewsTableRowsContent}>{rev.userID}</td>
                        <td className={styles.reviewsTableRowsContent}>{rev.userName} {rev.userLastName}</td>
                        <td className={styles.reviewsTableRowsContent}>{rev.reviewDate}</td>
                        <td className={styles.reviewsTableRowsContent}>{rev.eventName}</td>
                        <td className={styles.reviewsTableRowsContent}>{rev.rating}</td>
                        <td className={styles.reviewsTableRowsContent}>{rev.review}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
        // <div className={style.containerReviewAdmin}>
        //     <h1>CREAR CALIFICACIONES</h1>
            
        //     <form>
        //     <h2>Comentarios positivos </h2>
        //     <label>
        //         1 
        //         <textarea
        //         type="text"
        //         name="question"
        //         placeholder="Ingrese comentario"
        //         />
        //     </label>
        //     <label>
        //         2
        //         <textarea
        //         type="text"
        //         name="question"
        //         placeholder="Ingrese comentario"
        //         />
        //     </label>
        //     <label>
        //         3 
        //         <textarea
        //         type="text"
        //         name="question"
        //         placeholder="Ingrese comentario"
        //         />
        //     </label>
        //     <label>
        //         4 
        //         <textarea
        //         type="text"
        //         name="question"
        //         placeholder="Ingrese comentario"
        //         />
        //     </label>
        //     <label>
        //         5 
        //         <textarea
        //         type="text"
        //         name="question"
        //         placeholder="Ingrese comentario"
        //         />
        //     </label>
        //     <h2>Comentarios negativos</h2>
        //     <label>
        //         1 
        //         <textarea
        //         type="text"
        //         name="question"
        //         placeholder="Ingrese comentario"
        //         />
        //     </label>
        //     <label>
        //         2
        //         <textarea
        //         type="text"
        //         name="question"
        //         placeholder="Ingrese comentario"
        //         />
        //     </label>
        //     <label>
        //         3 
        //         <textarea
        //         type="text"
        //         name="question"
        //         placeholder="Ingrese comentario"
        //         />
        //     </label>
        //     <label>
        //         4 
        //         <textarea
        //         type="text"
        //         name="question"
        //         placeholder="Ingrese comentario"
        //         />
        //     </label>
        //     <label>
        //         5 
        //         <textarea
        //         type="text"
        //         name="question"
        //         placeholder="Ingrese comentario"
        //         />
        //     </label>
        //     <button type="submit">Guardar</button>
        //     </form>
        // </div>
    )
}

export default AdminReviews