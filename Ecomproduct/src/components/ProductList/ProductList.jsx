import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import Toast from '../Toast/Toast';
import { useSelector } from 'react-redux';
import Loader from '../Loader';

function ProductList() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);
    const toast = useSelector((state) => state.toast);


    useEffect(() => {
        // fetch('https://api.escuelajs.co/api/v1/products')
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error:', error))
        .finally(() => setLoading(false));
    }, []);

    // useEffect(() => {
    //     const fetchProduct = async () => {
    //         try {
    //             setLoading(true);
    //             setError(null);
    //             const response = await axios.get('https://api.escuelajs.co/api/v1/products');
    //             setProducts(response.data);
    //             console.log(response.data);
    //         } catch (error) {
    //             setError('Failed to fetch products details');
    //             // setError(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchProduct();
    // }, []);

    if (loading) {
        return (
            // 
            <Loader text="Loading..."/>
        );
    }

    if(error){
        return (
            <div className="w-full flex justify-center items-center text-center min-h-screen">
                <div className='w-full mx-auto sm:px-1 lg:px-1 py-1 relative'>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                {error}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if(products.length === 0){
        return <div>No froduct found</div>
    }

    return (
        <div className='w-full mx-auto sm:px-1 lg:px-1 py-1 relative'>
            {toast.message && <Toast message={toast.message} type={toast.type} />}

            <div className='flex flex-wrap'>
                {products.map((product) => (
                    <div key={product.id} className='w-full p-2 sm:w-1/2 lg:w-1/4'>
                        <ProductCard {...product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList
