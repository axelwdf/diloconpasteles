import { useState } from "react";


import './formDilo.css';
const FormDilo =()=> {

    // datos
    const [wanna, setWanna] = useState("");
    const [locate, setLocate] = useState("");
    const [more, setMore] = useState("");

    //función submit
    const getForm = e =>{
        e.preventDefault();
        const number = '+52 1 55 2259 9143'
        const url = `https://api.whatsapp.com/send?phone=${number}&text=
        *Quisiera comprar:* ${wanna}%0A
        *Me úbico en:* ${locate}%0A
        *Dudas:* ${more}
        `

        window.open(url);
    }

    
    return(
        <form  className="FormDilo" onSubmit={getForm} >

            {/* Titulo */}
            <h3 className="h3">Solicita tu pedido</h3>


            {/* Quiero */}
            <div className="div-form">
                <label htmlFor="wanna">Quiero ⤵️ </label>
                <input 
                    type="text" 
                    id="wanna" 
                    onChange={e => setWanna(e.target.value)}
                    value={wanna}
                    placeholder="¿Qué desae comprar?" 
                    required
                />
            </div>

            {/* Calle */}
            <div className="div-form">
                <label htmlFor="locate">Me ubico en ⤵️ </label>
                <input 
                    type="text" 
                    id="locate" 
                    onChange={e => setLocate(e.target.value)}
                    value={locate}
                    placeholder="¿En qué calle vive?"
                    required
                />
            </div>

            {/* more */}
            <div className="div-form">
                <label htmlFor="more">¿Tienes dudas? Enviamelas ⤵️ </label>
                <textarea 
                    className="textarea"
                    name="more" 
                    id="more" 
                    cols="30" 
                    rows="10"
                    type="text" 
                    onChange={e => setMore(e.target.value)}
                    value={more}
                    placeholder="Escribe aquí las dudas que tengas sobre tu pedido"
                ></textarea>
            </div>

            {/* botón */}
            <button  id="send" className="submit">Enviar mi pedido</button>
        </form>
    );
}

export default FormDilo;