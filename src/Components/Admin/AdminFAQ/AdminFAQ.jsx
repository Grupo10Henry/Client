import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { instance } from "../../../axios/config";
import { useEffect } from "react";
import { getAllFaqs } from "../../../redux/faqSlice";
import style from "./AdminFAQ.module.css";

const AdminFAQ = () => {

  const dispatch = useDispatch();
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

  const handleEditFAQ = (index) => {

  };

  

  return (
    <div className={style.AdminFAQ}>
      <h1>CREAR PREGUNTAS Y RESPUESTAS</h1>
      <div>
        <label>
          Pregunta:
          <input
            type="text"
            name="question"
            value={newFaq.question}
            onChange={handleChange}
          />
        </label>
        <label>
          Respuesta:
          <textarea
            name="answer"
            value={newFaq.answer}
            onChange={handleChange}
          ></textarea>
        </label>
        <button onClick={handleCreateFAQ}>Guardar</button>
      </div>

      {/* Mostrar preguntas y respuestas guardadas */}
      <div className={style.FaqList}>
        {allFaqs.map((faq) => (
          <div key={faq.faqID}>
            <strong>Pregunta:</strong> {faq.question}
            <br />
            <strong>Respuesta:</strong> {faq.answer}
            <TiDeleteOutline className={style.btnEliminar} onClick={() => handleDeleteFAQ(faq.faqID)} />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminFAQ;
