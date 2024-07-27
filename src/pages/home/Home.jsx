import IdCard from "../../components/UserRoute/idcard/IdCard"
import Result from "../../components/PublicRoute/result/Result"
import Signup from "../../components/PublicRoute/signup/Signup"
import StudentPortal from "../studentPortal/StudentPortal"
import { useState } from "react"



const Home = () => {
    const [activeContent, setActiveContent] = useState('content1');
    const renderContent = () => {
        switch (activeContent) {
            case 'content1':
                return <Signup />;
            case 'content2':
                return <IdCard />;
            case 'content3':
                return <StudentPortal />;
            case 'content4':
                return <Result />;
            default:
                return <div>Content 1</div>;
        }
    };
    return (
        <>


            <div className="App">
                <div className="top-bar">
                    <button onClick={() => setActiveContent('content1')}>Register</button>
                    <button onClick={() => setActiveContent('content2')}>Download Id Card</button>
                    <button onClick={() => setActiveContent('content3')}>id card</button>
                    <button onClick={() => setActiveContent('content4')}>Nav 4</button>
                </div>
                <div className="content">
                    {renderContent()}
                </div>
            </div>




        </>
    )
}

export default Home