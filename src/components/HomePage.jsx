import { BsPersonCircle } from "react-icons/bs";
import './home.css'
export default function Home() {
    return (
        <>
            <nav className="navbar">
                <div className='container-fluid'>
                    <a className="navbar-brand" href="#">Musical Landmarks</a>
                    <div>
                        <a href="http://localhost:3000/login/federated/google" id="explore-btn" className='btn d-flex align-items-center gap-3'>
                            <BsPersonCircle size={32} /> Sign in</a>
                    </div>
                </div>
            </nav>
            <div id="home"></div>
        </>
    )
}