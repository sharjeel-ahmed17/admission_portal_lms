import { useNavigate } from "react-router-dom";

const StudentPortal = () => {
    const navigate = useNavigate();
    const goTODashboard = () => {
        navigate('/dashboard');
    }
    return (
        <div>StudentPortal

            <button onClick={goTODashboard}>go to dashboard</button>
        </div>
    )
}

export default StudentPortal