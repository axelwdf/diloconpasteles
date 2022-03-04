import data from './data.json';
import './dataMap.css';


const Data = () => {
    return(
        <div className="DataMap">
            <h3 className="h3"> ❤️ <span className="pink">Nuestros</span> productos ❤️ </h3>
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