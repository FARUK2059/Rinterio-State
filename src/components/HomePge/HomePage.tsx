import Navbar from "../Shared/Navbar";
import Banner from "./AllSection/Banner";
import Blog from "./AllSection/Blog";
import Footer from "./AllSection/Footer";
import State from "./AllSection/State";



const HomePage = () => {
    return (
        <div>

            {/* Nevbar section */}
            <div>
                <Navbar></Navbar>
            </div>

            {/* Banner Section */}
            <div>
                <Banner></Banner>
            </div>

            {/* Bloge Section */}
            <div>
                <Blog></Blog>
            </div>

            {/* State Section */}
            <div>
                <State></State>
            </div>

            {/* Fotter Secction */}
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default HomePage;