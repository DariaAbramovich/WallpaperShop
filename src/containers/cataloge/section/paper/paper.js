import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../../../../components/card';

export const Paper = () => {

    const [inputs, setInputs] = useState({})
    const [productDataN, setProductDataN] = useState([]);
    const [result, setResult] = useState([]);
    useEffect(() => {
        getProductsN();
    }, [])
    const getProductsN = async () => {
        try {
            const response = await axios.get('http://localhost/api/product_paper.php', { params: inputs });
            if (Array.isArray(response.data)) {
                setProductDataN(response.data);
            } else {
                console.error('Response data is not an array', response.data);
            }
        } catch (error) {
            console.error('Error fetching product data:', error);
        }
    };
    return (
        <>
            <h1>non-wowen paper</h1>
            <>
            {Array.isArray(productDataN) && productDataN.length > 0 ? (
                    productDataN.map((pData, id) => {
                        console.log('product', id, pData);
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
    )
}