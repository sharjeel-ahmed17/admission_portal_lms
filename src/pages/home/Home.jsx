import IdCard from "../../components/UserRoute/idcard/IdCard"
import Result from "../../components/PublicRoute/result/Result"
import Signup from "../../components/PublicRoute/signup/Signup"
import StudentPortal from "../studentPortal/StudentPortal"
import { Link } from "react-router-dom"


const Home = () => {

    return (
        <>


            <Signup />
            <Result />
            <IdCard />
            <StudentPortal />


            <Link to={"/dashboard"}>

            </Link>


        </>
    )
}

export default Home