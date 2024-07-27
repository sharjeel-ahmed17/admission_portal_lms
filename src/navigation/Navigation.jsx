import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";



import NoPage from "../pages/nopage/NoPage";
import Home from "../pages/home/Home";
import StudentPortal from "../pages/studentPortal/StudentPortal";

import Admin from "../components/admin/Admin";
import SendNotification from "../components/sendnotification/SendNotification";

import Login from "../components/login/Login";
import Signup from "../components/signup/Signup";
import VerifyOtp from "../components/verifyotp/VerifyOtp";

import EntryTest from "../components/entryTest/EntryTest";

import AdminLayout from "../components/layout/AdminLayout";
import PublicLayout from "../components/layout/PublicLayout";
import UserLayout from "../components/layout/UserLayout";

import { Toaster } from "react-hot-toast";

function Navigation() {
    return (
        <div className="App">
            <Router>
                <Toaster />
                <Routes>


                    {/* admin */}
                    <Route path="/admin" element={<AdminLayout />} >

                        <Route index element={<Admin />} />

                        <Route path="send-notification" element={<SendNotification />} />

                    </Route>
                    {/* public */}
                    <Route path="/" element={<PublicLayout />}>
                        <Route index element={<Home />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="login" element={<Login />} />
                        <Route path="verify-otp" element={<VerifyOtp />} />

                    </Route>
                    {/* user */}
                    <Route path="/student-portal" element={<UserLayout />}>
                        <Route index element={<StudentPortal />} />

                        <Route path="entry-test" element={<EntryTest />} />
                        <Route path="verify-otp" element={<VerifyOtp />} />

                    </Route>
                    <Route path="/*" element={<NoPage />} />
                </Routes>
            </Router>
        </div >
    )
}

export default Navigation





