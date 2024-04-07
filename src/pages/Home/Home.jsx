import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Nav from "../shared/Navbar/Nav";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Header from "../shared/header/Header";
import BreakingNews from "./BreakingNews";
import {useLoaderData} from "react-router-dom"
import NewsCard from "./NewsCard";

const Home = () => {
    const news=useLoaderData();
  
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Nav></Nav>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* news container */}
                <div className="md:col-span-2 ">
                 {
                    news.map(singleNews=><NewsCard 
                        key={singleNews._id}
                        news={singleNews}
                        ></NewsCard>)
                 }
                </div>
                <div >
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default Home;