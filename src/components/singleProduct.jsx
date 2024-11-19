import { useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";

const SingleProduct = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useFetchData(`https://dummyjson.com/products/${id}`);

  if (loading) {
    return <div className="p-5">Loading...</div>;
  }

  if (error) {
    return <div className="p-5 text-red-500">Error: {error}</div>;
  }

  if (!product) {
    return <div className="p-5">No product found.</div>;
  }
  console.log(product);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-lg font-semibold">Price: ${product.price}</p>
    </div>
  );
};

export default SingleProduct;
