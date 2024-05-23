import './about.scss'
export const AboutAdmin = () => {

    return (
        <>
            <div className="about_wrapper">
                <div className='about_title'>Добро пожаловать в наш магазин обоев "MagicWall"!</div>
                <div className='about_text'>
                    <div className='about_part'>
                        О нас
                    </div>
                    <div className='about_introduction'>Мы - команда профессионалов, которая с гордостью представляет вам широкий ассортимент обоев для создания неповторимого дизайна вашего интерьера. В "MagicWall" мы стараемся сделать процесс выбора и приобретения обоев максимально удобным и приятным для наших клиентов.</div>

                    <div className='about_part'>
                        Наш ассортимент
                    </div>
                    <div className='about_introduction'>
                        В нашем магазине вы найдете обои различных типов и стилей, чтобы подобрать идеальное решение для вашего помещения:
                        <div>
                            <div>Флизилиновые обои: Прочные, устойчивые к механическим повреждениям и влаге. Идеальный выбор для кухни, ванной или других помещений с повышенной влажностью.</div>
                            <div>Бумажные обои: Элегантные и стильные обои с широким выбором узоров и текстур. Подходят для создания уютной атмосферы в гостиной, спальне или кабинете.</div>
                            <div>Виниловые обои: Прочные и легко моющиеся обои, идеальные для использования в детских комнатах или других помещениях, где нужно обеспечить легкость ухода и защиту от загрязнений.</div>
                        </div>

                    </div >
                    <div>
                        <div className='about_part'>
                            Наша миссия
                        </div>
                        <div className='about_introduction'>Мы стремимся предоставить нашим клиентам не только качественные продукты, но и превосходный сервис. Наша команда готова помочь вам с выбором обоев, ответить на ваши вопросы и предоставить профессиональные рекомендации по дизайну.</div>
                    </div>
                    <div>
                        <div className='about_part'>
                            Доставка
                        </div>
                        <div className='about_introduction'>Мы предлагаем стандартные и экспресс-опции доставки по всей беларуси. Время доставки зависит от вашего местоположения. </div>
                    </div>
                    <div className='about_introduction'>
                        <div className='about_part'>Контакты</div>
                        <div>Не стесняйтесь связаться с нами, если у вас возникли вопросы или вам нужна помощь:</div>
                        <div>Телефон: +37544ХХХХХХХ, +37529ХХХХХХХ<br></br>
                            Электронная почта: magickWall@gmail.com<br></br>
                            Адреса: г.Минск ул.Перавая, г.Минск ул.Вторая, г.Минск ул.Третья</div>
                    </div>
                </div>

            </div>
        </>
    )
}