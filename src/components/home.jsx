import { Link, Outlet } from "react-router-dom";


const Home = () => {
    return (
        <div>
            This is Home.
            <button className="bg-teal-500 p-5">Go to
                <Link to='/products' >Products</Link>
            </button>
            <Outlet/>
        </div>
    );
};

export default Home;