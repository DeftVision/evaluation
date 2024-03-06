import {useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import { PrivateRoutes, Support, Loading, File, PasswordReset, ForgotPassword, DisplayAnnouncements, IncrementExercise } from "./components/Index";
import UserContext from './components/UserContext';
import { Sidebar, Footer } from './pages/layout/Index';
import { Home, Dashboard, Login, Register, ErrorPage, Evaluation, Admin, LineCheck, User, AccountProfile, Announcement, CreateAnnouncement, PD, ActionForm } from './pages/Index';
import './App.css';




function App() {
    const user_cookie = cookies.get("user_cookie");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getUser() {
            const response = await fetch("http://localhost:8000/api/user/" + user_cookie, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const _response = await response.json();
            if(!response.ok) {
                console.log(_response.error);
            }
            if(response.ok) {
                setUser(_response.user);
            }
            setLoading(true);

        }
            if(user_cookie) {
                getUser();
            } else {
                setLoading(false);
            }
    }, []);

    if(loading) {
        return <Loading />;
    }

    return (
        <UserContext.Provider value={{user, setUser}}>
            <Router>
                <div className="App">
                    <Sidebar />
                    <div className="page">
                        <Container>
                            <Routes>
                                <Route element={<PrivateRoutes />}>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/register" element={<Register newUser/>} />
                                    <Route path="/user" element={<User />} />
                                    <Route path="/edituser/:id" element={<Register />} />

                                    <Route path="/announcement" element={<Announcement/>} />
                                    <Route path="/displayannouncements" element={<DisplayAnnouncements />} />
                                    <Route path="/createannouncement" element={<CreateAnnouncement newAnnouncement />} />
                                    <Route path="/editannouncement/:id" element={<CreateAnnouncement />} />



                                    <Route path="/dashboard" element={<Dashboard />} />
                                    <Route path="/evaluation" element={<Evaluation />} />
                                    <Route path="/file" element={<File />} />
                                    <Route path="/admin" element={<Admin/>} />
                                    <Route path="/lineCheck" element={<LineCheck/>} />
                                    <Route path="/profile" element={<AccountProfile />} />
                                    <Route path="/development" element={<PD />} />
                                    <Route path="/actionform" element={<ActionForm />} />
                                </Route>
                                <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
                                <Route path="/loading" element={<Loading />} />
                                <Route path="/support" element={<Support />} />
                                <Route path="/*" element={<ErrorPage />} />
                                <Route path="/forgotpassword" element={<ForgotPassword />} />
                                <Route path="/sidebar" element={<Sidebar />} />
                                <Route path="/reset" element={<PasswordReset />} />
                                <Route path="/exercise" element={<IncrementExercise />} />


                            </Routes>
                        </Container>
                    </div>
                    <Footer />
                </div>
            </Router>
        </UserContext.Provider>
    );

}

export default App;
