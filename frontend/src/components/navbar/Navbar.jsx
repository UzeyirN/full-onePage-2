import React from 'react'
import { Link } from 'react-router-dom'
import '../navbar/Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to=''><i class="fa-solid fa-cart-shopping"></i><span className='logo'>Aroma</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent"style={{marginLeft:"50px"}}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to=''>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='shop'>Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='blog'>Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='pages'>Pages</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='contact'>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='add'>Add</Link>
                            </li>
                        </ul>
                    </div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to=''><i class="fa-solid fa-magnifying-glass"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to=''><i class="fa-solid fa-basket-shopping"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to=''><button className='nav-button'>BUY NOW</button></Link>
                            </li>
                        </ul>
                        
                    </div>
                    
            </nav>
        </>
    )
}

export default Navbar