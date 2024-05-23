import { Link } from 'react-router-dom'
import fliz from './../../../../assets/image/homePage/paper_pin6.jpg'
import vinil from './../../../../assets/image/homePage/vinil_pin.jpg'
import paper from './../../../../assets/image/homePage/vinil_pin5.jpg'
import './infoBlog.scss'

export const InfoBlogAdmin = () => {
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
                        <div class="pr_button"><Link to='/admin:nonWoven/'>Перейти</Link></div>
                    </div>
                    <div class="hover-effect-btn">
                        <div >
                            <img src={vinil} className='pr_img' alt="" />
                            {/* <img className="pr_img_vinil" src={paper} alt="" /> */}
                        </div>
                        <h3 class="pr_title">Виниловые обои</h3>
                        <div class="pr_overlay"></div>
                        <div class="pr_button"><Link to='/admin:vinil/'>Перейти</Link></div>
                    </div>
                    <div class="hover-effect-btn">
                        <div >
                            <img src={paper} className='pr_img' alt="" />
                            {/* <img src={paper} alt="" /> */}
                        </div>
                        <h3 class="pr_title">Бумажные обои</h3>
                        <div class="pr_overlay"></div>
                        <div class="pr_button"><Link to='/admin:paperwall/'>Перейти</Link></div>
                    </div>
                </div>
                {/* <button className='infoBlog_btn_toCatagol'><Link to='/cataloge/'>Перейти в каталог</Link></button> */}
            </div>
            <div >
            </div>
            <div className='container_infoBl_info'>
                

                <div className='infoBl_info_type'>
                    <div className='infoBl_info_title'>Каикие достоинства виниловых обоев?</div>
                    <div className='infoBl_info_text'>Благодаря использованию поливинилхлорида данный вид обоев обладает прекрасной практичностью, износостойкостью и долговечностью. Обои сохраняют изначальный внешний вид долгие годы, не выгорают.
                        И действительно, множество видов этих настенных покрытий и их непревзойденный внешний вид позволяют стать настоящим украшением любого помещения.<br></br>
                        </div>
                    <div className='infoBl_info_desc'>
                        <div className='infoBl_info_dost_title'></div><br></br>
                        <span className='text_span_bolt'>Важное преимущество </span>– устойчивость к влаге, чем выгодно отличаются виниловые обои от флизелиновых. Виниловые обои можно мыть, клеить даже в ванной.<br></br> Но такими качествами обладают далеко не все обои этого вида. При выборе необходимо внимательно изучать характеристики товара – нужные данные подскажет маркировка виниловых обоев.<br></br><br></br>
                    </div>
                    <div className='infoBl_info_dost'>
                    В числе достоинств также большое <span className='text_span_bolt'>эстетическое разнообразие</span> (цвет, рисунок, фактура), которое может предложить данная технология. Виниловые обои предлагают огромный выбор вариантов отделки, они могут имитировать различные материалы – от камня и штукатурки, до кожи и ткани.<br></br><br></br>
                        
                    </div>

                    <div className='infoBl_info_text'>
                    Минусов у виниловых обоев немного. В первую очередь это паронепроницаемость, что может создавать определенные проблемы, создавать благоприятную среду для размножения бактерий.<br></br>
                    Есть мнение, что к недостаткам, которыми обладают виниловые обои, относится их низкая экологичность. Но это утверждение справедливо лишь в отношении наиболее дешевых и низкокачественных экземпляров.
                    </div>
                </div>
                <div className='infoBl_info_type'>
                    <div className='infoBl_info_title'>Каикие достоинства флизелиновых обоев?</div>
                    <div className='infoBl_info_text'>На сегодняшний день безусловным синонимом слова «виниловые» выступает термин «роскошные».
                        И действительно, множество видов этих настенных покрытий и их непревзойденный внешний вид позволяют стать настоящим украшением любого помещения.<br></br>
                        Итак, какие же достоинства есть у этих обоев: </div>
                    <div className='infoBl_info_desc'>
                        <div className='infoBl_info_dost_title'></div><br></br>
                        <span className='infoBl_info_dost_span'>1.Долговечность</span> срок службы рассматриваемого материала при правильном использовании может доходить до 10-15 лет;<br></br><br></br>
                        <span className='infoBl_info_dost_span'>2.Влагостойкость</span> практически все виды обоев данной группы прекрасно переносят влажную уборку с использованием моющих средств, щеток;<br></br>
                    </div>
                    <div className='infoBl_info_dost'>
                        <span className='infoBl_info_dost_span'>3.Хорошая сцепляемость</span> с любыми поверхностями: дерево, ДСП, отштукатуренные или зашпатлеванные стены, бетон;<br></br><br></br>
                        <span className='infoBl_info_dost_span'>4.Стойкость к ультрафиолетовым лучам</span> рисунок слабо подвержен выгоранию на солнце;<br></br><br></br>
                        <span className='text_span_bolt'>Выше обозначенные качественные характеристики делают данную группу покрытий сравнительно более дорогой по стоимости.</span>
                    </div>

                    <div className='infoBl_info_text'>
                        К недостаткам указанной продукции относится невысокий уровень воздухопроницаемости. Следует отметить, что у некоторых разновидностей покрытий данный показатель выше и приближен к уровню полотен из натуральных материалов.
                    </div>
                </div>

                <div className='infoBl_info_type'>
                    <div className='infoBl_info_title'>Каикие достоинства бумажных обоев?</div>
                    <div className='infoBl_info_text'>На сегодняшний день имеет место достаточно неоднозначное отношение к использованию бумажных обоев для оформления интерьера: одни  потребители,  воздерживаются от их применения, другие, напротив,  зайдя в магазин  обоев, в первую очередь изучают именно  этот товар.<br></br><br></br>
                    Все дело в том, что настенные покрытия из бумаги появились на рынке в числе самых первых и вероятно  уже не найдется людей, которые хотя бы однажды не сталкивались с их поклейкой или использованием. <br></br>Однако необходимо помнить, что наука и инновации не стоят на месте и, с тех пор как эти обои появились, они многократно модернизировались и улучшались. 
                        
                        </div>
                    <div className='infoBl_info_desc'>
                        <div className='infoBl_info_dost_title'></div><br></br>
                    Это <span className='text_span_bolt'>самый дешевый</span> отделочный декоративный материал, что обеспечило большую популярность на рынке. Не каждые бумажные обои продаются по низкой цене. <br></br>Например, полотна европейского производства нередко реализуют по стоимости хороших виниловых вариантов. Качество таких обоев соответствующее.<br></br><br></br>
                    </div>
                    <div className='infoBl_info_dost'>
                 Для изготовления обоев <span className='text_span_bolt'>используется натуральная целлюлоза и другое сырье</span>, из которого производят клей и красящие пигменты. Природные компоненты не выделяют вредных веществ даже при возгорании. Благодаря хорошей циркуляции воздуха полотна <span className='text_span_bolt'>реже покрываются плесенью</span>, поскольку не копят влагу.<br></br><br></br>
                       
                    </div>

                    <div className='infoBl_info_text'>
                    Основной минус по мнению специалистов и потребителей — недолговечность. Обои из бумаги быстро выгорают на солнце, не устойчивы к износу, воздействию влаги, механическим повреждениям и другим факторам.
                    </div>
                </div>

            </div>

        </>
    )
}