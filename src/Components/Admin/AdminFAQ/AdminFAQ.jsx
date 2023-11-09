import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { instance } from "../../../axios/config";
import { useEffect } from "react";
import { getAllFaqs } from "../../../redux/faqSlice";
import { useNavigate } from "react-router-dom";
import styles from "./AdminFAQ.module.css";
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

const AdminFAQ = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {allFaqs} = useSelector((s) => s.faq)

  const getFaqs = async () => {
      try {
        const { data } = await instance.get(`/faq/`) // instance.get(`/user/${params.id}`) || axios.get(`http://localhost:3001/user/${params.id}`)
      //   console.log(data)
        return data
      } catch (error) {
        console.log(error)
      }
  };

      useEffect(() => {
        getFaqs().then((data) => {
          dispatch(getAllFaqs(data));
        });
      }, []
  );

  
  const [newFaq, setNewFaq] = useState({
    question: "",
    answer: "",
  });
  
  console.log(allFaqs);
  console.log(newFaq);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewFaq({
      ...newFaq,
      [name]: value,
    });
  };

  const handleCreateFAQ = async () => {
      try {
        await instance.post(`/faq/`, newFaq) // instance.post(`/faq/`, newFaq) || axios.post(`http://localhost:3001/faq/`, newFaq)
        getFaqs().then((data) => {
          dispatch(getAllFaqs(data));
        });
        alert('Se ha creado la pregunta exitosamente');
      } catch (error) {
        alert(error)
      }
  };

  const handleDeleteFAQ = async (faqID) => {
    try {
      await instance.delete(`/faq/${faqID}`) // instance.get(`/user/${params.id}`) || axios.get(`http://localhost:3001/user/${params.id}`)
      getFaqs().then((data) => {
        dispatch(getAllFaqs(data));
      });
      alert('Se ha eliminado la pregunta exitosamente');
    } catch (error) {
      alert(error)
    }
  };

  const handleEditFAQ = (faqID) => {
    navigate(`/preguntas/${faqID}`)
  };

  return (
    <div className={styles.adminFAQContainer}>
      <h1 className={styles.adminFaqTitle}>Crear, editar y eliminar preguntas frecuentes</h1>
      <div className={styles.adminFaqCreateContainer}>
      <div className={styles.adminFaqCreateFields}>
        <label className={styles.adminFaqLabel}>Pregunta:</label>
          <input className={styles.adminFaqInputText}
            type="text"
            name="question"
            value={newFaq.question}
            onChange={handleChange}
          />
        </div>
        <div className={styles.adminFaqCreateFields}>
        <label className={styles.adminFaqLabel}>Respuesta:</label>
          <textarea className={styles.adminFaqInputTextArea}
            name="answer"
            value={newFaq.answer}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className={styles.adminFaqButton} onClick={handleCreateFAQ}>Guardar</button>
      </div>

      {/* Mostrar preguntas y respuestas guardadas */}
      <table className={styles.faqTable}>
        <thead className={styles.faqTableHead}>
          <tr>
            <th className={styles.faqTableHeadContent}>Pregunta</th>
            <th className={styles.faqTableHeadContent}>Respuesta</th>
            <th className={styles.faqTableHeadContent}>Editar</th>
            <th className={styles.faqTableHeadContent}>Eliminar</th>
          </tr>
        </thead>
        <tbody>
        {allFaqs?.map((faq) => (
          <tr className={styles.faqTableRows} key={faq.faqID}>
            <td className={styles.faqTableRowsContent}>{faq.question}</td>
            <td className={styles.faqTableRowsContent}>{faq.answer}</td>
            <td className={styles.faqTableRowsContent}><AiFillEdit className={styles.faqEditButton} onClick={() => handleEditFAQ(faq.faqID)}/></td>
            <td className={styles.faqTableRowsContent}><BsFillTrashFill className={styles.faqDeleteButton} onClick={() => handleDeleteFAQ(faq.faqID)}/></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminFAQ;
