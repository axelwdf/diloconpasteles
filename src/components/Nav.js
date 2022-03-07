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
                    <div className="icon-heart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="heart" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l3.103-3.104a.5.5 0 1 1 .708.708L4.5 12.207V14a.5.5 0 0 1-.146.354l-1.5 1.5ZM16 3.5a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182A23.825 23.825 0 0 1 5.8 12.323L8.31 9.81a1.5 1.5 0 0 0-2.122-2.122L3.657 10.22a8.827 8.827 0 0 1-1.039-1.57c-.798-1.576-.775-2.997-.213-4.093C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3Z"/>
                        </svg>
                    </div>
                    Dilo con <span className='pink' >pasteles</span>
                    <div className="icon-heart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a21.86 21.86 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354l-1.5 1.5Zm2.893-4.894A20.419 20.419 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708L5.747 10.96Z"/>
                        </svg>
                    </div>
                </h1>
             </Link>

            

            {/* ligas */}
            <ul className="nav-ul">
                <Link className='to-link' to="/contact" >
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