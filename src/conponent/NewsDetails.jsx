import Header from "./Login/Shared/Header";
import Navbar from "./Login/Shared/Navbar";
import RightSideNav from "./RightSideNav";


const NewsDetails = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

        <div className="grid grid-cols-4">
        <div className="col-span-3 text-6xl text-center text-red-900"> News Details coming soon</div>
        <div> <RightSideNav></RightSideNav> </div>

        </div>


        </div>
    );
};

export default NewsDetails;