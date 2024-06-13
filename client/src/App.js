import './App.css';
import './styles/styles.css'
import './styles/colors.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import Footer from './components/footer'
import TopNavBar from "./components/TopNavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavCategoriesBricks from "./components/NavСategoriesBricks";
import {ADMIN_PAGE, MAIN_PAGE, SUBCATEGORIES_PAGE} from "./constants";
import Subcategories from "./pages/subcategories";
import AdminPage from "./pages/adminPage";
import NotFoundPage from "./pages/notFoundPage";
import React, {useContext} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import LoginPage from "./pages/loginPage";

const App = observer(() => {
      const {user} = useContext(Context)
      return (
        <div className="flex flex-col justify-between align-items-center">
            <Header />
            <TopNavBar />
            <Routes>
                {/*{*/}
                {/*    user.isAuth &&*/}
                    <Route path={ADMIN_PAGE} element={<AdminPage />} />
                {/*}*/}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<NavCategoriesBricks />} />
                <Route path={MAIN_PAGE} element={<NavCategoriesBricks />} />
                <Route path={`${MAIN_PAGE}${SUBCATEGORIES_PAGE}/:id`} element={<Subcategories />} />
                <Route path={SUBCATEGORIES_PAGE} element={<Subcategories />} />
                {/*<Route path={ADMIN_PAGE} element={<AdminPage />} />*/}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </div>
      );
})

export default App;
