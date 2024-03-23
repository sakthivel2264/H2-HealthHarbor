import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Loading from "./components/Loading";
import Navbar1 from "./components/Navbar1"
import Footer from "./components/Footer"
const Layout = React.lazy(()=> import("./pages/Aside/Layout"))

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contactus = React.lazy(() => import("./pages/Contactus"));
const Doctors = React.lazy(() => import("./pages/Doctors"));
const Patients = React.lazy(() => import("./pages/Patients"));
const Appointment = React.lazy(() => import("./pages/Appointment"));
const Emergency = React.lazy(() => import("./pages/Emergency"));
const Signup = React.lazy(() => import("./pages/Signup"));
const Login = React.lazy(() => import("./pages/Login"));
const Logout = React.lazy(() => import("./pages/Logout"));
const Error = React.lazy(() => import("./pages/Error"));

// Importing Navbar2 and all its pages
const BloodTest = React.lazy(() => import("./pages/BloodTest"));
const DoctorConsultation = React.lazy(() => import("./pages/DoctorConsultation"));
const GeneticTesting = React.lazy(() => import("./pages/GeneticTesting"));
const Xray = React.lazy(() => import("./pages/Xray"));
const Surgery = React.lazy(() => import("./pages/Surgery"));
const Supplement = React.lazy(() => import("./pages/Supplement"));
const Offers = React.lazy(() => import("./pages/Offers"));
const HealthTips = React.lazy(() => import("./pages/HealthTips"));


// importing the user dashboard
const UserDashboard = React.lazy(() => import("./pages/UserDashboard"));
const Profile = React.lazy(() => import("./components/UserDashboard/Profile"));

// importing the admin panel
const Admin_Layout = React.lazy(() => import("./components/AdminPanel/Admin_Layout"));
const AdminUsers = React.lazy(() => import("./pages/Admin-Users"));
const AdminContacts = React.lazy(() => import("./pages/Admin-Contacts"));
const AdminAppointments = React.lazy(() => import("./pages/Admin-Appointments"));
const AdminUpdate = React.lazy(() => import("./pages/AdminUpdate"));
const AdminAppointmentDetails = React.lazy(() => import("./pages/AdminAppointment-Details"));

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar1 />
        <Suspense fallback={<Loading/>}>
          <Routes>
          <Route path="/features" element={<Layout/>}/>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Error />} />

            {/* Navbar 2 Routes */}
            <Route path="/bloodtest" element={<BloodTest />} />
            <Route path="/xray" element={<Xray />} />
            <Route path="/genetictesting" element={<GeneticTesting />} />
            <Route path="/doctorconsultation" element={<DoctorConsultation />} />
            <Route path="/surgery" element={<Surgery />} />
            <Route path="/supplement" element={<Supplement />} />
            <Route path="/healthtips" element={<HealthTips />} />
            <Route path="/offers" element={<Offers />} />
            

            {/* User Dashboard Route */}
            <Route path="/userdashboard" element={<UserDashboard />} />
            <Route path="/profile" element={<Profile />} />

            {/* Admin Panel */}
            <Route path="/admin" element={<Admin_Layout />}>
              <Route path="users" element={<AdminUsers />} />
              <Route path="contacts" element={<AdminContacts />} />
              <Route path="appointments" element={<AdminAppointments />} />
              <Route path="users/:id/edit" element={<AdminUpdate />} />
              <Route path="appointments/:id" element={<AdminAppointmentDetails />} />
            </Route>
          </Routes>
        </Suspense>
        <Footer />
        
      </BrowserRouter>
    </>
  );
}

export default App;
