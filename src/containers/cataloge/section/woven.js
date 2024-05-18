import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../../components/card';

export const NonWowen = () => {
    const [inputs, setInputs] = useState({});
    const [productDataN, setProductDataN] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        getProductsN();
    }, []);

    const getProductsN = async () => {
        try {
            const response = await axios.get('http://localhost/api/product_fliz.php', { params: inputs });
            if (Array.isArray(response.data)) {
                setProductDataN(response.data);
            } else {
                console.error('Response data is not an array', response.data);
            }
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };

    const filteredProducts = productDataN.filter((pData) => {
        const price = parseFloat(pData.PriceProduct);
        const min = parseFloat(minPrice);
        const max = parseFloat(maxPrice);
        if (!isNaN(min) && price < min) return false;
        if (!isNaN(max) && price > max) return false;
        return true;
    });

    return (
        <>
            <h1>Non-Wowen Paper</h1>
            <div>
                <label>
                    Min Price:
                    <input
                        type="number"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                </label>
                <label>
                    Max Price:
                    <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </label>
            </div>
            <>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((pData) => {
                        const {
                            IdProduct,
                            NameProduct,
                            Article,
                            TypeProduct,
                            PriceProduct,
                            PhotoProduct,
                            InStock,
                            DescribeProduct,
                            BaseProduct,
                            CollectionProduct,
                            Appointment,
                            ColorProduct,
                            DrawingProduct,
                            ThemeDrawing,
                            DockingProduct,
                            WidthProduct,
                            Manufacturer,
                            Country,
                            SurfaceProduct,
                            StateProduct
                        } = pData;
                        return (
                            <div key={IdProduct}>
                                <Card
                                    id={IdProduct}
                                    nameproduct={NameProduct}
                                    article={Article}
                                    type={TypeProduct}
                                    priceProduct={PriceProduct}
                                    photoProduct={PhotoProduct}
                                    inStock={InStock}
                                    describeProduct={DescribeProduct}
                                    baseProduct={BaseProduct}
                                    collectionProduct={CollectionProduct}
                                    appointment={Appointment}
                                    colorProduct={ColorProduct}
                                    drawingProduct={DrawingProduct}
                                    themeDrawing={ThemeDrawing}
                                    dockingProduct={DockingProduct}
                                    widthProduct={WidthProduct}
                                    manufacturer={Manufacturer}
                                    country={Country}
                                    surfaceProduct={SurfaceProduct}
                                    stateProduct={StateProduct}
                                />
                            </div>
                        );
                    })
                ) : (
                    <p>No products available</p>
                )}
            </>
        </>
    );
};
