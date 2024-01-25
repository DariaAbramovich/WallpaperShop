
import Swiper from 'swiper';

import 'swiper/css';
import './products.scss'
import wapllpaper1 from './../../../assets/image/wallpaper/1047301_arteks_622f33852273c.jpeg'
import wapllpaper2 from './../../../assets/image/wallpaper/1084306_arteks_648ad40ba35b6.jpeg'
import wapllpaper3 from './../../../assets/image/wallpaper/1084308_arteks_648ad4843db18.jpeg'
import wapllpaper4 from './../../../assets/image/wallpaper/1084408_arteks_648ad7f9b835a.jpeg'
import wapllpaper5 from './../../../assets/image/wallpaper/32906_elysium_61507a01cc276.jpeg'
import wapllpaper7 from './../../../assets/image/wallpaper/7047444_aspect__6489a1ac6ff98.jpeg'
import wapllpaper8 from './../../../assets/image/wallpaper/7047544_aspect__64886e29ab91d.jpeg'
import wapllpaper9 from './../../../assets/image/wallpaper/7047764_aspect__6489a6c063ea1.jpeg'

import plas from './../../../assets/icon/Plus.png';
import btn_left from './../../../assets/icon/arrov-left.svg'
import btn_right from './../../../assets/icon/arrov-right.svg'

