import './AboutMe.css';
import { Link } from 'react-router-dom';
import myPhoto from '../../images/me.JPEG'


function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__header">Студент</h2>
            <div className='about-me__description'>
                <div className="about-me__container-about">
                    <h3 className="about-me__name">Анжелика</h3>
                    <h4 className="about-me__profession">Фронтенд-разработчик, молода и перспективна</h4>
                    <p className="about-me__bio">Родилась в Ярославле, живу в Москве, хочу переехать в Питер.
                    Мечтаю создавать что-то полезное для людей. Хотела открыть завод по переработке мусора, но решила, что можно делать 
                    что-то более полезное без таких громадных вложений и пошла учиться на фронтенд разработчика, поняла, что тянет к перкрасному в диджитал. Мой муж- прекрасный человек,
                    он готов на любую авантюру, поэтому с нетерпением ждет окончания курса, чтобы я начала воплощать свои идеи в реальность. 
                    Желаю и вам вдохновлять людей!
                    </p>
                    <Link className='about-me__link' to={'https://github.com/Angelikusya'} target='_blank'>Github</Link>
                </div>
                <img alt="Мое чудесное фото" src={myPhoto} className='about-me__photo'/>
            </div>
        </section>
    )
}

export default AboutMe;