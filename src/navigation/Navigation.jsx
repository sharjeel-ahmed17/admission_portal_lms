import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";



import NoPage from "../pages/nopage/NoPage";
import Home from "../pages/home/Home";
import StudentPortal from "../pages/studentPortal/StudentPortal";

import Admin from "../components/AdminRoute/admin/Admin";
import SendNotification from "../components/AdminRoute/sendnotification/SendNotification";

import Login from "../components/PublicRoute/login/Login";

import VerifyOtp from "../components/PublicRoute/verifyotp/VerifyOtp";

import EntryTest from "../components/UserRoute/entryTest/EntryTest";

import AdminLayout from "../components/layout/AdminLayout";
import PublicLayout from "../components/layout/PublicLayout";
import UserLayout from "../components/layout/UserLayout";

import { Toaster } from "react-hot-toast";
import UserDashboard from "../components/UserRoute/userDashboard/UserDashboard";
import IdCard from "../components/UserRoute/idcard/IdCard";

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
                        <Route path="login" element={<Login />} />
                        <Route path="verify-otp" element={<VerifyOtp />} />

                    </Route>
                    {/* user */}
                    <Route path="/dashboard" element={<UserLayout />}>
                        <Route index element={<UserDashboard />} />

                        <Route path="verify-otp" element={<VerifyOtp />} />
                        <Route path="entry-test" element={<EntryTest />} />
                        <Route path="download" element={<IdCard />} />

                    </Route>
                    <Route path="/*" element={<NoPage />} />
                </Routes>
            </Router>
        </div >
    )
}

export default Navigation





