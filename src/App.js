import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Contact from './components/contact/Contact';
import Footer from "./components/footer/Footer";
import Subscription from './components/subscriptions/Subscriptions';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Payment from './components/payement/Payment';
import IptvContext from './components/context/Iptv';
import Admin from './components/admin/Admin';
import Dashboard from './components/admin/Dashboard/Dashboard';
import EditAbonnement from './components/admin/EditAbonnement/EditAbonnement';
import Profile from './components/admin/Profile/Profile';
import Statistique from './components/admin/Statistique/Statistique';
import Messages from './components/admin/Messages/Messages';
import EditForm from './components/admin/EditAbonnement/EditForm/EditForm';

function App() {
  let ctx = useContext(IptvContext);
  console.log(ctx.isPaymentPage);
  return (
    // <IptvContextProvider>
      <BrowserRouter>
        {/* <Cart /> */}
        {/* { !ctx.isPaymentPage && !ctx.isAdminPage && <Header /> } */}
        {/* <Header /> */}
        <Routes>
        {/* <Switch> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/iptv-subscription" element={<Subscription />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/payment" element={<Payment />} />
          <Route path="/admin" element={<Admin />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path='' element={<Statistique />} />
            <Route path="editAbonnement" element={<EditAbonnement />}>
              <Route path="editForm/:id" element={<EditForm />} />
            </Route>
            <Route path="profile" element={<Profile />} />
            <Route path="messages" element={<Messages />} />
          </Route>

        {/* </Switch> */}
        </Routes>
        {/* { !ctx.isPaymentPage && !ctx.isAdminPage && <Footer /> } */}
      </BrowserRouter>
    // </IptvContextProvider>
  );
}

export default App;