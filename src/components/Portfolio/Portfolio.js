import './Portfolio.css';
import { Link } from 'react-router-dom';


function Portfolio() {
    return (
        <section>
            <div className="portfolio__container">
                <h1 className="portfolio__title">Портфолио</h1>
                <div className="portfolio__container-links">
                    <Link className='portfolio__container-link' to={'https://github.com/Angelikusya/how-to-learn'} target='_blank'>Статичный сайт</Link>
                    <Link className='portfolio__container-arrow' to={'https://github.com/Angelikusya/how-to-learn'} target='_blank'>↗</Link>
                </div>
                <div className="portfolio__container-links">
                    <Link className='portfolio__container-link' to={'https://github.com/Angelikusya/russian-travel'} target='_blank'>Адаптивный сайт</Link>
                    <Link className='portfolio__container-arrow' to={'https://github.com/Angelikusya/russian-travel'} target='_blank'>↗</Link>
                </div>
                <div className="portfolio__container-links">
                    <Link className='portfolio__container-link' to={'https://github.com/Angelikusya/react-mesto-auth'} target='_blank'>Одностраничное приложение</Link>
                    <Link className='portfolio__container-arrow' to={'https://github.com/Angelikusya/react-mesto-auth'} target='_blank'>↗</Link>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;