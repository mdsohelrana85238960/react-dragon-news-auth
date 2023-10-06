import { useLoaderData } from "react-router-dom";
import LeftSideNav from "./LeftSideNav";
import BreakingNews from "./Login/BreakingNews";
import Header from "./Login/Shared/Header";
import Navbar from "./Login/Shared/Navbar";
import RightSideNav from "./RightSideNav";
import NewsCard from "./Login/NewsCard";



const Home = () => {
    const news = useLoaderData();
    // console.log((news));
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <p className="text-xl p-4 font-bold">This is Home page</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4"> 

            <div > <LeftSideNav></LeftSideNav> </div>
            <div className="md:col-span-2 mx-4">
                 {
                    news.map(aNews => <NewsCard key={aNews.id} aNews={aNews} ></NewsCard> )
                 } 
                 </div>
            <div > <RightSideNav></RightSideNav> </div>

            </div>
        </div>
    );
};

export default Home;