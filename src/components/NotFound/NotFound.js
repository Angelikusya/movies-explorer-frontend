import './NotFound.css';
import { Link, useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    return (
        <main>
            <section className="not-found">
                <h1 className="not-found__error">404</h1>
                <p className="not-found__text">Страница не найдена</p>
                <Link className='not-found__link' onClick={() => navigate(-1)}>Назад</Link>
            </section>
        </main>
    );
}

export default NotFound;