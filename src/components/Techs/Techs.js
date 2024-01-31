import './Techs.css';


function Techs() {
    return (
        <section className="techs">
            <h1 className="techs__header">Технологии</h1>
            <div className='techs__description'>
                <h2 className="techs__title">7 технологий</h2>
                <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                
                <ul className='techs__list'>
                    <li className='techs__list-container'>
                        <p className='techs__technology'>HTML</p>
                    </li>
                    <li className='techs__list-container'>
                        <p className='techs__technology'>CSS</p>
                    </li>
                    <li className='techs__list-container'>
                        <p className='techs__technology'>JS</p>
                    </li>
                    <li className='techs__list-container'>
                        <p className='techs__technology'>React</p>
                    </li>
                    <li className='techs__list-container'>
                        <p className='techs__technology'>Git</p>
                    </li>
                    <li className='techs__list-container'>
                        <p className='techs__technology'>Express</p>
                    </li>
                    <li className='techs__list-container'>
                        <p className='techs__technology'>mongoDB</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Techs;