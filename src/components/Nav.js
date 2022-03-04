import FormDilo from './FormDilo';
import './nav.css';
const Nav = () => {
    
    return(
        <div className="Nav">
            {/* icon */}
            <h1 className="h1-title">
                <img 
                    src="https://cdn-icons.flaticon.com/png/512/4719/premium/4719995.png?token=exp=1646118012~hmac=527fd74f777081b90b08e48114f322e3" 
                    alt="cupcake" 
                    className='cupicon'
                />
                Dilo con <span className='pink' >pasteles</span>
                <img 
                    src="https://cdn-icons.flaticon.com/png/512/4719/premium/4719995.png?token=exp=1646118012~hmac=527fd74f777081b90b08e48114f322e3" 
                    alt="cupcake" 
                    className='cupicon'
                />
            </h1>

            

            {/* ligas */}
            <ul className="nav-ul">
                <a href={FormDilo}>
                    <li className='ul-ch' >Contanos ahora</li>
                </a>
                <li className='ul-ch' >Ver galería</li>
                <li className='ul-ch' >Nuestros productos</li>
            </ul>
        </div>
    );
}

export default Nav;