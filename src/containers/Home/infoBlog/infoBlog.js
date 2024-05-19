import fliz from './../../../assets/image/homePage/paper_pin6.jpg'
import vinil from './../../../assets/image/homePage/vinil_pin.jpg'
import paper from './../../../assets/image/homePage/vinil_pin5.jpg'


export const InfoBlog = () => {
    return (
        <>
            <div>

                <div className='InfoBlog_title'>Наши товары</div>
                <div className='InfoBlog_wrapper'>

                    <div class="hover-effect-btn">
                        <div >
                            <img src={fliz} className='pr_img' alt="" />
                            {/* <img src={fliz} alt="" /> */}
                        </div>
                        <h3 class="pr_title">Флизелиновые обои</h3>
                        <div class="pr_overlay"></div>
                        <div class="pr_button"><a href="#">Перейти</a></div>
                    </div>
                    <div class="hover-effect-btn">
                    <div >
                            <img src={vinil} className='pr_img' alt="" />
                            {/* <img className="pr_img_vinil" src={paper} alt="" /> */}
                        </div>
                        <h3 class="pr_title">Виниловые обои</h3>
                        <div class="pr_overlay"></div>
                        <div class="pr_button"><a href="#">Перейти</a></div>
                    </div>
                    <div class="hover-effect-btn">
                        <div >
                            <img src={paper} className='pr_img' alt="" />
                            {/* <img src={paper} alt="" /> */}
                        </div>
                        <h3 class="pr_title">Бумажные обои</h3>
                        <div class="pr_overlay"></div>
                        <div class="pr_button"><a href="#">Перейти</a></div>
                    </div>
                    



                </div>

            </div>
            <div>
                <div>
                    достоинства флизелиновых обоев
                </div>
                <div>
                    достоинства виниловых обоев
                </div>

                <div>
                    достоинства бумажных обоев
                </div>



            </div>

        </>
    )
}