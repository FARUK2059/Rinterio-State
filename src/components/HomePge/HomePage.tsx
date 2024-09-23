import Navbar from "../Shared/Navbar";
import Banner from "./AllSection/Banner";



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

        </div>
    );
};

export default HomePage;