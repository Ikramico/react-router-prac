
import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";


const SinglePage = () => {
    const {id} = useParams();
        const {data: product, loading, err} = useFetchData(`https://dummyjson.com/products/${id}`);

     if (err) throw err;
    if (loading) return <p>Loading...</p>;
    if (product.length === 0) return <p>No products</p>
    return (
        <div>
            <h1>{product.title}</h1>
            <h3>Category: {product.category}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <img src={product.image} alt={product.title}/>
        </div>
    );
};

export default SinglePage;