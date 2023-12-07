import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { faBell } from '@fortawesome/free-regular-svg-icons'
import {faArrowLeft,faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faBell} from '@fortawesome/free-solid-svg-icons'
import "../styles/HeaderBar.css"

function HeaderBar(){
    const clickAvatar = () =>{
        const subnav = document.getElementById("avatar-subnav")
        subnav.style.display = (subnav.style.display === "block")?"none":"block"
    }
    
    return(
        <div id='header-bar'>
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
                    <h2 className="about-text">About us</h2>
                </button>

                <button className="premium-btn">
                    <h2 className="premium-text">Donate</h2>
                </button>
            </div>
    )
};

export {HeaderBar}