import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
    
    return (
        <div className="not-found">
            <p className="not-found__error">404</p>
            <p className="not-found__text">Страница не найдена</p>
            <Link className='not-found__link' to={'https://github.com/Angelikusya'}>Назад</Link>
        </div>
  );
}

export default NotFound;