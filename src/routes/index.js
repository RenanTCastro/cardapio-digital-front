import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import HomeClient from "../pages/HomeClient/Home";
import EditEstab from "../pages/EditEstab/EditEstab";



const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />;
};

function RoutesApp() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/Login" element={<Private Item={Login} />} />
          <Route path="/Home-client" element={<HomeClient/>}/>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/EditEstab" element={<EditEstab/>}/>
          </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default RoutesApp;