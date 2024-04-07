import Nav from "../shared/Navbar/Nav";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Header from "../shared/header/Header";
import {useParams} from 'react-router-dom';

const News = () => {
    const {id}=useParams();

    return (
        <div>
            <Header></Header>
            <Nav></Nav>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-3xl">News Details</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>

        </div>
    );
};

export default News;