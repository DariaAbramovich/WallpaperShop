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
                            +375447935583<br></br>
                            +375295632482<br></br>
                            magickWall@gmail.com<br></br>
                            </div>
                          
                        </div>
                        <div className="address">
                            <h3 className="title">
                                Наши адреса
                            </h3>
                            <div className="footer__block-content">
                            г.Минск ул. Фрунзе 23.<br></br>
                            г.Минск ул. Сурганова 78.<br></br>
                            г.Минск ул. Виленская 3.<br></br>
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

