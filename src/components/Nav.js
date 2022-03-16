import './nav.css';
import {
    HashRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import FormDilo from './FormDilo';
import Header from './Header';
import DataMap from './DataMap';




const Nav = () => {
    
    return(
        
        <HashRouter>
        <div className="Nav">
             {/* icon */}
             <Link className='to-link' to="/" >
                <h1 className="h1-title">
                    Dilo con <span className='pink' >pasteles</span>                    
                </h1>
             </Link>

            

            {/* ligas */}
            <ul className="nav-ul">
                <Link className='to-link' to="/contact"  >
                    <li className='ul-ch' >Contanos ahora</li>
                </Link>
                <Link className='to-link' to="/gallery" >
                    <li className='ul-ch' >Ver galería</li>
                </Link>
                <Link className='to-link' to="/products" >
                    <li className='ul-ch' >Nuestros productos</li>
                </Link>
            </ul>
        </div>
            <Routes>
                <Route path='/'/>
                <Route path='/contact' element={<FormDilo/>} />
                <Route path='/gallery' element={<Header/>}/>
                <Route path='/products' element={<DataMap/>}/>
            </Routes>
        </HashRouter>

        // conetenido
        // <div className="Nav">
        //     {/* icon */}
        //     <h1 className="h1-title">
        //         <img 
        //             src="https://cdn-icons.flaticon.com/png/512/4719/premium/4719995.png?token=exp=1646118012~hmac=527fd74f777081b90b08e48114f322e3" 
        //             alt="cupcake" 
        //             className='cupicon'
        //         />
        //         Dilo con <span className='pink' >pasteles</span>
        //         <img 
        //             src="https://cdn-icons.flaticon.com/png/512/4719/premium/4719995.png?token=exp=1646118012~hmac=527fd74f777081b90b08e48114f322e3" 
        //             alt="cupcake" 
        //             className='cupicon'
        //         />
        //     </h1>

            

        //     {/* ligas */}
        //     <ul className="nav-ul">
        //         <li className="ul-ch">Inicio</li>
        //         <li className='ul-ch' >Contanos ahora</li>
        //         <li className='ul-ch' >Ver galería</li>
        //         <li className='ul-ch' >Nuestros productos</li>
        //     </ul>
        // </div>

        
    );
}

export default Nav;