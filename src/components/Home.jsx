import { Link } from 'react-router-dom'
import { BsPersonCircle } from "react-icons/bs";
import './home.css'
export default function Home() {
    return (
        <>
            <nav className="navbar">
                <div className='container-fluid'>
                    <a class="navbar-brand" href="#">Musical Landmarks</a>
                    <div>
                        <Link to="map" id="explore-btn" className='btn d-flex align-items-center gap-3'>
                            <BsPersonCircle size={32} /> Sign in</Link>
                    </div>
                </div>
            </nav>
            <div id="home"></div>
        </>
    )
}