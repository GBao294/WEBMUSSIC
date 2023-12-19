import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft,faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import "../styles/HeaderBar.css"
import { Link } from 'react-router-dom'

function HeaderBar({style}){
    const clickAvatar = () =>{
        const subnav = document.getElementById("avatar-subnav")
        subnav.style.display = (subnav.style.display === "block")?"none":"block"
    }
    
    return(
        <div id='header-bar' style={{backgroundImage: {style}}}>
             <button className="header-btn left-btn">
                <FontAwesomeIcon className='nav-btn' icon={faArrowLeft} />
                </button>

                <button className="header-btn right-btn">
                    <FontAwesomeIcon className='nav-btn' icon={faArrowRight} />
                </button>

                <button onClick={clickAvatar} className="header-btn avatar-btn">
                    <div className="avatar-img"></div>
                    <ul id="avatar-subnav">
                        <li><a href="">Tài khoản</a></li>
                        <li><a href="">Hồ sơ</a></li>
                        <li><a href="">Nâng cấp tài khoản</a></li>
                        <li><a href="">Cài đặt</a></li>
                        <li style={{ borderTop: '1px solid #383838' }}><a href="">Đăng xuất</a></li>
                    </ul>
                </button>
                
                <button className="header-btn bell-btn">
                    <FontAwesomeIcon className='nav-btn' icon={faBell} />
                </button>

                <button className="about-btn">
                   <Link className="about-text" to="/AboutUs">About us</Link>
                </button>

                <button className="premium-btn">
                <Link className="premium-text" to="https://test-payment.momo.vn/v2/gateway/pay?t=TU9NT3xNT01PMTcwMTg4MTY1NzY0NA&s=07d9dbe183d5ea2b9b5306fd41b4210e16e303e5eb7e38e291bbf25078d06fd8">Donate</Link>
                </button>
            </div>
    )
};

export {HeaderBar}