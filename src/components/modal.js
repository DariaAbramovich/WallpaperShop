import React from "react";
import './../containers/cataloge/cataloge.scss'
import defaultImg from './../assets/image/wallpaper/1047301_arteks_622f33852273c.jpeg'
import close from './../assets/icon/close.png'
// {/* <Modal active={modalActive} setActive={setModalActive} nameprod={nameproduct} type={type} id={id} article={article} priceProduct={priceProduct} photoProduct={photoProduct} inStock={inStock} describeProduct={describeProduct} baseProduct={baseProduct} collectionProduct={collectionProduct} appointment={appointment} colorProduct={colorProduct} drawingProduct={drawingProduct} themeDrawing={themeDrawing} dockingProduct={dockingProduct} widthProduct={widthProduct} manufacturer={manufacture} country={country} surfaceProduct={surfaceProduct} stateProduct={stateProduct} /> */}
const Modal = ({ active, setActive, nameprod, type, article, priceProduct, inStock, describeProduct, baseProduct, collectionProduct, appointment, colorProduct, drawingProduct, themeDrawing, dockingProduct, widthProduct, manufacturer, country, surfaceProduct, photoProduct, stateProduct }) => {
    const img = 'http://localhost/api/uploads/'+photoProduct

    return (

        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>

            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <div>
                    <img src={close} className="modal_close" onClick={() => setActive(false)}/>
                    <div className="product_modal_img">
                    <img className="modal_img" src={`http://localhost/api/uploads/${photoProduct}`} alt={photoProduct} />
                        <div className="modal_name">Название:{nameprod}
                        <div className="modal_article">Артикул:{article}</div>
                        </div>
                        
                    </div>
                    <div>

                        <div className="modal_important_info">
                            <div className="modal_price">Цена: {priceProduct} руб.</div>
                            {/* <div className="modal_instok">{inStock}</div> */}
                            {stateProduct === 'Новинка' && (
                            <div className='instocks_label'>{stateProduct}</div>
                        )}
                        </div>
                        <div className="modal_info_item">
                                <div className="item_text">Описание:{describeProduct}</div>
                            </div>
                        <div className="modal_info">
                            <div>
                           
                                <div className="modal_info_item">Тип обоев:{type}</div>
                                <div className="modal_info_item">Основа:{baseProduct}</div>
                                <div className="modal_info_item">Коллекция:{collectionProduct}</div>
                                <div className="modal_info_item">Помещение:{appointment}</div>
                                <div className="modal_info_item">Цвет:{colorProduct}</div>
                                <div className="modal_info_item">Наличие рисунка:{drawingProduct}</div>
                                <div className="modal_info_item">Тема рисунка:{themeDrawing}</div>
                            </div>
                            <div>
                                <div className="modal_info_item">Стыковка:{dockingProduct}</div>
                                <div className="modal_info_item">Ширина:{widthProduct}</div>
                                <div className="modal_info_item">Производитель:{manufacturer}</div>
                                <div className="modal_info_item">Страна:{country}</div>
                                <div className="modal_info_item">Поверхность:{surfaceProduct}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;