const ProductsComponent = () => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 4,
        spaceBetween: 40,   
        freeMode: true,
        navigation: {
            nextButton: 'swiperNext',
            prevButton: '.swiperPrew',    
        },
    
    });
    const tabsBtn = document.querySelectorAll('[data-tab]')
    const tabProducts = document.querySelectorAll('[data-tab-value]')
    
    for(let btn of tabsBtn){
        btn.addEventListener('click', function(){
            for(let btn of tabsBtn){
                btn.classList.remove('active-btn')
            }   
            this.classList.add('active-btn')
    
            // отображаем нужное и скрываем ненужное
            for(let product of tabProducts){
                //делаем проверку на отображение всех товаров
                if(this.dataset.tab == "all"){
                    product.classList.remove('none')
                }
                else{
                    if(product.dataset.tabValue === this.dataset.tab){
                        product.classList.remove('none')
                    }
                    else{
                        product.classList.add('none')
                    }
                }
               
            }
            //обновляем свайпер
            swiper.update()
        })
    }
   

    return (
        <>
            <section className="products">
                <div className="container">
                    <div className="products__title">Наши товары</div>

                    <div className="products__tabs">
                        <div className="tab-controls">
                            <button data-tab="all" className="tub-controls__btn">Все</button>
                            <button data-tab="popular" className="tub-controls__btn">Новинки</button>
                            <button data-tab="new" className="tub-controls__btn">Популярное</button>
                            <button data-tab="actia" className="tub-controls__btn">Акции</button>
                        </div>
                    </div>

                    <div className="products__slider">
                        <div className="slider">

                            <div className="swiper">
                                <div className="swiper-wrapper">

                                    <div data-tab-value="popular" className="card swiper-slide">
                                        <a href="#product-page" className="card__link"></a>
                                        <div className="card__photo">
                                            <img src={wapllpaper1} alt="" className="card__img" />
                                        </div>
                                        <div className="card__description">
                                            <a href="#category" className="card__category">
                                                Обои
                                            </a>
                                            <h3 className="card__title">
                                                Sakarias Armchair
                                            </h3>
                                            <div className="card__footer">
                                                <div className="card__price" data-value="BY">
                                                    392
                                                </div>
                                                <div className="card__button">
                                                    В корзину
                                                    <img src={plas} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-tab-value="popular" className="card swiper-slide">
                                        <a href="#product-page" className="card__link"></a>
                                        <div className="card__photo">
                                            <img src={wapllpaper1} alt="" className="card__img" />
                                        </div>
                                        <div className="card__description">
                                            <a href="#category" className="card__category">
                                                Popular
                                            </a>
                                            <h3 className="card__title">
                                                Sakarias Armchair
                                            </h3>
                                            <div className="card__footer">
                                                <div className="card__price" data-value="BY">
                                                    392
                                                </div>
                                                <div className="card__button">
                                                    В корзину
                                                    <img src={plas} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-tab-value="new" className="card swiper-slide">
                                        <a href="#product-page" className="card__link"></a>
                                        <div className="card__photo">
                                            <img src={wapllpaper2} alt="" className="card__img" />
                                        </div>
                                        <div className="card__description">
                                            <a href="#category" className="card__category">
                                                New
                                            </a>
                                            <h3 className="card__title">
                                                Sakarias Armchair
                                            </h3>
                                            <div className="card__footer">
                                                <div className="card__price" data-value="BY">
                                                    392
                                                </div>
                                                <div className="card__button">
                                                    В корзину
                                                    <img src={plas} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-tab-value="popular" className="card swiper-slide">
                                        <a href="#product-page" className="card__link"></a>
                                        <div className="card__photo">
                                            <img src={wapllpaper3} alt="" className="card__img" />
                                        </div>
                                        <div className="card__description">
                                            <a href="#category" className="card__category">
                                                Popular
                                            </a>
                                            <h3 className="card__title">
                                                Sakarias Armchair
                                            </h3>
                                            <div className="card__footer">
                                                <div className="card__price" data-value="BY">
                                                    392
                                                </div>
                                                <div className="card__button">
                                                    В корзину
                                                    <img src={plas} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-tab-value="actia" className="card swiper-slide">
                                        <a href="#product-page" className="card__link"></a>
                                        <div className="card__photo">
                                            <img src={wapllpaper4} alt="" className="card__img" />
                                        </div>
                                        <div className="card__description">
                                            <a href="#category" className="card__category">
                                                Акция
                                            </a>
                                            <h3 className="card__title">
                                                Sakarias Armchair
                                            </h3>
                                            <div className="card__footer">
                                                <div className="card__price" data-value="BY">
                                                    392
                                                </div>
                                                <div className="card__button">
                                                    В корзину
                                                    <img src={plas} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-tab-value="popular" className="card swiper-slide">
                                        <a href="#product-page" className="card__link"></a>
                                        <div className="card__photo">
                                            <img src={wapllpaper5} alt="" className="card__img" />
                                        </div>
                                        <div className="card__description">
                                            <a href="#category" className="card__category">
                                                Обои
                                            </a>
                                            <h3 className="card__title">
                                                Sakarias Armchair
                                            </h3>
                                            <div className="card__footer">
                                                <div className="card__price" data-value="BY">
                                                    392
                                                </div>
                                                <div className="card__button">
                                                    В корзину
                                                    <img src={plas} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-tab-value="actia" className="card swiper-slide">
                                        <a href="#product-page" className="card__link"></a>
                                        <div className="card__photo">
                                            <img src={wapllpaper7} alt="" className="card__img" />
                                        </div>
                                        <div className="card__description">
                                            <a href="#category" className="card__category">
                                                Actia
                                            </a>
                                            <h3 className="card__title">
                                                Sakarias Armchair
                                            </h3>
                                            <div className="card__footer">
                                                <div className="card__price" data-value="BY">
                                                    392
                                                </div>
                                                <div className="card__button">
                                                    В корзину
                                                    <img src={plas} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-tab-value="new" className="card swiper-slide">
                                        <a href="#product-page" className="card__link"></a>
                                        <div className="card__photo">
                                            <img src={wapllpaper8} alt="" className="card__img" />
                                        </div>
                                        <div className="card__description">
                                            <a href="#category" className="card__category">
                                                Actia
                                            </a>
                                            <h3 className="card__title">
                                                Sakarias Armchair
                                            </h3>
                                            <div className="card__cofooter">
                                                <div className="card__price" data-value="BY">
                                                    392
                                                </div>
                                                <div className="card__button">
                                                    В корзину
                                                    <img src={plas} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-tab-value="new" className="card swiper-slide">
                                        <a href="#product-page" className="card__link"></a>
                                        <div className="card__photo">
                                            <img src={wapllpaper9} alt="" className="card__img" />
                                        </div>
                                        <div className="card__description">
                                            <a href="#category" className="card__category">
                                                New
                                            </a>
                                            <h3 className="card__title">
                                                Sakarias Armchair
                                            </h3>
                                            <div className="card__footer">
                                                <div className="card__price" data-value="BY">
                                                    392
                                                </div>
                                                <div className="card__button">
                                                    В корзинy
                                                    <img src={plas} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <button id="swiperPrew" className="slider__button perv">
                                <img src={btn_left} alt="prev" />
                            </button>
                            <button id="swiperNext" className="slider__button next">
                            <img src={btn_right} alt="prev" />
                            </button>

                        </div>

                    </div>  
                    <div className="products__link"> <a className="read-more large" href="cataloge">Vie all</a></div>
                </div>
            </section>
        </>
    )
}

export default ProductsComponent;