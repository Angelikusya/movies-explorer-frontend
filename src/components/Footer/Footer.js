import './Footer.css';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
    const { pathname } = useLocation();
    
    const showFooter = () => pathname === '/' || pathname === '/movies' || pathname === '/saved-movies';  

    return (
        <footer className={showFooter() ? 'footer' : 'footer footer_closed'}>
            <p className="footer_text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__container">
                <p className="footer__copyrights">&copy; 2024</p>
                <div className="footer__links">
                    <Link className='footer__link' to={'https://practicum.yandex.ru/'} target='_blank'>Яндекс.Практикум</Link>
                    <Link className='footer__link' to={'https://github.com/Angelikusya'} target='_blank'>Github</Link>
                </div>
            </div>
        </footer>
  );
}

export default Footer;
