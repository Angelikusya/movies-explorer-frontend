import './AboutProject.css';


function AboutProject() {
    return (
        <section className="about-project">
            <h2 className='about-project__header'>О проекте</h2>
            <div className='about-project__container'>
                <div className='about-project__steps'>
                    <h3 className='about-project__main'>Дипломный проект включал 5 этапов</h3>
                    <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about-project__duration'>
                    <h3 className='about-project__main'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='about-project__digram'>
                <div className='about-project__backend'>
                    <h3 className='about-project__backend-duration'>1 неделя</h3>
                    <p className='about-project__digram-title'>Back-end</p>
                </div>
                    <div className='about-project__frontend'>
                    <h3 className='about-project__frontend-duration'>4 недели</h3>
                    <p className='about-project__digram-title'>Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;
