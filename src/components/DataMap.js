import data from './data.json';
import './dataMap.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCookieBite, faGlassWater} from '@fortawesome/free-solid-svg-icons'

const Data = () => {
    return(
        <div className="DataMap">
            <h3 className="h3-title"> 
                <span className="pink">Nuestros</span> productos 
                <div className="cookie-container">
                    <FontAwesomeIcon icon={faCookieBite} className='cookie' />
                    <FontAwesomeIcon icon={faGlassWater} className='milk' />
                </div> 
            </h3>

            <div className="DataContainer">
                {
                    data.map(date => (
                        <div className='DataCh' >
                            <img src={date.img} alt="esta es una imagen" className='imgs' />
                            <p>{date.title} </p>
                            <p> Sabor: {date.taste} </p>
                            <p className="price">Precio: ${date.price} </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Data;