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

  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  });

  const [faqList, setFaqList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCreateFAQ = () => {

  };

  const handleDeleteFAQ = (index) => {

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
            value={formData.question}
            onChange={handleChange}
          />
        </label>
        <label>
          Respuesta:
          <textarea
            name="answer"
            value={formData.answer}
            onChange={handleChange}
          ></textarea>
        </label>
        <button type="submit">Guardar</button>
      </div>

      {/* Mostrar preguntas y respuestas guardadas */}
      <div className={style.FaqList}>
        {faqList.map((faq, index) => (
          <div key={index}>
            <strong>Pregunta:</strong> {faq.question}
            <br />
            <strong>Respuesta:</strong> {faq.answer}
            <TiDeleteOutline className={style.btnEliminar} onClick={() => handleDelete(index)} />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminFAQ;
