import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";
import Dashboard from "../component/Dashboard"
import SignIn from "../component/SignIn"
import Signup from "../component/Signup";
import Sell from "../component/Sell";
import Detail from '../component/Detail'
import PrivateRoutes from "./privateRoute";
function Navigation() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route element={<PrivateRoutes/>} >
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Sell" element={<Sell />} />
        </Route>

        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/detail/:adId" element={<Detail />} />
      </Routes>
    </BrowserRouter>

  )
}

export default Navigation 