import toast from "react-hot-toast"
import IdCard from "../../components/idcard/IdCard"
import Result from "../../components/result/Result"

const Home = () => {
    const check = () => {
        console.log("Toast is working")
        toast.error("toast is working")
    }
    return (
        <>
            <IdCard />
            <Result />
            <button onClick={check}> toast is working</button>

        </>
    )
}

export default Home