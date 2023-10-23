import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const cities = [
    "Las Vegas",
    "North Las Vegas",
    "Pahrump",
    "Henderson",
    "Mesquite"
]
const phoneNumber = "(702) 209-5174"

function ContactForm() {
    const [state, handleSubmit] = useForm("xnqkwaqo");
    const [phone, setPhone] = useState("");
    if (state.succeeded) {
        return <p style={{color: 'red'}}>Gracias, nos comunicaremos con usted pronto!</p>;
    }
    const handlePhoneChange = (e) => {
        const value = e.target.value;
        const formattedValue = formatPhoneNumber(value);
        setPhone(formattedValue);
      };

const formatPhoneNumber = (phoneNumber) => {
    const cleaned = phoneNumber.replace(/\D/g, ''); 
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/); 
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return cleaned; 
};
    return (
        <form onSubmit={handleSubmit}>
        <div className="label-req">
        <div className="form-label">
        <label htmlFor="name">
          Nombre
        </label>
        <input
          id="name"
          type="text" 
          name="name"
          required
          placeholder="Tu Nombre"
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
        </div>
        <div className="form-label">
        <label htmlFor="phone">
          Tel #
        </label>
        <input
          id="phone"
          type="tel" 
          name="phone"
          required
          placeholder={phoneNumber}
          value={phone}
          onChange={handlePhoneChange}
        />
        <ValidationError 
          prefix="Phone" 
          field="phone"
          errors={state.errors}
        />
        </div>
        <div className="form-label">
        <label htmlFor="city">
            Cuidad
        </label>
        <select id="city" name="city">
                <option value="">Seleccione Una Ciudad</option>
                {cities.map((city, index) => (
                    <option key={index} value={city}>
                        {city}
                    </option>
                ))}
            </select>
        <ValidationError
          prefix="City"
          field="city"
          errors={state.errors}
        />
        </div>
        <div className="form-label">
        <label htmlFor="value">
            Horas 
        </label>
        <input
          id="value"
          type="number"
          name="value"
          required
          placeholder='0'
        />
        <ValidationError
          prefix="Value"
          field="value"
          errors={state.errors}
        />
        </div>
        <div className="form-label">
        <label htmlFor="date">
            Fecha
        </label>
        <input
          id="date"
          type="date"
          name="date"
          required
        />
        <ValidationError
          prefix="Date"
          field="date"
          errors={state.errors}
        />
        </div>
        </div>
        <div className="form-label">
        <label htmlFor="message">
            Preguntas?
        </label>
        <textarea
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        </div>
        
        <button type="submit" disabled={state.submitting}>
          Entregar
        </button>
      </form>
    );
  }
export default function Info(){
    return (
        <div className="Info">
            <h1 style={{color: '#d6481e'}}>Contrataciones</h1>
            <hr />
            {/*<div className="cities">
                <h4>Dispolibles en las siguientes ciudades:</h4>
                {cities.map(city => <p>{city}</p>)}
                </div>*/}
            <div className="contact">
                <h4>Para Contrataciones llama:</h4>
                <p className="phone" style={{fontSize: '20px'}}><a href="tel:{phoneNumber}">{phoneNumber}</a ></p>
            </div>
            <hr />
            <div className="prices">
                <h4>Precios:</h4>
                Precio por hora: $380 **
                <br />
                <small>** Los precios varían dependiendo de la ciudad. **</small>
            </div>
            <hr />
            <div className="contact-form">
                <h4>Si desea ver la disponibilidad o tiene preguntas:</h4>
                </div>
                <br />
                <div className="form-inputs">
                <ContactForm />
            </div>
        </div>
    )
}