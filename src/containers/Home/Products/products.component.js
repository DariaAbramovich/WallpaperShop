import axios from 'axios'

import { useEffect, useState } from 'react'
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
import Card from '../../../components/card';
import { ShopService } from '../../../core/api';

const ProductsComponent = () => {
    const [inputs, setInputs] = useState({})
    const [productData, setProductData] = useState([]);
    useEffect(()=>{
        getProducts();
    },[])
    const  getProducts = (e) => {
    
        ShopService.getProduct().
            then(function (response) {
                console.log(response.data);
                setProductData(response.data);
            })
    }

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
                            <button data-tab="Бумажные обои" className="tub-controls__btn">Бумажные</button>
                            <button data-tab=" Флизелиновые обои" className="tub-controls__btn">Флизелиновые</button>
                            <button data-tab=" Виниловые обои" className="tub-controls__btn">Виниловые</button>
                        </div>
                    </div>

                    <div className="products__slider">
                        <div className="slider">

                            <div className="swiper">
                                <div className="swiper-wrapper">
                                    {
                                        productData.map((pData, id)=>{
                                            console.log('product', pData)
                                              const {IdProduct ,NameProduct, Article, TypeProduct, PriceProduct, PhotoProduct,InStock, DescribeProduct,BaseProduct,CollectionProduct,Appointment,ColorProduct,DrawingProduct,ThemeDrawing,DockingProduct,WidthProduct,Manufacturer,Country,SurfaceProduct,StateProduct} = pData;
                                            
                                            return (
                                                <div className="swiper-card-wrapper" data-tab-value={TypeProduct}>
                                                  <Card id={IdProduct} nameproduct={NameProduct} article = {Article} type={TypeProduct} priceProduct={PriceProduct} photoProduct={PhotoProduct} inStock={InStock} describeProduct={DescribeProduct} baseProduct={BaseProduct} collectionProduct={CollectionProduct} appointment={Appointment} colorProduct={ColorProduct} drawingProduct={DrawingProduct} themeDrawing={ThemeDrawing} dockingProduct={DockingProduct} widthProduct={WidthProduct} manufacturer={Manufacturer} country={Country} surfaceProduct={SurfaceProduct} stateProduct={StateProduct}/>

                                                </div>

                                            )
                                        })
                                    }
                                   
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