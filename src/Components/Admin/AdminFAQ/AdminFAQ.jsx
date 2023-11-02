import React, { useState } from "react";
import style from "./AdminFAQ.module.css";

const AdminFAQ = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agregar la pregunta y respuesta al array
    setFaqList([...faqList, formData]);
    // Limpiar el formulario después de guardar
    setFormData({ question: "", answer: "" });
  };

  return (
    <div className={style.AdminFAQ}>
      <h1>Crear preguntas y respuestas</h1>
      <form onSubmit={handleSubmit}>
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
      </form>

      {/* Mostrar preguntas y respuestas guardadas */}
      <div className={style.FaqList}>
        {faqList.map((faq, index) => (
          <div key={index}>
            <strong>Pregunta:</strong> {faq.question}
            <br />
            <strong>Respuesta:</strong> {faq.answer}
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminFAQ;