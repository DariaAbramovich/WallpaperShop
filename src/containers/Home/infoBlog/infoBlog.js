
import { Link } from 'react-router-dom';
import fliz from './../../../assets/image/homePage/paper_pin6.jpg';
import vinil from './../../../assets/image/homePage/vinil_pin.jpg';
import paper from './../../../assets/image/homePage/vinil_pin5.jpg';
import './infoBlog.scss';

export const InfoBlog = ({ language }) => {
    return (
        <>
            <div>
                <div className='InfoBlog_title'>{language === 'en' ? 'Our Products' : 'Наши товары'}</div>
                <div className='InfoBlog_wrapper'>
                    <div class="hover-effect-btn">
                        <div>
                            <img src={fliz} className='pr_img' alt="" />
                        </div>
                        <h3 class="pr_title">{language === 'en' ? 'Non-woven wallpapers' : 'Флизелиновые обои'}</h3>
                        <div class="pr_overlay"></div>
                        <div class="pr_button"><Link to='/nonWoven/'>{language === 'en' ? 'Go' : 'Перейти'}</Link></div>
                    </div>
                    <div class="hover-effect-btn">
                        <div>
                            <img src={vinil} className='pr_img' alt="" />
                        </div>
                        <h3 class="pr_title">{language === 'en' ? 'Vinyl wallpapers' : 'Виниловые обои'}</h3>
                        <div class="pr_overlay"></div>
                        <div class="pr_button"><Link to='/vinil/'>{language === 'en' ? 'Go' : 'Перейти'}</Link></div>
                    </div>
                    <div class="hover-effect-btn">
                        <div>
                            <img src={paper} className='pr_img' alt="" />
                        </div>
                        <h3 class="pr_title">{language === 'en' ? 'Paper wallpapers' : 'Бумажные обои'}</h3>
                        <div class="pr_overlay"></div>
                        <div class="pr_button"><Link to='/paperwall/'>{language === 'en' ? 'Go' : 'Перейти'}</Link></div>
                    </div>
                </div>
            </div>
            <div className='container_infoBl_info'>
                <div className='infoBl_info_type'>
                    <div className='infoBl_info_title'>{language === 'en' ? 'Advantages of Vinyl Wallpapers' : 'Каикие достоинства виниловых обоев?'}</div>
                    <div className='infoBl_info_text'>
                        {language === 'en' ? 'Thanks to the use of polyvinyl chloride, this type of wallpaper has excellent practicality, wear resistance, and durability. Wallpapers retain their original appearance for many years and do not fade.' : 'Благодаря использованию поливинилхлорида данный вид обоев обладает прекрасной практичностью, износостойкостью и долговечностью. Обои сохраняют изначальный внешний вид долгие годы, не выгорают.'}
                        <br />
                    </div>
                    <div className='infoBl_info_desc'>
                        <div className='infoBl_info_dost_title'></div>
                        <br />
                        <span className='text_span_bolt'>{language === 'en' ? 'Key advantage' : 'Важное преимущество'}:</span>
                        {language === 'en' ? ' - resistance to moisture, which distinguishes vinyl wallpapers favorably from non-woven wallpapers. Vinyl wallpapers can be washed and even applied in bathrooms.' : ' – устойчивость к влаге, чем выгодно отличаются виниловые обои от флизелиновых. Виниловые обои можно мыть, клеить даже в ванной.'}
                        <br />
                        {language === 'en' ? 'However, not all wallpapers of this type have such qualities. When choosing, it is necessary to carefully study the product specifications – the necessary information will be provided by the labeling of vinyl wallpapers.' : 'Но такими качествами обладают далеко не все обои этого вида. При выборе необходимо внимательно изучать характеристики товара – нужные данные подскажет маркировка виниловых обоев.'}
                        <br />
                        <br />
                    </div>
                    <div className='infoBl_info_dost'>
                        {language === 'en' ? 'Also among the advantages is the great aesthetic variety (color, pattern, texture) that this technology can offer. Vinyl wallpapers offer a huge selection of finishing options, they can simulate various materials – from stone and plaster to leather and fabric.' : 'В числе достоинств также большое эстетическое разнообразие (цвет, рисунок, фактура), которое может предложить данная технология. Виниловые обои предлагают огромный выбор вариантов отделки, они могут имитировать различные материалы – от камня и штукатурки, до кожи и ткани.'}
                        <br />
                        <br />
                    </div>
                    <div className='infoBl_info_text'>
                        {language === 'en' ? 'Vinyl wallpapers have few drawbacks. Primarily, it is impermeability to vapor, which can create certain problems, providing a favorable environment for bacteria growth.' : 'Минусов у виниловых обоев немного. В первую очередь это паронепроницаемость, что может создавать определенные проблемы, создавать благоприятную среду для размножения бактерий.'}
                        <br />
                        {language === 'en' ? 'Some argue that the disadvantages of vinyl wallpapers include their low environmental friendliness. However, this statement is true only for the cheapest and lowest quality specimens.' : 'Есть мнение, что к недостаткам, которыми обладают виниловые обои, относится их низкая экологичность. Но это утверждение справедливо лишь в отношении наиболее дешнизких и низкокачественных экземпляров.'}
                        </div>
                    </div>
    
                    <div className='infoBl_info_type'>
                        <div className='infoBl_info_title'>{language === 'en' ? 'Advantages of Non-Woven Wallpapers' : 'Каикие достоинства флизелиновых обоев?'}</div>
                        <div className='infoBl_info_text'>
                            {language === 'en' ? 'Non-woven wallpapers are characterized by excellent strength, resistance to mechanical damage, and ease of installation. They are environmentally friendly, breathable, and hypoallergenic, making them suitable for any room, including children\'s rooms and bedrooms.' : 'Флизелиновые обои отличаются отличной прочностью, устойчивостью к механическим повреждениям и легкостью установки. Они экологически безопасны, дышащие и гипоаллергенные, что делает их подходящими для любого помещения, включая детские комнаты и спальни.'}
                            <br />
                        </div>
                        <div className='infoBl_info_desc'>
                            <div className='infoBl_info_dost_title'></div>
                            <br />
                            <span className='text_span_bolt'>{language === 'en' ? 'Key advantage' : 'Основное преимущество'}:</span>
                            {language === 'en' ? ' - moisture resistance. Non-woven wallpapers do not swell or deform when exposed to moisture, which makes them ideal for kitchens, bathrooms, and other humid areas.' : ' - устойчивость к влаге. Флизелиновые обои не раскалываются и не деформируются при воздействии влаги, что делает их идеальными для кухонь, ванных комнат и других влажных помещений.'}
                            <br />
                            <br />
                        </div>
                        <div className='infoBl_info_dost'>
                            {language === 'en' ? 'Another advantage is the ease of care. Non-woven wallpapers can be washed with mild detergents and a soft sponge, which makes them easy to clean and maintain.' : 'Еще одним преимуществом является легкость ухода. Флизелиновые обои можно мыть мягкими моющими средствами и мягкой губкой, что облегчает их чистку и уход.'}
                            <br />
                            <br />
                        </div>
                        <div className='infoBl_info_text'>
                            {language === 'en' ? 'One of the few drawbacks of non-woven wallpapers is their higher price compared to paper wallpapers. However, their durability and ease of installation often justify the investment.' : 'Одним из немногих недостатков флизелиновых обоев является их более высокая цена по сравнению с бумажными обоями. Однако их долговечность и легкость установки часто оправдывают инвестиции.'}
                        </div>
                    </div>
    
                    <div className='infoBl_info_type'>
                        <div className='infoBl_info_title'>{language === 'en' ? 'Advantages of Paper Wallpapers' : 'Каикие достоинства бумажных обоев?'}</div>
                        <div className='infoBl_info_text'>
                            {language === 'en' ? 'Paper wallpapers are the most affordable option and are suitable for budget-conscious consumers. They come in a wide range of colors, patterns, and textures, allowing for versatile design options.' : 'Бумажные обои – самый доступный вариант и подходят для экономных потребителей. Они представлены в широком ассортименте цветов, узоров и текстур, что позволяет создавать разнообразные дизайнерские решения.'}
                            <br />
                        </div>
                        <div className='infoBl_info_desc'>
                            <div className='infoBl_info_dost_title'></div>
                            <br />
                            <span className='text_span_bolt'>{language === 'en' ? 'Key advantage' : 'Основное преимущество'}:</span>
                            {language === 'en' ? ' - affordability. Paper wallpapers are the most budget-friendly option, making them ideal for large-scale projects or temporary installations.' : ' - доступность. Бумажные обои являются самым бюджетным вариантом, что делает их идеальным выбором для крупных проектов или временных установок.'}
                            <br />
                            <br />
                        </div>
                        <div className='infoBl_info_dost'>
                            {language === 'en' ? 'However, paper wallpapers have several drawbacks, including their vulnerability to moisture, sunlight, and mechanical damage. They may not be suitable for high-humidity areas or long-term use.' : 'Однако у бумажных обоев есть несколько недостатков, включая их уязвимость к влаге, солнечному свету и механическим повреждениям. Они могут быть не подходящими для областей с повышенной влажностью или для длительного использования.'}
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </>
        );
    };
    