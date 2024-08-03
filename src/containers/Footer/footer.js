import "./footer.scss";

export const Footer = ({ language }) => {
    return (
        <>
            <div className="footer__wrapper">
                <div className="container">
                    <div className="footer__grid">
                        <div className="contacts">
                            <h3 className="title">
                                {language === 'en' ? 'Our Contacts' : 'Наши контакты'}
                            </h3>
                            <div className="footer__block-content">
                                +37544XXXXXXXXX<br />
                                +37529XXXXXXXXX<br />
                                magickWall@gmail.com<br />
                            </div>
                        </div>
                        <div className="address">
                            <h3 className="title">
                                {language === 'en' ? 'Our Addresses' : 'Наши адреса'}
                            </h3>
                            <div className="footer__block-content">
                                г.Минск ул.Первая<br />
                                г.Минск ул.Вторая<br />
                                г.Минск ул.Третья<br />
                            </div>
                        </div>
                        <div className="schedule">
                            <h3 className="title">
                                {language === 'en' ? 'Working Hours' : 'График работы'}
                            </h3>
                            <div className="footer__block-content">
                                Пн-Пт: 10:00  - 20:00<br />
                                Сб-Вс: 10:00 — 18:00<br />
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </>
    );
};
