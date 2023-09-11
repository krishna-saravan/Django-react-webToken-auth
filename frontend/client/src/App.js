import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {checkAuth} from "./features/user";
import Homepage from "./containers/Homepage";
import DashboardPage from "./containers/DashboardPage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";


const APP = () =>{
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuth());
    }, []);

    return(
    <Router>
      <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </Router>
);
};


export default APP