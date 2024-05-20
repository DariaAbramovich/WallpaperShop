import "./footer.scss"

export const Footer = () => {
    return (
        <>
            <div className="footer__wrapper">
                <div className="container">
                    <div className="footer__grid">
                        <div className="contacts">
                            <h3 className="title">
                                Наши контакты
                            </h3>
                            <div className="footer__block-content">
                            +37544ХХХХХХХ<br></br>
                            +37529ХХХХХХХ<br></br>
                            magickWall@gmail.com<br></br>
                            </div>
                          
                        </div>
                        <div className="address">
                            <h3 className="title">
                                Наши адреса
                            </h3>
                            <div className="footer__block-content">
                            г.Минск ул.Перавая<br></br>
                            г.Минск ул.Вторая<br></br>
                            г.Минск ул.Третья<br></br>
                            </div>
                           
                        </div>
                        <div className="schedule">
                            <h3 className="title">
                                График работы
                            </h3>
                            <div className="footer__block-content">
                            пн — пт : с 10:00 до 20:00<br></br>
                            сб — вс : с 10:00 до 18:00<br></br>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

