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
                                Minsk, ul. Peravaya<br />
                                Minsk, ul. Vtoraya<br />
                                Minsk, ul. Tretya<br />
                            </div>
                        </div>
                        <div className="schedule">
                            <h3 className="title">
                                {language === 'en' ? 'Working Hours' : 'График работы'}
                            </h3>
                            <div className="footer__block-content">
                                Mon — Fri: 10:00 AM — 8:00 PM<br />
                                Sat — Sun: 10:00 AM — 6:00 PM<br />
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </>
    );
};
