import './Portfolio.css';
import { Link } from 'react-router-dom';


function Portfolio() {
    return (
        <main>
            <section>
                <div className="portfolio__container">
                    <h2 className="portfolio__title">Портфолио</h2>
                        <ul className='portfolio__list'>
                            <li className='portfolio__links'>
                                <Link className="portfolio__container-links">
                                    <p className='portfolio__container-link' to={'https://github.com/Angelikusya/how-to-learn'} target='_blank'>Статичный сайт</p>
                                    <p className='portfolio__container-arrow' to={'https://github.com/Angelikusya/how-to-learn'} target='_blank'>↗</p>
                                </Link>
                            </li>
                            <li className='portfolio__links'>
                                <Link className="portfolio__container-links">
                                    <p className='portfolio__container-link' to={'https://github.com/Angelikusya/russian-travel'} target='_blank'>Адаптивный сайт</p>
                                    <p className='portfolio__container-arrow' to={'https://github.com/Angelikusya/russian-travel'} target='_blank'>↗</p>
                                </Link>
                            </li>
                            <li className='portfolio__links'>
                                <Link className="portfolio__container-links">
                                    <p className='portfolio__container-link' to={'https://github.com/Angelikusya/react-mesto-auth'} target='_blank'>Одностраничное приложение</p>
                                    <p className='portfolio__container-arrow' to={'https://github.com/Angelikusya/react-mesto-auth'} target='_blank'>↗</p>
                                </Link>
                            </li>
                        </ul>
                </div>
            </section>
        </main>
    )
}

export default Portfolio;