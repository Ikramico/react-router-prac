
import { Link} from "react-router-dom";
import useFetchData from "../hooks/useFetchData";


const Products = () => {
    const {data: products, loading, err} = useFetchData('https://dummyjson.com/products');
    
   
    if (err) throw err;
    if (loading) return <p>Loading...</p>;
    const newData = products.products;
    
     
    return (
        <div className="bg-teal-700 h-full flex-wrap flex flex-row p-5 justify-center">
            
            {newData.map((product) => (
                <Link to={`/products/${product.id}`} key={product.id} className="w-1/4">
                    <div  className=" p-5 bg-gray-400 rounded-xl m-2 hover:shadow-xl">
                    <h2 className="text-black">{product.title}</h2>
                    <p className="text-blue-800">Price: ${product.price}</p>
                    <button onClick={() => console.log(`/products/${product.id}`)} >Click me</button>
                </div>
                </Link>
                
            ))}
        </div>
    );
};

export default Products;